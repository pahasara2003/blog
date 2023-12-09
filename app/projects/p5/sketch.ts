import * as p5 from "p5";

export default function sketch(p: any) {
  class Ball {
    pos: any;
    v: any;
    diameter: any;
    mass: any;
    public constructor(x: any, y: any, v_x: any, v_y: any, r: any, m: any) {
      this.pos = p.createVector(x, y); //Initial position
      this.v = p.createVector(v_x, v_y); //Initial velocity
      this.diameter = r;
      this.mass = m;
    }

    public collide() {
      var Pos = this.pos.copy();
      Pos.add(this.v.x * delta_t, this.v.y * delta_t);

      for (let other of balls) {
        var other_Pos = other.pos.copy();
        other_Pos.add(p5.Vector.mult(other.v, delta_t));

        if (
          p5.Vector.dist(Pos, other_Pos) <=
          (this.diameter + other.diameter) / 2
        ) {
          let j = p5.Vector.sub(Pos, other_Pos).normalize(); //unit vector
          const delta_v = p5.Vector.sub(this.v, other.v); //  u1 - u2
          const m_frac = 1 / this.mass + 1 / other.mass;
          const J = (2 * p5.Vector.dot(j, delta_v)) / m_frac;
          j.setMag(J);

          this.v.set(p5.Vector.sub(this.v, p5.Vector.div(j, this.mass)));
          other.v.set(p5.Vector.add(other.v, p5.Vector.div(j, other.mass)));
          // update velocity
        }
      }
    }

    edge() {
      const h =
        -(
          parseInt(p.select("#height-slider").value()) *
          Math.min(Math.round(window.innerWidth * 0.9), 600)
        ) /
          100 +
        Math.min(Math.round(window.innerWidth * 0.9), 600) / 2;

      var Pos = this.pos.copy();
      Pos.add(this.v.x * delta_t, this.v.y * delta_t);

      if (Math.abs(Pos.x) > (p.width - this.diameter) / 2) {
        this.v.set(this.v.x * -1, this.v.y);
        count++;
        momenta += 2 * this.mass * Math.abs(this.v.x);
      }
      if (Pos.y > (p.height - this.diameter) / 2) {
        this.v.set(this.v.x, -1 * this.v.y);
        count++;
        momenta += 2 * this.mass * Math.abs(this.v.y);
      }
      if (Pos.y < h + this.diameter / 2) {
        this.v.set(this.v.x, -1 * this.v.y);
        count++;
        momenta += 2 * this.mass * Math.abs(this.v.y);
      }
      if (Pos.y < h + this.diameter + 20) {
        this.v.set(0, Math.sqrt(this.v.x ** 2 + this.v.y ** 2));
        count++;
        momenta += 2 * this.mass * Math.abs(this.v.y);
      }
      p.line(p.width / 2, h, -p.width / 2, h);
    }

    update() {
      this.pos.add(this.v.x * delta_t, this.v.y * delta_t);
      p.rectMode(p.CENTER);
      p.fill("#9F7AEA");
      p.noStroke();
      p.circle(this.pos.x, this.pos.y, this.diameter);
    }
  }

  var count = 0;
  var t = 0;
  let balls: any[] = [];
  const delta_t = 0.05;
  var momenta = 0;

  p.windowResized = () => {
    p.resizeCanvas(
      Math.min(Math.round(window.innerWidth * 0.9), 600),
      Math.min(Math.round(window.innerWidth * 0.9), 600)
    );
  };
  p.setup = function () {
    p.createCanvas(
      Math.min(Math.round(window.innerWidth * 0.9), 600),
      Math.min(Math.round(window.innerWidth * 0.9), 600)
    );

    for (let i = 0; i < parseInt(p.select("#count").value()); i++) {
      balls.push(
        new Ball(
          p.width * 0.9 * (Math.random() - 0.5), // x
          p.height * 0.9 * (Math.random() - 0.5), // y
          0, // v_x
          40, // v_y
          7, // r
          1 // m
        )
      );
    }
  };

  p.draw = function () {
    var energy = 0;
    var v_rms = 0;
    momenta = 0;

    p.background("#292a2b");
    p.translate(p.width / 2, p.height / 2);

    for (let ball of balls) {
      v_rms += ball.v.mag() ** 2;

      energy += 0.5 * ball.mass * ball.v.mag() ** 2;
      ball.collide();
      ball.edge();
      ball.update();
    }

    t += delta_t;
    p.fill(255);
    p.textSize(18);
    p.text(
      "Total Energy " + (energy / 1000).toFixed(2).toString() + "kJ",
      120,
      300
    );
    p.text(
      "V_rms " +
        Math.sqrt(v_rms / balls.length)
          .toFixed(2)
          .toString(),
      -120,
      300
    );

    p.text("Count " + (count / t).toFixed(2).toString(), 0, 300);

    p.stroke(255);
    p.noFill();

    p.rect(0, 0, p.width, p.height);
  };
}
