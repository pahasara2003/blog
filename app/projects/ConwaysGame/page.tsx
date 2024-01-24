"use client";
import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import ConwaysGame from "@/Sketchs/ConwaysGame";

const Page = () => {
  return (
    <div className="bg-fg min-h-screen flex justify-center">
      <NextReactP5Wrapper sketch={ConwaysGame} />
    </div>
  );
};

export default Page;
