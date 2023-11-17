import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getMetaData from "@/components/getMetaData";
import Link from "next/link";
import { generateMonth } from "@/components/generateTime";

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
    <div className="p-10">
      <Link href={"/"}>Home</Link>
      <h1 className="font-bold text-[2.2rem] text-center">
        {result.data.title}
      </h1>
      <p>{date}</p>
      <article className="prose m-auto ">
        <Markdown>{result.content}</Markdown>
      </article>
    </div>
  );
};

export default Page;
