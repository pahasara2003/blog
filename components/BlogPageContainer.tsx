"use client";
import BlogCard from "./Card";
import { NextUIProvider } from "@nextui-org/react";
import crypto from "crypto";

interface tags {
  text: string;
  tag: string;
}

interface metadata {
  title: string;
  date: string;
  description: string;
  slug: string;
  thumbnail: string;
  tags: tags[];
}

interface Props {
  postMetaData: metadata[];
}

const BlogPageContainer = ({ postMetaData }: Props) => {
  return (
    <NextUIProvider>
      <div className="flex justify-center pb-10 gap-2 items-center"></div>
      <h1 className="text-[1.3rem] px-10 py-3 font-bold tracking-wide">
        Recent Posts
      </h1>
      <hr />
      <div className="w-full flex py-5 min-h-[50vh] flex-col items-center">
        <div className="justify-center flex w-[100%] flex-wrap gap-5">
          {postMetaData.map((post) => {
            return (
              <BlogCard
                key={crypto.randomBytes(10).toString("hex")}
                {...post}
              />
            );
          })}
        </div>
      </div>
    </NextUIProvider>
  );
};

export default BlogPageContainer;
