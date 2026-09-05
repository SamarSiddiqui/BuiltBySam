import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const listener = () => setReducedMotion(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // Circle cursor GSAP follower
  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMoveCircle = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out',
      });
    };

    const handleMouseLeaveCircle = () => {
      gsap.to(cursor, { opacity: 0 });
    };

    document.addEventListener('mousemove', handleMouseMoveCircle);
    document.addEventListener('mouseleave', handleMouseLeaveCircle);

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveCircle);
      document.removeEventListener('mouseleave', handleMouseLeaveCircle);
    };
  }, []);

  // Canvas star/dust particle trail
  useEffect(() => {
    if (reducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const particles = [];
    const MAX_PARTICLES = 60;
    const MIN_DISTANCE_TO_SPAWN = 20;
    const SPARKLE_CHANCE = 0.15;
    // Hues: 35 (Sand), 22 (Copper), 45 (Gold) 
    const HUES = [35, 22, 45];

    let mouseX = 0, mouseY = 0;
    let lastX = 0, lastY = 0;
    let hasMoved = false;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const spawnParticle = (x, y) => {
      if (particles.length >= MAX_PARTICLES) {
        particles.shift();
      }
      const isSparkle = Math.random() < SPARKLE_CHANCE;
      const hue = HUES[Math.floor(Math.random() * HUES.length)];

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.1 + Math.random() * 0.15,
        age: 0,
        maxAge: isSparkle ? 800 : 1100,
        hue,
        size: isSparkle ? 2.5 : 1.5,
        kind: isSparkle ? 'sparkle' : 'dust'
      });
    };

    const handleMouseMoveCanvas = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        lastX = mouseX;
        lastY = mouseY;
        return;
      }

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const distance = Math.hypot(dx, dy);

      if (distance < MIN_DISTANCE_TO_SPAWN) return;

      const steps = Math.min(Math.floor(distance / MIN_DISTANCE_TO_SPAWN), Math.floor(MAX_PARTICLES / 2));
      for (let i = 1; i <= steps; i++) {
        const progress = i / steps;
        spawnParticle(lastX + dx * progress, lastY + dy * progress);
      }

      lastX = mouseX;
      lastY = mouseY;
    };

    window.addEventListener('mousemove', handleMouseMoveCanvas);

    const drawSparkle = (c, x, y, size, hue, opacity) => {
      c.save();
      c.translate(x, y);
      c.fillStyle = `hsla(${hue}, 90%, 75%, ${opacity})`;
      c.beginPath();
      c.moveTo(0, -size * 2);
      c.lineTo(size * 0.4, -size * 0.4);
      c.lineTo(size * 2, 0);
      c.lineTo(size * 0.4, size * 0.4);
      c.lineTo(0, size * 2);
      c.lineTo(-size * 0.4, size * 0.4);
      c.lineTo(-size * 2, 0);
      c.lineTo(-size * 0.4, -size * 0.4);
      c.closePath();
      c.fill();
      c.restore();
    };

    let animFrame = 0;
    let lastTime = performance.now();

    const loop = (now) => {
      const dt = now - lastTime;
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += dt;

        if (p.age >= p.maxAge) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy + 0.02 * (dt / 16);
        p.vx *= 0.99;

        const opacity = (1 - p.age / p.maxAge) * 0.6;

        if (p.kind === 'sparkle') {
          drawSparkle(ctx, p.x, p.y, p.size, p.hue, opacity);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${opacity})`;
          ctx.fill();
        }
      }

      animFrame = requestAnimationFrame(loop);
    };

    animFrame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMoveCanvas);
      cancelAnimationFrame(animFrame);
    };
  }, [reducedMotion]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[999998]"
      />
      <div
        ref={cursorRef}
        className="w-5 h-5 rounded-full bg-[rgba(233,233,206,0.8)] fixed z-[999999] top-0 left-0 pointer-events-none mix-blend-difference opacity-0 proTablet:w-0 proTablet:cursor-pointer"
      />
    </>
  );
};

export default Cursor;
