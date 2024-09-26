import BlogPage from "@/components/BlogPage";
import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

const Page = async () => {
  let postMetaData = await prisma.posts.findMany();
  prisma.$disconnect();

  postMetaData = postMetaData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="p-10 w-[100%] ">
      <BlogPage postMetaData={postMetaData} />
    </div>
  );
};

export default Page;
