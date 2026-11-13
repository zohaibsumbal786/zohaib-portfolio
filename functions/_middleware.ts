// Cloudflare Pages Functions middleware for TanStack Start
// Enterprise-grade security + Anti-scraping protection

export async function onRequest(context: any) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const ip = request.headers.get('cf-connecting-ip') || 
             request.headers.get('x-forwarded-for') || 
             'unknown';
  
  // Block common scraping tools and bots
  const blockedAgents = [
    'curl', 'wget', 'python-requests', 'scrapy', 'beautifulsoup', 
    'selenium', 'puppeteer', 'playwright', 'headless', 'bot',
    'spider', 'crawler', 'scraper', 'httpclient', 'apache-httpclient'
  ];
  
  // Allow legitimate search engine bots
  const allowedBots = ['googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider'];
  
  const isBlockedAgent = blockedAgents.some(agent => userAgent.includes(agent));
  const isAllowedBot = allowedBots.some(bot => userAgent.includes(bot));
  
  // Block scrapers but allow search engines
  if (isBlockedAgent && !isAllowedBot) {
    return new Response('Access Denied - Automated access not permitted', { 
      status: 403,
      headers: { 
        'Content-Type': 'text/plain',
        'X-Robots-Tag': 'noindex, nofollow'
      }
    });
  }
  
  const response = await context.next();
  
  // Clone the response to modify headers
  const newResponse = new Response(response.body, response);
  
  // Enterprise Security Headers
  const securityHeaders = {
    // Prevent XSS attacks
    'X-XSS-Protection': '1; mode=block',
    
    // Prevent clickjacking (DENY = complete protection)
    'X-Frame-Options': 'DENY',
    
    // Prevent MIME sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Hide referrer to protect user privacy
    'Referrer-Policy': 'no-referrer',
    
    // Block all dangerous browser features
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), autoplay=(), encrypted-media=(), picture-in-picture=()',
    
    // Force HTTPS for 2 years (HSTS)
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    
    // Enhanced Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
      "block-all-mixed-content"
    ].join('; '),
    
    // SEO for legitimate crawlers
    'X-Robots-Tag': 'index, follow, max-image-preview:large, max-snippet:-1',
    
    // Anti-scraping marker
    'X-Content-Protection': 'enabled',
    
    // Cache control for performance
    'Cache-Control': response.headers.get('content-type')?.includes('html') 
      ? 'public, max-age=3600, must-revalidate' 
      : 'public, max-age=31536000, immutable'
  };
  
  // Apply all security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    newResponse.headers.set(key, value);
  });
  
  return newResponse;
}
