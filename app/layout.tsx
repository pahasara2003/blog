// import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const poppins = Poppins({ weight: ["300", "600"], subsets: ["latin"] });
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pahasara.byte-burst.xyz/"),
  title: {
    default: "Explore the world with Pahasara",
    template: `%s | Pahasara's Blog`,
  },
  description:
    "Explore insightful articles on the fascinating worlds of physics and mathematics. Here, you'll find a collection of my articles, projects, and insights that delve into complex scientific concepts, mathematical theories, and creative 3D designs. Whether you're passionate about unraveling the mysteries of the universe, solving intricate problems, there’s something here for everyone interested in these fields.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            name: "Pahasara's Blog",
            datePublished: "2024-10-02",
            url: "https://pahasara.byte-burst.xyz",
          })}
        </script>
      </head>
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
