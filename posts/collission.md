---
title: "testing"
description: "I used GPT-3 to generate poetry and other creative content."
date: "2023-11-03"
thumbnail: "w.jpg"
tags:
  [
    { text: "calculus", tag: "maths" },
    { text: "AI", tag: "AI" },
    { text: "p5js", tag: "Js" },
  ]
---



In this post, I'm trying to stimulate elastic collision between spheres using **p5 js** library.  I'm going to use following code structure to do the job.

```javascript

      class Ball {
        constructor(**args) {
         // initialize parameters of a ball
        }
        update() {
          // use a statement to prevent the ball going out of the canvas space.
            
         // update position of the ball after a small time interval delta_t
        }

        collide(ball) {
        // what should do if the ball and this ball collide
      }
      }
```

I use a Javascript class to define a ball. That's because I have to use many variables and functions for a single ball. If I use classes, the work will be much easier.



Here goes the rest of the code. 

```javascript

      var t = 0;				   //time as a variable
      let ball_1, ball_2;          //initialize balls
      const delta_t = 1;           //time interval between two frames

      function setup() {
        createCanvas(700, 700);		//create the canvas
        ball_1 = new Ball(**args);   //assign parameters
        ball_2 = new Ball(**args);
      }

      function draw() {
        background("#292a2b");      // give the canvas a color
        translate(350, 350);        // translate the origin to the middle


        ball_1.update();
        ball_2.update();            

        ball_1.collide(ball_2);

        t += delta_t;                //increase time variable
```



Let's decide what we should use as input parameters for a ball.

1. initial position (x and y coordinates)
1. initial velocity  (x and y parts)
1. mass
1. diameter
1. color (just to identify a ball)

so,

```javascript
 constructor(x, y, v_x, v_y,mass ,diameter,color) {
          this.pos = createVector(x, y);
          this.v = createVector(v_x, v_y);       // we update only these two variables
     
          this.pos_init = createVector(x, y);
          this.v_init = createVector(v_x, v_y);
     
          this.color = color;
          this.diameter = diameter;
        }
```

Then, let's define the update method. we update `this.pos` like this,
$$
s(t + \delta t) = s(t) + v(t) \cdot \delta t
$$
so,

```javascript
 update() {
          this.pos.add(this.v.x * delta_t, this.v.y * delta_t);   //update params
     
     
          fill(200, 20, this.color);    //give it a color.
          rectMode(CENTER);             //to make the center of the ball which we measure 												distance to
          circle(this.pos.x, this.pos.y, this.diameter);  //draw the ball
        }
```



Assuming the margins of the canvas are rigid walls that make perfectly elastic collisions, we can use an if statement to prevent the ball going out of the plane.



After colliding with a wall, only the component which was normal to the wall will change. (Actually it will be reverse). The parallel component wont be changed.

 

