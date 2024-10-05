import { PrismaClient } from "prisma/prisma-client";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const prisma = new PrismaClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`min-h-[100vh] bg-white my-1`}>{children}</div>;
}
