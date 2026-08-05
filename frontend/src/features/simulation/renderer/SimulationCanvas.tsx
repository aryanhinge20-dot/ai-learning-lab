import { useEffect, useRef } from "react";

export default function SimulationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      return;
    }

    const context: CanvasRenderingContext2D = ctx;

    let x = 50;
    let y = 50;
    let vx = 4;
    let vy = 0;
    const gravity = 0.3;

    


    function animate() {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      vy += gravity;
      x += vx;
      y += vy;

      context.beginPath();
      context.arc(x, y, 12, 0, Math.PI * 2);
      context.fillStyle = "#3b82f6";
      context.fill();

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={500}
      style={{
        border: "1px solid #333",
        background: "#111",
        borderRadius: "12px",
      }}
    />
  );
}