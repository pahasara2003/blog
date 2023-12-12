import { generateMonth } from "@/components/generateTime";
import BlogHeader from "@/components/BlogHeader";
import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

const Page = async (Url: any) => {
  const data = await prisma.posts.findFirst({
    where: { slug: Url.params.title },
  });

  prisma.$disconnect();

  const date = generateMonth(data?.date);

  return (
    <div className="py-5 flex flex-col items-center bg-white  dark:bg-bg ">
      <BlogHeader data={data} date={date} />
      <iframe
        src={`${process.env.HOST}/${data?.file}`}
        className="w-[100%] h-[300vh]"
      ></iframe>
    </div>
  );
};

export default Page;
