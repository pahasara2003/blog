import { generateMonth } from "@/components/generateTime";
import BlogHeader from "@/components/BlogHeader";
import { PrismaClient } from "prisma/prisma-client";
import "../../blog.css";

const prisma = new PrismaClient();

const Page = async (Url: any) => {
  const data = await prisma.posts.findFirst({
    where: { slug: Url.params.title },
  });

  prisma.$disconnect();

  const date = generateMonth(data?.date);

  const D = await fetch(
    "https://pahasara.byte-burst.xyz/posts/p5js/double_pendulum.html"
  ).then((res) => res.text());

  return (
    <div className="py-5 flex flex-col overflow-hidden items-center bg-white  dark:bg-bg ">
      <BlogHeader data={data} date={date} />
      <div
        dangerouslySetInnerHTML={{ __html: D }}
        className="max-md:w-[90vw] max-md:overflow-x-scroll"
      ></div>
    </div>
  );
};

export default Page;
