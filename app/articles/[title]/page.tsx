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
    "http://pahasara.byte-burst.xyz/articles/spectrometer.html"
  ).then((res) => res.text());

  const cleanHTML = removeStyles(D);

  console.log(data);

  return (
    <div className="bg-white m-5 md:mx-[10vw] lg:mx-[15vw] mx-0">
      <BlogHeader data={data} date={date} />
      <div
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
        className=" text-[1rem] font-serif max-w-[90%] m-auto "
      ></div>
    </div>
  );
};

export default Page;
