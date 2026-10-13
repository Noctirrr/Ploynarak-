import { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle dampening
      setMousePos({
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100),
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none" aria-hidden="true">
      {/* Base Canvas Wash */}
      <div className="absolute inset-0 bg-[#FAF8F5]" />

      {/* Subtle Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDFB] via-[#FAF6F3] to-[#FBF4F5] opacity-90" />

      {/* Floating Blurred Orbs (Carefully tuned blush pink, warm champagne beige, soft ivory) */}
      {/* Orb 1: Soft Blush Pink (Top Left / Center) */}
      <div
        className="animate-float-1 absolute -top-20 -left-20 h-[520px] w-[520px] rounded-full opacity-65 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(254, 226, 233, 0.9) 0%, rgba(253, 235, 239, 0.45) 60%, transparent 80%)',
        }}
      />

      {/* Orb 2: Warm Beige / Cashmere Glow (Right / Upper-Mid) */}
      <div
        className="animate-float-2 absolute top-1/4 -right-24 h-[580px] w-[580px] rounded-full opacity-60 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(246, 235, 222, 0.95) 0%, rgba(250, 241, 232, 0.45) 60%, transparent 85%)',
        }}
      />

      {/* Orb 3: Tender Rose Quartz (Center-Bottom) */}
      <div
        className="animate-float-3 absolute bottom-1/4 left-1/10 h-[480px] w-[480px] rounded-full opacity-55 blur-[105px]"
        style={{
          background: 'radial-gradient(circle, rgba(253, 222, 229, 0.85) 0%, rgba(250, 232, 236, 0.4) 65%, transparent 80%)',
        }}
      />

      {/* Orb 4: Warm Ivory Candlelight (Bottom Right) */}
      <div
        className="animate-float-1 absolute -bottom-24 -right-16 h-[540px] w-[540px] rounded-full opacity-65 blur-[125px]"
        style={{
          background: 'radial-gradient(circle, rgba(247, 237, 225, 0.9) 0%, rgba(253, 246, 240, 0.5) 60%, transparent 80%)',
        }}
      />

      {/* Animated Glowing Light Source (Breathing ambient center glow) */}
      <div
        className="animate-soft-glow absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[640px] w-[640px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 243, 246, 0.75) 0%, rgba(255, 248, 243, 0.35) 50%, transparent 75%)',
        }}
      />

      {/* Subtle Interactive Mouse Glow */}
      <div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[130px] transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          background: 'radial-gradient(circle, rgba(252, 218, 226, 0.8) 0%, rgba(250, 233, 222, 0.3) 60%, transparent 80%)',
        }}
      />

      {/* Ultra-subtle Micro Mesh Texture for Luxury Tactile Feel */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(rgba(80, 50, 60, 0.8) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
