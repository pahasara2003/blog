import { generateMonth } from "@/components/generateTime";
import BlogHeader from "@/components/BlogHeader";
import { PrismaClient } from "prisma/prisma-client";
import "../../blog.css";
import ArticlePageRetatedPosts from "@/components/ArticlePageRelatedPosts";
import type { Metadata } from "next";

const prisma = new PrismaClient();

const removeStyles = (html: string) => {
  // Remove <style> tags
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Remove 'style' attributes
  html = html.replace(/ style="[^"]*"/gi, "");

  return html;
};

export async function generateMetadata(Url: any): Promise<Metadata> {
  // read route params

  // fetch data
  const data = await prisma.posts.findFirst({
    where: { slug: decodeURIComponent(Url.params.title) },
  });

  prisma.$disconnect();

  return {
    title: data?.title,
  };
}

const Page = async (Url: any) => {
  const data = await prisma.posts.findFirst({
    where: { slug: decodeURIComponent(Url.params.title) },
  });
  console.log(decodeURIComponent(Url.params.title));

  prisma.$disconnect();

  const date = generateMonth(data?.date);

  const D = await fetch(
    "http://pahasara.byte-burst.xyz/articles/spectrometer.html"
  ).then((res) => res.text());

  const cleanHTML = removeStyles(D);

  return (
    <div className="flex  gap-5 justify-center ">
      <div className="bg-white m-5 md:mx-[10vw] lg:mx-[0vw] mx-0">
        <BlogHeader data={data} date={date} />
        {/* <div
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
          className=" text-[1rem] xl:px-10 font-serif overflow-x-clip max-w-[75vw] px-3 m-auto "
        ></div> */}
      </div>
      <ArticlePageRetatedPosts />
    </div>
  );
};

export default Page;
