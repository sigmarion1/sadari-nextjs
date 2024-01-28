"use client";

import React, { useEffect, useRef, useState } from "react";


const Canvas = ({ fillColor }: { fillColor: string }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [canvasTag, setCavasTag] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas !== null) {
            const ctx = canvas.getContext("2d");
            if (ctx !== null) {
                ctx.fillStyle = fillColor;
                ctx.fillRect(10, 10, 150, 100);
            }
        }

    }, [fillColor]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );

}

export default Canvas;