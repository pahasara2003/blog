class Ball {
  constructor(x, y, z, v_x, v_y, v_z, r, m) {
    this.pos = createVector(x, y, z); //Initial position
    this.v = createVector(v_x, v_y, v_z); //Initial velocity
    this.diameter = r;
    this.mass = m;
  }

  collide() {
    var Pos = this.pos.copy();
    Pos.add(this.v.x * delta_t, this.v.y * delta_t, this.v.z * delta_t);

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
    var Pos = this.pos.copy();
    Pos.add(this.v.x * delta_t, this.v.y * delta_t, this.v.z * delta_t);

    if (Math.abs(Pos.x) > (300 - this.diameter) / 2) {
      this.v.set(this.v.x * -1, this.v.y, this.v.z);
      momenta += 2 * this.mass * Math.abs(this.v.x);
    }
    if (Math.abs(Pos.y) > (300 - this.diameter) / 2) {
      this.v.set(this.v.x, -1 * this.v.y, this.v.z);
      momenta += 2 * this.mass * Math.abs(this.v.y);
    }
    if (Math.abs(Pos.z) > (300 - this.diameter) / 2) {
      this.v.set(this.v.x, this.v.y, -1 * this.v.z);
      momenta += 2 * this.mass * Math.abs(this.v.z);
    }
  }

  update() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    noStroke();
    fill("#9F7AEA");
    sphere(this.diameter);
    pop();
    this.pos.add(this.v.x * delta_t, this.v.y * delta_t, this.v.z * delta_t);
  }
}
