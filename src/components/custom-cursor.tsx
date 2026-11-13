// Custom Cursor - Premium interactive cursor
// Follows mouse and expands on hover

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (typeof window === 'undefined' || window.innerWidth < 1024) {
      return;
    }

    let rafId: number;

    const updatePosition = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Don't render on mobile or server
  if (typeof window === 'undefined' || window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0.5 : 1})`,
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>

      {/* Cursor ring */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full border-2 border-white mix-blend-difference transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '50px' : '30px',
          height: isHovering ? '50px' : '30px',
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.5 : 0
        }}
      />
    </>
  );
}
