"use client";

import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawWave = (
      yOffset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      lineWidth: number
    ) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;

      for (let x = 0; x <= canvas.width; x += 2) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 1.3) * amplitude * 0.5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      const h = canvas.height;

      // Multiple wave layers at different depths
      drawWave(h * 0.55, 30, 0.003, 0.8, "rgba(0, 212, 212, 0.04)", 2);
      drawWave(h * 0.6, 25, 0.004, 1.0, "rgba(0, 212, 212, 0.06)", 1.5);
      drawWave(h * 0.65, 20, 0.005, 1.2, "rgba(0, 212, 212, 0.08)", 1.5);
      drawWave(h * 0.7, 15, 0.006, 1.5, "rgba(0, 212, 212, 0.05)", 1);
      drawWave(h * 0.75, 18, 0.003, 0.6, "rgba(56, 189, 248, 0.04)", 1);

      // Subtle floating particles
      for (let i = 0; i < 30; i++) {
        const px =
          ((Math.sin(time * 0.3 + i * 2.5) + 1) / 2) * canvas.width;
        const py =
          ((Math.cos(time * 0.2 + i * 1.8) + 1) / 2) * canvas.height;
        const opacity = 0.1 + Math.sin(time + i) * 0.05;
        const size = 1 + Math.sin(time * 0.5 + i) * 0.5;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 212, ${opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      animate();
    } else {
      // Draw one static frame
      time = 0;
      const h = canvas.height;
      drawWave(h * 0.6, 25, 0.004, 0, "rgba(0, 212, 212, 0.06)", 1.5);
      drawWave(h * 0.65, 20, 0.005, 0, "rgba(0, 212, 212, 0.08)", 1.5);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
