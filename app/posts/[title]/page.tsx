import fs from "fs";
import Markdown from "react-markdown";
import matter from "gray-matter";
import getMetaData from "@/components/getMetaData";
import { generateMonth } from "@/components/generateTime";
import { Image } from "@nextui-org/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Icon from "@/components/Icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface tag {
  text: string;
  tag: string;
}

export const generateStaticParams = async () => {
  const posts = getMetaData();

  return posts.map((post) => {
    {
      title: post.title;
    }
  });
};

const Page = (Url: any) => {
  const file = `posts/${Url.params.title}.md`;
  const content = fs.readFileSync(file, "utf8");
  const result = matter(content);
  const date = generateMonth(result.data.date);

  return (
    <div className="py-5 flex flex-col items-center ">
      <Image
        src={`/images/${result.data.thumbnail}`}
        alt={result.data.title}
        className="rounded-none  w-[100vw] md:w-[70vw]  mx-auto mb-5  object-bottom h-[500px] object-cover"
      />
      <div className="w-[75%]">
        <h1 className="font-bold py-10 text-black w-full text-[2.2rem] md:text-[3rem] text-center">
          {result.data.title}
        </h1>
        <hr />
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
        <hr className="mb-10" />

        <div className=" flex flex-col items-center">
          <article className="lg:prose-lg ">
            <Markdown
              className={"min-w-[300px] max-w-full "}
              children={result.content}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={oneDark}
                      className="text-xl min-w-[70vw]"
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Page;
