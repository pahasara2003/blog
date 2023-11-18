import fs from "fs";
import matter from "gray-matter";
import { generateMonth } from "@/components/generateTime";
import { Image } from "@nextui-org/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Icon from "@/components/Icons";
import "@/highlight/styles/monokai.css";
import Renderer from "@/components/Renderer";

interface tag {
  text: string;
  tag: string;
}

const Page = (Url: any) => {
  const file = `./posts/${Url.params.title}.md`;
  const content = fs.readFileSync(file, "utf8");
  const result = matter(content);
  const date = generateMonth(result.data.date);

  const File = `posts/${Url.params.title}.html`;
  const c = fs.readFileSync(File, "utf8");

  return (
    <div className="py-5 flex flex-col items-center ">
      <Image
        src={`/images/${result.data.thumbnail}`}
        alt={result.data.title}
        className="rounded-none  w-[100vw] md:w-[70vw]  mx-auto mb-5  object-bottom h-[500px] object-cover"
      />
      <div className="w-[75%]">
        <h1 className="font-bold py-5 text-transparent bg-gradient-to-r tracking-wider from-s1 to-s2 bg-clip-text w-full text-[2rem] md:text-[2.5rem] text-center">
          {result.data.title}
        </h1>
        <hr className="bg-gray h-[0.5px]" />
        <div className="p-3 flex w-full flex-wrap gap-3 justify-evenly">
          <p className="flex gap-3 items-center">
            <FaRegCalendarAlt />
            {date}
          </p>
          <div className="flex gap-5  justify-between">
            {result.data.tags.map((t: tag) => {
              return (
                <>
                  <Icon {...t} />
                </>
              );
            })}
          </div>
        </div>
        <hr className="bg-gray h-[1px]" />

        <div className=" flex flex-col items-center">
          <Renderer html={c} />
        </div>
      </div>
    </div>
  );
};

export default Page;
