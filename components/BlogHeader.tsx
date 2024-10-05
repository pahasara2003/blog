"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Icon from "@/components/Icons";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

interface tag {
  text: string;
  tag: string;
}

const BlogHeader = ({ data, date }: any) => {
  return (
    <div className="w-[80vw] m-auto xl:w-[60vw]   pt-5">
      <div>
        <Breadcrumbs isDisabled size="lg" className="px-2 font-bold py-3">
          {data?.file.split("/").map((e: any, index: any) => {
            if (data?.file.split("/").length > index + 1) {
              return <BreadcrumbItem key={index}>{e}</BreadcrumbItem>;
            }
          })}
        </Breadcrumbs>
        <Image
          alt={data?.title}
          className=" rounded-md  w-[80vw] xl:w-[60vw]  h-[300px] object-cover"
          src={`https://pahasara.byte-burst.xyz/${data?.thumbnail}`}
        />{" "}
        <h1 className="font-Headers pt-5 px-2 m-0 bg-clip-text text-transparent bg-gradient-to-r from-s1 to-s2  text-[2rem] sm:text-[3rem] ">
          {data?.title}
        </h1>
        <div className=" flex w-full  items-center justify-center m-0  py-1 pb-0     px-2">
          <p className="flex text-sm font-Headers text-gray gap-1 items-center">
            <FaRegCalendarAlt />
            {date}
          </p>
          <div className="flex gap-10 px-4 font-sans  justify-evenly">
            {data?.tags.map((t: tag, index: any) => {
              return (
                <>
                  <Icon key={index} {...t} />
                </>
              );
            })}
          </div>
        </div>
        <Divider className="mb-5 m-0 " />
      </div>
    </div>
  );
};

export default BlogHeader;
