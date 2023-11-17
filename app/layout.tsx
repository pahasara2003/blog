import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/highlight/styles/default.css";

const poppins = Poppins({ weight: ["300", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pahasara's Blog",
  description: "This is my blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-[100vh]`}>
        {children}
        <footer className=" p-3  w-full text-black text-center">
          {" "}
          &copy; Pahasara Wickramasinghe {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
