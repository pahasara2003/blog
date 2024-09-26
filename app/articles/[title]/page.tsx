import { generateMonth } from "@/components/generateTime";
import BlogHeader from "@/components/BlogHeader";
import { PrismaClient } from "prisma/prisma-client";
import "../../blog.css";

const prisma = new PrismaClient();

const removeStyles = (html: string) => {
  // Remove <style> tags
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Remove 'style' attributes
  html = html.replace(/ style="[^"]*"/gi, "");

  return html;
};
const Page = async (Url: any) => {
  const data = await prisma.posts.findFirst({
    where: { slug: Url.params.title },
  });

  prisma.$disconnect();

  const date = generateMonth(data?.date);

  const D = await fetch(
    "http://localhost:3000/posts/p5js/double_pendulum.html"
  ).then((res) => res.text());

  const cleanHTML = removeStyles(D);

  console.log(data);

  return (
    <div className="bg-white m-5 mx-10">
      <BlogHeader data={data} date={date} />
      <div
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
        className=" text-[2rem] font-serif max-w-[60rem] m-auto "
      ></div>
    </div>
  );
};

export default Page;
