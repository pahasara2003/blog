"use client";

import { useState, useEffect } from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import GravityPlayGround from "@/Sketchs/GravityPlayGround";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
  Chip,
  Input,
} from "@nextui-org/react";

import { FaPlay, FaPause } from "react-icons/fa";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface props {
  play: number;
  data: data;
  setData: any;
}
interface data {
  mass: number[];
  velocity: number[][];
  position: number[][];
  color: string[];
}

const Details = ({ play, data, setData }: props) => {
  console.log(data);
  return (
    <Table className="text-center dark">
      <TableHeader>
        <TableColumn>Object</TableColumn>
        <TableColumn>Mass</TableColumn>
        <TableColumn className="text-center">Initial Position</TableColumn>
        <TableColumn className="text-center">Initial Velocity</TableColumn>
      </TableHeader>
      <TableBody>
        {data.mass.map((e, i) => {
          return (
            <TableRow key={i}>
              <TableCell>
                <div
                  className={`rounded-full w-5 h-5 `}
                  style={{ backgroundColor: data.color[i] }}
                ></div>
              </TableCell>
              <TableCell>
                <Input
                  isDisabled={play % 2 === 0}
                  size="sm"
                  className="w-[4rem]  text-center"
                  defaultValue={e.toString()}
                  onKeyUp={(e: any) => {
                    setData((prevState: data) => ({
                      ...prevState,
                      mass: prevState.mass.map((m, j) =>
                        j === i ? parseInt(e.target.value) : m
                      ),
                    }));
                  }}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Input
                    isDisabled={play % 2 === 0}
                    size="sm"
                    className="w-[4rem]  text-center"
                    defaultValue={data.position[i][0].toFixed(0)}
                    onKeyUp={(e: any) => {
                      setData((prevState: data) => ({
                        ...prevState,
                        position: prevState.position.map((m, j) =>
                          j === i ? [parseInt(e.target.value), m[1]] : m
                        ),
                      }));
                    }}
                  />
                  <span className="mx-2 text-sm">x</span>
                  <Input
                    isDisabled={play % 2 === 0}
                    size="sm"
                    className="w-[4rem]  text-center"
                    defaultValue={data.position[i][1].toFixed(0)}
                    onKeyUp={(e: any) => {
                      setData((prevState: data) => ({
                        ...prevState,
                        position: prevState.position.map((m, j) =>
                          j === i ? [m[0], parseInt(e.target.value)] : m
                        ),
                      }));
                    }}
                  />{" "}
                  <span className="mx-2 text-sm">y</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Input
                    isDisabled={play % 2 === 0}
                    size="sm"
                    className="w-[4rem]  text-center"
                    defaultValue={data.velocity[i][0].toFixed(2)}
                    onKeyUp={(e: any) => {
                      setData((prevState: data) => ({
                        ...prevState,
                        velocity: prevState.velocity.map((m, j) =>
                          j === i ? [parseInt(e.target.value), m[1]] : m
                        ),
                      }));
                    }}
                  />
                  <span className="mx-2 text-sm">
                    V<sub>x</sub>
                  </span>
                  <Input
                    isDisabled={play % 2 === 0}
                    size="sm"
                    className="w-[4rem]  text-center"
                    defaultValue={data.velocity[i][1].toFixed(2)}
                    onKeyUp={(e: any) => {
                      setData((prevState: data) => ({
                        ...prevState,
                        velocity: prevState.velocity.map((m, j) =>
                          j === i ? [m[0], parseInt(e.target.value)] : m
                        ),
                      }));
                    }}
                  />{" "}
                  <span className="mx-2 text-sm">
                    V<sub>y</sub>
                  </span>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default function Page() {
  const [play, setState] = useState(1);

  const InitialData = {
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

  const [data, setData] = useState(() => InitialData);

  return (
    <div className="bg-fg  min-h-screen flex-wrap flex items-center justify-center">
      <Card className="dark bg-bg shadow-none w-[700px] my-5 h-fit">
        <CardHeader className="flex justify-evenly py-[2rem]">
          <h1
            onClick={() => {
              setData({
                mass: [300, 30, 2],
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
              });
            }}
            className="text-center tracking-wider text-[1.6rem]"
          >
            Gravity Playground
          </h1>
          <Button
            onClick={() => setState((prev) => prev + 1)}
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            {play % 2 == 1 ? <FaPlay /> : <FaPause />}
          </Button>
        </CardHeader>
        <Divider />
        <CardBody>
          <Details play={play} data={data} setData={setData} />
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
      <NextReactP5Wrapper
        sketch={GravityPlayGround}
        InitialData={data}
        play={play}
      />
    </div>
  );
}
