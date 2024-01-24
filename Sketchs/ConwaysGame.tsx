"use client";
import { type Sketch } from "@p5-wrapper/react";

const sketch: Sketch = (p5) => {
  const side = 240;
  const N = side ** 2;
  const w = 600 / side;
  const rows = side;
  const cols = side;

  function Initialize() {
    let grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        grid[i][j] = p5.floor(p5.random(2));
        // grid[i][j] = 0;
      }
    }
    return grid;
  }

  function updateGrid() {
    let nextGrid = new Array(cols);
    for (let i = 0; i < cols; i++) {
      nextGrid[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        nextGrid[i][j] = new Array(rows);

        let state = grid[i][j];
        let neighbors = countNeighbors(grid, i, j);

        if (state == 0 && neighbors == 3) {
          nextGrid[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          nextGrid[i][j] = 0;
        } else {
          nextGrid[i][j] = state;
        }
      }
    }
    grid = nextGrid;
  }

  function countNeighbors(grid: number[][], x: number, y: number) {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;

        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }

  let resolution = w;

  function displayGrid() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;

        if (grid[i][j] == 1) {
          p5.fill("#52ad65");
          p5.noStroke();

          p5.rect(x, y, w);
        }
      }
    }
  }

  let grid: number[][];

  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.frameRate(10);
    grid = Initialize();
  };

  p5.draw = () => {
    p5.background("#303233");
    p5.noStroke();
    updateGrid();

    displayGrid();
  };
};

export default sketch;
