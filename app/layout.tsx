import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({ weight: ["300", "600"], subsets: ["latin"] });

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
    <html lang="en" className="light">
      <body className={`bg-light dark:bg-bg min-h-[100vh] `}>
        {children}
        <footer className=" p-5  w-full bg-white dark:bg-fg text-[0.8rem] text-center">
          {" "}
          &copy; Pahasara Wickramasinghe {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
