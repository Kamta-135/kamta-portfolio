"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
}

export default function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let nodes: Node[] = [];
    let mouse = { x: width / 2, y: height / 2, active: false };
    let rafId: number;

    const density = width < 640 ? 32000 : 22000;

    function initNodes() {
      const count = Math.max(28, Math.min(90, Math.floor((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.6 + 0.8,
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    }

    initNodes();

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      const maxDist = width < 640 ? 110 : 150;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        if (!prefersReducedMotion) {
          a.x += a.vx;
          a.y += a.vy;
          a.pulse += 0.02;

          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;

          if (mouse.active) {
            const dx = a.x - mouse.x;
            const dy = a.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
              a.x += dx / dist * 0.6;
              a.y += dy / dist * 0.6;
            }
          }
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.5;
            const grad = ctx!.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(34,211,238,${opacity})`);
            grad.addColorStop(1, `rgba(167,139,250,${opacity})`);
            ctx!.strokeStyle = grad;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        const glow = prefersReducedMotion ? 1 : 0.6 + Math.sin(n.pulse) * 0.4;
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(94,234,212,${0.7 * glow})`;
        ctx!.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
