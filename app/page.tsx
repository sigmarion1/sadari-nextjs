"use client"
import { RefObject, useEffect } from "react";
import { useCanvas } from "./hooks/useCanvas";

export default function Home() {
  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(500, 500, () => {
  });

  useEffect(() => {
    initCanvas();
  })

  const initCanvas = () => {
    const canvas = canvasRef.current?.getContext("2d");
    if (canvas) {
      canvas.clearRect(0, 0, 500, 500);
      canvas.fillStyle = "red";
      canvas.fillRect(0, 0, 150, 100);
    }
  }

  const changeColor = () => {
    console.log("changeColor");
    const canvas = canvasRef.current?.getContext("2d");
    if (canvas) {
      // canvas.clearRect(0, 0, 500, 500);
      canvas.fillStyle = "blue";
      canvas.fillRect(200, 200, 400, 400);
    }
  }

  const drawText = () => {
    const canvas = canvasRef.current?.getContext("2d");
    if (canvas) {
      canvas.font = "30px Arial";
      canvas.fillText("임성하 김개똥", 100, 500);
    }
  }


  return (
    <main>
      <canvas ref={canvasRef} />
    </main>
  );
}