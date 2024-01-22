"use client";
import { type Sketch } from "@p5-wrapper/react";

const sketch: Sketch = (p5) => {
  class particle {
    position: any;
    velocity: any;
    acc: any;
    mass: number;
    color: string;

    radius: number;
    path: number[][];

    constructor(
      position: number[],
      velocity: number[],
      color: string,
      mass: number
    ) {
      this.position = p5.createVector(position[0], position[1]);
      this.velocity = p5.createVector(velocity[0], velocity[1]);
      this.acc = p5.createVector(0, 0);
      this.mass = mass;
      this.color = color;
      this.radius = 2 * Math.sqrt(this.mass) + 2;
      this.path = [[position[0], position[1]]];
    }

    attractTo(neighbor: particle) {
      let force = this.position.copy();
      force.sub(neighbor.position);
      let distanceSq = p5.constrain(force.magSq(), 100, 1000);
      let G = 1;
      let strength = (G * (this.mass * neighbor.mass)) / distanceSq;
      force.setMag(strength);
      neighbor.applyForce(force);
    }

    applyForce(force: any) {
      this.acc.add(force.x / this.mass, force.y / this.mass);
    }

    update() {
      this.velocity.add(this.acc);
      this.position.add(this.velocity);
      this.path.push([this.position.x, this.position.y]);
      this.acc.set(0, 0);
      if (this.path.length > 200) {
        this.path.shift();
      }
    }

    draw() {
      p5.stroke(255);
      p5.noFill();
      p5.beginShape();
      for (var i = 0; i < this.path.length; i++) {
        p5.vertex(this.path[i][0], this.path[i][1]);
      }
      p5.endShape();

      p5.noStroke();
      p5.fill(this.color);
      p5.ellipse(this.position.x, this.position.y, this.radius + 5);
    }

    showVector() {
      let vec = this.velocity.copy();
      let angle = vec.heading();
      vec.mult(20);
      p5.stroke(255);
      p5.fill(255);
      p5.push();
      p5.translate(this.position.x, this.position.y);

      p5.line(0, 0, vec.x, vec.y);
      p5.pop();
      p5.push();

      p5.translate(this.position.x, this.position.y);

      p5.translate(vec.x, vec.y);

      p5.rotate(angle + p5.PI / 2);
      p5.triangle(3, 0, -3, 0, 0, -6);

      p5.pop();
    }
  }
  let play: any = 0;

  let InitialData = {
    mass: [130, 30, 2],
    velocity: [
      [0, 1.35],
      [0, -5.5],
      [0, -4.95],
    ],
    position: [
      [0, 0],
      [170, 0],
      [200, 0],
    ],
    color: ["#f1a04d", "#65a8db", "#ffffff"],
  };
  let Particles: particle[] = [];

  p5.setup = () => {
    p5.createCanvas(700, 600);

    let N = InitialData.mass.length;

    for (let i = 0; i < N; i++) {
      Particles.push(
        new particle(
          InitialData.position[i],
          InitialData.velocity[i],
          InitialData.color[i],
          InitialData.mass[i]
        )
      );
    }
  };

  p5.updateWithProps = (props: any) => {
    if (props.play) {
      play = props.play;
    }
    if (props.InitialData) {
      InitialData = props.InitialData;

      Particles = [];
      let N = InitialData.mass.length;

      for (let i = 0; i < N; i++) {
        Particles.push(
          new particle(
            InitialData.position[i],
            InitialData.velocity[i],
            InitialData.color[i],
            InitialData.mass[i]
          )
        );
      }
    }
  };
  p5.mousePressed = () => {
    Particles = [];
    let N = InitialData.mass.length;

    for (let i = 0; i < N; i++) {
      Particles.push(
        new particle(
          InitialData.position[i],
          InitialData.velocity[i],
          InitialData.color[i],
          InitialData.mass[i]
        )
      );
    }
  };

  p5.draw = () => {
    p5.background("#303233");
    p5.translate(p5.width / 2, p5.height / 2);

    for (let i = 0; i < Particles.length; i++) {
      for (let j = 0; j < Particles.length; j++) {
        if (i !== j) {
          Particles[i].attractTo(Particles[j]);
        }
      }
    }

    let COG = p5.createVector(0, 0);
    let mass = 0;
    for (let i = 0; i < Particles.length; i++) {
      if (play % 2 == 0) {
        Particles[i].update();
      } else {
        Particles[i].showVector();
      }
      Particles[i].acc.set(0, 0);

      mass += Particles[i].mass;
      let vec = Particles[i].position.copy();

      vec.mult(Particles[i].mass);
      COG.add(vec);

      Particles[i].draw();
    }

    COG.div(mass);

    p5.fill("#9F7AEA");
    p5.textAlign("center");
    p5.text("COG", COG.x, COG.y + 15);
    p5.ellipse(COG.x, COG.y, 5);
  };
};

export default sketch;
