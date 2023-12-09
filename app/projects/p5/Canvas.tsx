"use client";
import { useEffect, useRef, MutableRefObject } from "react";
import * as p5 from "p5";
import sketch from "./sketch";

export default function Canvas() {
  const p5ContainerRef: MutableRefObject<HTMLInputElement | undefined> =
    useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={p5ContainerRef} />;
}
