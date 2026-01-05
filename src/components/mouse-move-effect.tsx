"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Midnight Liquid Glass - Background Engine
 * Creates a dual-layer parallax gradient effect that reacts to mouse movement.
 * Layer 1: Neon Blue (Primary) - Follows closely
 * Layer 2: Neon Purple (Secondary) - Follows with lag/parallax
 */
export default function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Use refs for smooth animation values to avoid re-renders on every frame
  const requestRef = useRef<number>(0);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos1 = useRef({ x: 0, y: 0 }); // Layer 1 position
  const currentPos2 = useRef({ x: 0, y: 0 }); // Layer 2 position

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update target position based on viewport percentage for smoother parallax
      // Center (0,0) is the middle of the screen
      targetPos.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const animate = () => {
      // Smooth damping factor (lerp)
      // Layer 1 (Blue) - Faster
      currentPos1.current.x += (targetPos.current.x - currentPos1.current.x) * 0.08;
      currentPos1.current.y += (targetPos.current.y - currentPos1.current.y) * 0.08;

      // Layer 2 (Purple) - Slower (Parallax effect)
      currentPos2.current.x += (targetPos.current.x - currentPos2.current.x) * 0.04;
      currentPos2.current.y += (targetPos.current.y - currentPos2.current.y) * 0.04;

      setMousePosition({ 
        x: currentPos1.current.x, 
        y: currentPos1.current.y 
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    // Initial position center screen
    if (typeof window !== 'undefined') {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        targetPos.current = { x: cx, y: cy };
        currentPos1.current = { x: cx, y: cy };
        currentPos2.current = { x: cx, y: cy };
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Calculate secondary layer position based on current state + parallax offset
  const layer2X = currentPos2.current.x;
  const layer2Y = currentPos2.current.y;

  return (
    <>
      {/* Base Ambient Glow (Static) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Primary Layer - Neon Blue */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000 ease-out will-change-transform"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.12), transparent 60%)`,
        }}
      />
      
      {/* Secondary Layer - Neon Purple (Parallax) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000 ease-out will-change-transform"
        style={{
          background: `radial-gradient(600px circle at ${layer2X}px ${layer2Y}px, rgba(147, 51, 234, 0.08), transparent 60%)`,
        }}
      />
    </>
  );
}
