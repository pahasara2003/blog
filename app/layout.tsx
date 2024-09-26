// import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({ weight: ["300", "600"], subsets: ["latin"] });
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Pahasara's Blog",
  description: "This is my blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`bg-bg`}>
        {children}
        <footer className=" py-5  w-[100%]  bg-bg text-white text-[0.8rem] text-center">
          {" "}
          &copy; Pahasara Wickramasinghe {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
