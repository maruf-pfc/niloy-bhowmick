"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Midnight Liquid Glass - Background Engine
 * Creates a dual-layer parallax gradient effect that reacts to mouse movement.
 * Layer 1: Neon Blue (Primary) - Follows closely
 * Layer 2: Neon Purple (Secondary) - Follows with lag/parallax
 */
export default function MouseMoveEffect() {
  const requestRef = useRef<number>(0);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos1 = useRef({ x: 0, y: 0 }); // Layer 1 position
  const currentPos2 = useRef({ x: 0, y: 0 }); // Layer 2 position

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // 1. Check if mobile/touch device
    const checkMobile = () => {
      const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      setIsMobile(isTouch);

      if (typeof window !== 'undefined') {
        // Initialize center
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        targetPos.current = { x: cx, y: cy };
        currentPos1.current = { x: cx, y: cy };
        currentPos2.current = { x: cx, y: cy };
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 2. Mouse Move Handler (Only adding if not mobile to save resources)
    const handleMouseMove = (event: MouseEvent) => {
      targetPos.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // 3. Animation Loop
    const animate = () => {
      // Only animate if refs are available
      if (!layer1Ref.current || !layer2Ref.current) return;

      // Smooth damping
      const ease1 = 0.08;
      const ease2 = 0.04;

      currentPos1.current.x += (targetPos.current.x - currentPos1.current.x) * ease1;
      currentPos1.current.y += (targetPos.current.y - currentPos1.current.y) * ease1;

      currentPos2.current.x += (targetPos.current.x - currentPos2.current.x) * ease2;
      currentPos2.current.y += (targetPos.current.y - currentPos2.current.y) * ease2;

      // DIRECT DOM UPDATE (No React Re-renders)
      const p1 = currentPos1.current;
      const p2 = currentPos2.current;

      layer1Ref.current.style.background = `radial-gradient(800px circle at ${p1.x}px ${p1.y}px, rgba(29, 78, 216, 0.12), transparent 60%)`;
      layer2Ref.current.style.background = `radial-gradient(600px circle at ${p2.x}px ${p2.y}px, rgba(147, 51, 234, 0.08), transparent 60%)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    if (!isMobile) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile]);

  // If mobile, render static gradient or nothing to save GPU
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-900/10 blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-purple-900/10 blur-[80px] animate-pulse-slow delay-1000" />
      </div>
    );
  }

  return (
    <>
      {/* Base Ambient Glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.1) 0%, transparent 70%)'
        }}
      />

      {/* Layer 1 */}
      <div
        ref={layer1Ref}
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000 ease-out will-change-[background]"
      />

      {/* Layer 2 */}
      <div
        ref={layer2Ref}
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000 ease-out will-change-[background]"
      />
    </>
  );
}
