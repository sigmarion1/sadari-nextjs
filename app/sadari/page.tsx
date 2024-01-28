
"use client"

import React, { useState } from "react";
import Canvas from "./cavas"

export default function Info() {

  const [fillColor, setFillColor] = useState("red");
  const changeColor = () => {
    console.log("changeColor");
    setFillColor("blue");
  }

  return (
    <main>
      <h1>사다리 사이트</h1>
      <p>사다리 사이트</p>

      <Canvas fillColor={fillColor} />
      <button onClick={changeColor}>색깔 바꾸기</button>



      <h2>소개임</h2>
      <p> 멋잇는 게임</p>

      <p>최고로 멋진 사다리 게임 사이트 입니다</p>
      <button>시작하기</button>
      <button>종료하기</button>
    </main>
  );
}
