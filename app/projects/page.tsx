"use client";
import { useRef, useState } from "react";
import { Slider } from "@nextui-org/react";

import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import p5 from "p5"; //Import this for typechecking and intellisense

interface ComponentProps {
  size: number;
}

class particle {
  position: p5.Vector;
  velocity: p5.Vector;
  acc: p5.Vector;
  mass: number;
  radius: number;

  constructor(
    position: number[],
    velocity: number[],
    acc: number[],
    mass: number,
    p: p5
  ) {
    this.position = p.createVector(position[0], position[1]);
    this.velocity = p.createVector(velocity[0], velocity[1]);
    this.acc = p.createVector(acc[0], acc[1]);
    this.mass = mass;
    this.radius = p.sqrt(this.mass) * 2;
  }

  attractTo(neighbor: particle, p: p5) {
    let force = p5.Vector.sub(this.position, neighbor.position);
    let distanceSq = p.constrain(force.magSq(), 100, 1000);
    let G = 1;
    let strength = (G * (this.mass * neighbor.mass)) / distanceSq;
    force.setMag(strength);
    neighbor.applyForce(force);
  }

  applyForce(force: p5.Vector) {
    this.acc.set(force.x / this.mass, force.y / this.mass);
  }

  update(p: p5) {
    this.velocity.add(this.acc);
    this.position.add(this.velocity);
    this.acc.set(0, 0);
  }

  draw(p: p5) {
    p.noStroke();
    p.fill(255);
    p.ellipse(this.position.x, this.position.y, this.radius * 2);
  }
}

let A: particle;
let B: particle;
let C: particle;

let Particles: particle[] = [];
let limit = 0.5;

const Scene = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(600, 600).parent(canvasParentRef);
    A = new particle([0, 0], [0, 0, 0], [0, 0], 100, p5);
    B = new particle([150, 0], [0, 0, 0], [0, 0], 100, p5);
    C = new particle([0, 150], [0, 0, 0], [0, 0], 100, p5);
    let f = 30;
    for (let i = 0; i < 500; i++) {
      let x = Math.floor(i / 20) - 7;
      let y = (i % 15) - 7;
      Particles.push(new particle([i - 250, -80], [0, 2, 0], [0, 0], 0.2, p5));
    }
  };

  const draw = (p5: p5Types) => {
    p5.background("#303233");
    p5.translate(p5.width / 2, p5.height / 2);

    for (let i = 0; i < 500; i++) {
      // for (let j = 0; j < 200; j++) {
      //   Particles[i].attractTo(Particles[j], p5);
      // }

      A.attractTo(Particles[i], p5);
      // B.attractTo(Particles[i], p5);
      // C.attractTo(Particles[i], p5);

      // Particles[i].attractTo(A, p5);
      // Particles[i].attractTo(B, p5);
      // Particles[i].attractTo(C, p5);

      Particles[i].update(p5);
      Particles[i].draw(p5);
    }

    // A.attractTo(B, p5);
    // B.attractTo(A, p5);

    // A.attractTo(C, p5);
    // B.attractTo(C, p5);

    // C.attractTo(B, p5);
    // C.attractTo(A, p5);

    // A.update(p5);
    // B.update(p5);
    // C.update(p5);

    A.draw(p5);
    // B.draw(p5);
    // C.draw(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

const page = () => {
  return (
    <div className="bg-fg h-[800px] flex justify-center  m-auto ">
      <Scene />;
    </div>
  );
};

export default page;
