import { useEffect, useRef } from 'react';

// PERFORMANCE-OPTIMIZED: Uses refs + direct DOM manipulation
// instead of React state to avoid re-renders on every animation frame.
export default function CursorGlow() {
  const glowRef = useRef(null);
  const posRef = useRef({ x: -500, y: -500 });
  const smoothRef = useRef({ x: -500, y: -500 });
  const rafRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const lx = smoothRef.current.x + (posRef.current.x - smoothRef.current.x) * 0.1;
      const ly = smoothRef.current.y + (posRef.current.y - smoothRef.current.y) * 0.1;

      // Only update DOM if moved more than 0.5px to avoid unnecessary paints
      if (Math.abs(lx - smoothRef.current.x) > 0.5 || Math.abs(ly - smoothRef.current.y) > 0.5) {
        smoothRef.current = { x: lx, y: ly };
        el.style.background = `radial-gradient(600px circle at ${lx}px ${ly}px, rgba(99, 102, 241, 0.14), transparent 70%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30"
      style={{ willChange: 'background', background: 'transparent' }}
    />
  );
}
