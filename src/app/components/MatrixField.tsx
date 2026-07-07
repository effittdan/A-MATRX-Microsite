"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function MatrixField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationId = 0;
    let particles: Particle[] = [];
    const reduceMotion = prefersReducedMotion();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.max(24, Math.floor((rect.width * rect.height) / 15000));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14,
        r: 2.4 + Math.random() * 3.8,
        phase: index * 0.29
      }));
    };

    const draw = (time: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(width * 0.42, height * 0.42, 20, width * 0.48, height * 0.5, width * 0.62);
      gradient.addColorStop(0, "rgba(255,255,255,0.92)");
      gradient.addColorStop(0.62, "rgba(237,243,239,0.72)");
      gradient.addColorStop(1, "rgba(183,201,189,0.18)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.save();
      context.translate(width * 0.02, height * 0.02);
      context.rotate(-0.055);

      const tissue = new Path2D();
      tissue.moveTo(width * 0.14, height * 0.58);
      tissue.bezierCurveTo(width * 0.18, height * 0.23, width * 0.45, height * 0.13, width * 0.71, height * 0.23);
      tissue.bezierCurveTo(width * 0.92, height * 0.31, width * 0.91, height * 0.73, width * 0.67, height * 0.82);
      tissue.bezierCurveTo(width * 0.45, height * 0.9, width * 0.13, height * 0.82, width * 0.14, height * 0.58);
      context.clip(tissue);

      particles.forEach((particle) => {
        if (!reduceMotion) {
          particle.x += particle.vx + Math.sin(time * 0.0004 + particle.phase) * 0.05;
          particle.y += particle.vy + Math.cos(time * 0.00035 + particle.phase) * 0.04;
        }

        if (particle.x < width * 0.08) particle.x = width * 0.82;
        if (particle.x > width * 0.86) particle.x = width * 0.1;
        if (particle.y < height * 0.16) particle.y = height * 0.84;
        if (particle.y > height * 0.88) particle.y = height * 0.18;
      });

      context.strokeStyle = "rgba(31, 79, 69, 0.34)";
      context.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 118) {
            context.globalAlpha = 1 - distance / 118;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }

      context.globalAlpha = 1;
      particles.forEach((particle) => {
        const pulse = reduceMotion ? 0 : Math.sin(time * 0.002 + particle.phase) * 0.9;
        context.beginPath();
        context.fillStyle = "rgba(31, 79, 69, 0.82)";
        context.arc(particle.x, particle.y, particle.r + pulse, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.strokeStyle = "rgba(201, 178, 126, 0.44)";
        context.arc(particle.x, particle.y, particle.r + pulse + 5, 0, Math.PI * 2);
        context.stroke();
      });

      context.restore();

      context.strokeStyle = "rgba(31, 79, 69, 0.7)";
      context.lineWidth = 1.5;
      context.stroke(tissue);

      context.fillStyle = "rgba(31, 79, 69, 0.86)";
      context.font = "700 12px Avenir Next, Inter, sans-serif";
      context.letterSpacing = "0.08em";
      context.fillText("CONFORMABLE MATRIX FIELD", 24, 30);

      if (!reduceMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="matrix-canvas" ref={canvasRef} aria-label="Animated structural matrix field" />;
}
