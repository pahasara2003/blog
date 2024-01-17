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
    <div className="w-[80vw] lg:w-[60vw] px-2 pt-10">
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
        <h1 className="font-Headers pt-5 px-2 text-bg  text-[2rem] sm:text-[3rem] ">
          {data?.title}
        </h1>

        <div className=" flex w-full flex-wrap md:gap-3  py-3  md:py-0 justify-start px-2">
          <p className="flex text-sm font-Headers text-gray gap-3 items-center">
            <FaRegCalendarAlt />
            {date}
          </p>
          <div className="flex gap-10 px-10 font-sans  justify-evenly">
            {data?.tags.map((t: tag, index: any) => {
              return (
                <>
                  <Icon key={index} {...t} />
                </>
              );
            })}
          </div>
        </div>
        <Divider className="mb-10" />
      </div>
    </div>
  );
};

export default BlogHeader;
