import fs from "fs";
import { generateMonth } from "@/components/generateTime";
import { Image } from "@nextui-org/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Icon from "@/components/Icons";
import { PrismaClient } from "prisma/prisma-client";
import dynamic from "next/dynamic";
const Renderer = dynamic(() => import("@/components/Renderer"), { ssr: false });

interface tag {
  text: string;
  tag: string;
}

const prisma = new PrismaClient();

const Page = async (Url: any) => {
  const data = await prisma.posts.findFirst({
    where: { slug: Url.params.title },
  });

  prisma.$disconnect();

  const date = generateMonth(data?.date);

  const res = await fetch(
    `https://raw.githubusercontent.com/pahasara2003${data?.file}`,
    { cache: "no-store" }
  );

  const html = await res.text();
  // const File = `./posts/${Url.params.title}.html`;
  // const c = fs.readFileSync(File, "utf8");

  return (
    <div className="py-5 flex flex-col items-center bg-white  dark:bg-bg ">
      <Image
        src={`https://raw.githubusercontent.com/pahasara2003/${data?.thumbnail}`}
        alt={data?.title}
        className="rounded-none  w-[100vw] md:w-[70vw]  mx-auto mb-5  object-bottom h-[500px] object-cover"
      />
      <div className="w-[75%]">
        <h1 className="font-bold py-5 text-transparent bg-gradient-to-r tracking-wider from-s1 to-s2 bg-clip-text w-full text-[2rem] md:text-[2.5rem] text-center">
          {data?.title}
        </h1>
        <hr className="text-gray dark:text-fg h-[0.5px]" />
        <div className="p-3 flex w-full flex-wrap gap-3 justify-evenly">
          <p className="flex gap-3 items-center">
            <FaRegCalendarAlt />
            {date}
          </p>
          <div className="flex gap-5  justify-between">
            {data?.tags.map((t: tag) => {
              return (
                <>
                  <Icon {...t} />
                </>
              );
            })}
          </div>
        </div>
        <hr className="text-gray dark:text-fg h-[0.5px]" />

        <div className=" flex flex-col items-center">
          <Renderer html={html} />
        </div>
      </div>
    </div>
  );
};

export default Page;
