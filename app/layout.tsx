// import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const poppins = Poppins({ weight: ["300", "600"], subsets: ["latin"] });
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pahasara.byte-burst.xyz/"),
  title: {
    default: "Pahasara's blog",
    template: `%s | Pahasara`,
  },
  openGraph: {
    description: "Learn physics and maths with Pahasara.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <title>Pahasara's Blog</title>
      <meta name="description" content="Pahasara Wickramasinghe's Blog." />
      <body className={`bg-bg`}>
        {children}
        <footer className=" py-5  w-[100%]  bg-bg text-white text-[1rem] text-center">
          {" "}
          &copy; Pahasara Wickramasinghe {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
