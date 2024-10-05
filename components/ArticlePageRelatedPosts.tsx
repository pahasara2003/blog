import { NextUIProvider } from "@nextui-org/react";
import crypto from "crypto";
import { PrismaClient } from "prisma/prisma-client";

import { Card, CardBody, Image } from "@nextui-org/react";
import CardTags from "./CardTags";

import Link from "next/link";
import { generateTime } from "./generateTime";

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

const ArticleListElement = ({
  slug,
  title,
  description,
  date,
  thumbnail,
  tags,
}: metadata) => {
  const time = generateTime(date);

  return (
    <Link href={`/articles/${encodeURIComponent(slug)}`}>
      <Card className="p-0 w-[30vw] hover:bg-s2 hover:text-white rounded-none  duration-100 ring-s2 bg-light shadow-none">
        <CardBody className=" overflow-visible p-3  ">
          <div className="flex justify-evenly">
            <Image
              alt={title}
              className=" rounded-none  w-[8rem] h-[90px] object-cover"
              src={`https://pahasara.byte-burst.xyz/${thumbnail}`}
            />
            <div className="w-[70%] px-1">
              <h3 className="font-bold  line-clamp-2 h-[58px] overflow-hidden  text-[1.1rem] pb-2">
                {title}
              </h3>

              <CardTags tags={tags} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

const ArticlePageRetatedPosts = async ({ postMetaData }: any) => {
  postMetaData = postMetaData
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 5);
  return (
    <div className="px-5 max-xl:hidden sticky top-0 h-screen pt-5 gap-2 bg-light items-center">
      <h1 className="text-[2rem] px-10 py-3 font-bold tracking-widest">
        Recent Posts
      </h1>
      <hr />
      <div className="w-full flex py-5 min-h-[50vh] flex-col items-center">
        <div className=" w-[100%] flex-wrap gap-3">
          {postMetaData.map((post: any) => {
            return (
              <ArticleListElement
                key={crypto.randomBytes(10).toString("hex")}
                {...post}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePageRetatedPosts;
