"use client";
import ArticleListElement from "./ArticleListElement";
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

const RecentPosts = ({ postMetaData }: Props) => {
  return (
    <NextUIProvider>
      <div className="flex justify-center pb-10 gap-2 items-center"></div>
      <h1 className="text-[2rem] bg-s2 text-white px-10 py-3 font-bold tracking-widest">
        Recent Posts
      </h1>
      <div className="w-full flex py-5 min-h-[50vh] flex-col items-center">
        <div className="justify-center lg:flex w-[100%] lg:flex-wrap gap-3">
          {postMetaData.map((post) => {
            return (
              <ArticleListElement
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

export default RecentPosts;
