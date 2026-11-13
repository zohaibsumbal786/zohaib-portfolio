// Professional Loading Screen
// Shows on first visit with stunning animations

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if user has seen loading screen before (in this session)
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (hasSeenLoading) {
      // Skip loading screen if already seen this session
      setIsLoading(false);
      return;
    }

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Faster at start, slower at end (realistic loading)
        return prev + Math.random() * 15;
      });
    }, 100);

    // Wait for minimum display time + progress complete
    const minDisplayTime = setTimeout(() => {
      if (progress >= 100) {
        startFadeOut();
      }
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minDisplayTime);
    };
  }, []);

  useEffect(() => {
    // When progress reaches 100%, start fade out
    if (progress >= 100 && isLoading) {
      setTimeout(startFadeOut, 500);
    }
  }, [progress, isLoading]);

  const startFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
      // Mark as seen in this session
      sessionStorage.setItem('hasSeenLoading', 'true');
    }, 800);
  };

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F6_1px,transparent_1px),linear-gradient(to_bottom,#3B82F6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Name with animations */}
        <div className="flex flex-col items-center gap-4">
          {/* Animated circle loader */}
          <div className="relative h-32 w-32">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#3B82F6]/20" />
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#3B82F6] animate-spin"
              style={{ animationDuration: '1.5s' }}
            />
            
            {/* Inner pulsing ring */}
            <div
              className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#06B6D4] animate-spin"
              style={{ animationDuration: '2s', animationDirection: 'reverse' }}
            />

            {/* Center dot with pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] animate-pulse" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3B82F6]/30 to-[#06B6D4]/30 blur-2xl animate-pulse" />
          </div>

          {/* Name with typewriter effect */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Z
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                o
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                h
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                a
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                i
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                b
              </span>
              <span className="inline-block animate-fadeInUp opacity-0 mx-2" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                {' '}
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                S
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
                u
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
                m
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                b
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
                a
              </span>
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                l
              </span>
            </h1>
            
            <p
              className="text-sm font-medium tracking-widest text-[#06B6D4] opacity-0 animate-fadeInUp"
              style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
            >
              DATA SCIENTIST & AI ENGINEER
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 space-y-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
          {/* Progress bar container */}
          <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
            {/* Animated background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
            
            {/* Actual progress */}
            <div
              className="h-full bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Progress percentage */}
          <div className="flex justify-between text-xs text-white/60">
            <span>Loading portfolio...</span>
            <span>{Math.floor(Math.min(progress, 100))}%</span>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#3B82F6]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        className="absolute bottom-12 text-center opacity-0 animate-fadeInUp"
        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
      >
        <p className="text-xs font-medium tracking-widest text-white/40">
          BUILDING INTELLIGENT SYSTEMS
        </p>
      </div>
    </div>
  );
}
