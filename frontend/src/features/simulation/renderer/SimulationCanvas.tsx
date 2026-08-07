import { useEffect, useRef } from "react";

interface SimulationCanvasProps {
  velocity: number;
  angle: number;
  gravity: number;
}

export default function SimulationCanvas({
  velocity,
  angle,
  gravity,
}: SimulationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

if (!context) return;

const ctx = context;

    const width = canvas.width;
    const height = canvas.height;

    const groundY = height - 50;
    const startX = 60;

    const radians = (angle * Math.PI) / 180;

    const scale = 8;

    let animationId = 0;
    let startTime: number | null = null;

    function animate(timestamp: number) {
      if (startTime === null) {
        startTime = timestamp;
      }

      const t = (timestamp - startTime) / 1000;

      const x = velocity * Math.cos(radians) * t;
      const y =
        velocity * Math.sin(radians) * t -
        0.5 * gravity * t * t;

      const drawX = startX + x * scale;
      const drawY = groundY - y * scale;

      
      ctx.clearRect(0, 0, width, height);
      // Background
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, width, height);


      // Ground
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#475569";
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      // Projectile
      ctx.beginPath();
      ctx.fillStyle = "#3b82f6";
      ctx.arc(drawX, drawY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Continue animation until ball touches ground
      if (drawY <= groundY && drawX <= width) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [velocity, angle, gravity]);

  return (
    <canvas
      ref={canvasRef}
      width={1000}
      height={550}
      className="w-full rounded-xl border border-slate-700 bg-slate-900"
    />
  );
}