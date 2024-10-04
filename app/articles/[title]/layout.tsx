import { PrismaClient } from "prisma/prisma-client";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const prisma = new PrismaClient();

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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`min-h-[100vh] bg-white my-1`}>{children}</div>;
}
