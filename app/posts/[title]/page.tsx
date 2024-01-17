import { generateMonth } from "@/components/generateTime";
import BlogHeader from "@/components/BlogHeader";
import { PrismaClient } from "prisma/prisma-client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const Page = async (Url: any) => {
  const data = await prisma.posts.findFirst({
    where: { slug: Url.params.title },
  });

  prisma.$disconnect();

  const date = generateMonth(data?.date);

  const D = fs.readFileSync(`/posts/p5js/double_pendulum.html`, "utf8");
  console.log(D);
  return (
    <div className="py-5 flex flex-col overflow-hidden items-center bg-white  dark:bg-bg ">
      <BlogHeader data={data} date={date} />
      <iframe
        src={`${process.env.HOST}/${data?.file}`}
        className="w-[100%] h-[590vh] overflow-hidden"
      ></iframe>
    </div>
  );
};

export default Page;
