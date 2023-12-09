"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import Panel from "./Panel";
import React from "react";
import Anime from "./Anime";

const page = () => {
  const [vel, setVel] = useState([]);
  return (
    <div className="flex justify-center p-3  items-center flex-wrap">
      <Anime />
      <Panel />
    </div>
  );
};

export default page;
