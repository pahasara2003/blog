"use client";
import BlogCard from "./Card";
import { Tabs, Tab, Input, Button } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import crypto from "crypto";
import { useState, useRef, MutableRefObject } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

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

const BlogContainer = ({ postMetaData }: Props) => {
  const [term, setTerm] = useState("");
  const input: MutableRefObject<HTMLInputElement | null> = useRef(null);
  let posts = postMetaData.filter((post) =>
    RegExp(term, "i").test(post.title + post.description + post.tags)
  );

  let items = [];
  for (let i = 0; i < Math.ceil(posts.length / 12); i++) {
    items.push({
      index: (i + 1).toString(),
      data: posts.slice(12 * i, 12 * i + 12),
    });
  }

  return (
    <NextUIProvider>
      <div className="flex justify-center pb-10 gap-2 items-center">
        <Input
          placeholder="Search Blog posts ..."
          size="sm"
          className="max-w-[400px]"
          ref={input}
          onKeyUp={(e: any) => {
            if (e.target.value === "") {
              setTerm("");
            }
          }}
        />
        <Button
          color="danger"
          size="lg"
          isIconOnly
          onClick={() => {
            setTerm(input.current !== null ? input.current.value : "");
          }}
        >
          <HiMagnifyingGlass className="text-xl" />
        </Button>
      </div>
      <hr />
      <div className="w-full flex min-h-[50vh] flex-col items-center">
        <p className="h-20 p-10 font-extrabold uppercase tracking-widest text-2xl">
          {term === "" ? "Recent Posts" : "Search Results"}
        </p>

        <Tabs
          items={items}
          aria-label="Tabs colors"
          radius="full"
          color="danger"
          className="m-3"
        >
          {(item) => (
            <Tab
              title={`Page ${item.index}`}
              key={crypto.randomBytes(10).toString("hex")}
            >
              <div className="justify-center flex w-[100%] flex-wrap gap-5">
                {item.data.map((post) => {
                  return (
                    <BlogCard
                      key={crypto.randomBytes(10).toString("hex")}
                      {...post}
                    />
                  );
                })}
              </div>
            </Tab>
          )}
        </Tabs>
        {items.length === 0 && <h1 className="p-10">No results found</h1>}
      </div>
    </NextUIProvider>
  );
};

export default BlogContainer;
