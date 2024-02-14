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
      canvas.fillRect(10, 10, 150, 100);
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


  return (
    <main>
      <h1>사다리 사이트</h1>
      <p>사다리 사이트</p>

      <canvas ref={canvasRef} />

      <h2>소개임</h2>
      <p> 멋잇는 게임</p>

      <p>최고로 멋진 사다리 게임 사이트 입니다</p>
      <button onClick={changeColor}>시작하기</button>
      <button>종료하기</button>
    </main>
  );
}