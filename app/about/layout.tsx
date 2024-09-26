import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Read Posts | Pahasara's Blog",
  description: "This is my blog",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-[100vh]`}>
      <Navbar />
      {children}
    </div>
  );
}
