// Anti-scraping content protection
// Prevents right-click, text selection, and automated copying

import { useEffect } from "react";

export function ContentProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable common keyboard shortcuts for copying
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+C, Ctrl+X, Ctrl+U (view source), F12 (devtools)
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'u')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I (devtools)
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J (console)
        (e.ctrlKey && e.key === 's') // Ctrl+S (save page)
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection for specific elements
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      // Allow selection in input/textarea for usability
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // Detect DevTools opening (simple check)
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        // DevTools likely open - add watermark
        document.body.style.setProperty('--devtools-open', 'true');
      } else {
        document.body.style.setProperty('--devtools-open', 'false');
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    
    // Check for DevTools periodically
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Add invisible watermark to deter scrapers
    const watermark = document.createElement('div');
    watermark.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      font-size: 120px;
      color: rgba(255, 255, 255, 0.03);
      pointer-events: none;
      user-select: none;
      z-index: 9999;
      font-weight: bold;
      white-space: nowrap;
    `;
    watermark.textContent = 'ZOHAIB SUMBAL © ' + new Date().getFullYear();
    document.body.appendChild(watermark);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(devToolsInterval);
      if (watermark.parentNode) {
        watermark.parentNode.removeChild(watermark);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
