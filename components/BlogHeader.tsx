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
    <div className="w-[80vw] lg:w-[60vw]  px-2 pt-5">
      <div>
        <Breadcrumbs isDisabled size="lg" className="px-2">
          {data.file.split("/").map((e: any, index: any) => {
            if (data.file.split("/").length > index + 1) {
              return <BreadcrumbItem key={index}>{e}</BreadcrumbItem>;
            } else {
              return <BreadcrumbItem key={index}>{data.slug}</BreadcrumbItem>;
            }
          })}
        </Breadcrumbs>
        <h1 className="font-Headers pt-5 px-2 m-0 text-bg  text-[2rem] sm:text-[3rem] ">
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
