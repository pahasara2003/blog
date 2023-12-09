import RecentPosts from "@/components/RecentPosts";
import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

const BlogPanel = async () => {
  let postMetaData = await prisma.posts.findMany();
  prisma.$disconnect();

  postMetaData = postMetaData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div className="p-10 w-[100%] ">
      <RecentPosts postMetaData={postMetaData} />
    </div>
  );
};

export default BlogPanel;
