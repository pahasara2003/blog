import fs from "fs";
import matter from "gray-matter";

interface tags {
  text: string;
  tag: string;
}

interface metadata {
  title: string;
  date: string;
  description: string;
  slug: string;
  thumbnail: string;
  tags: tags[];
}

const getMetaData = (): metadata[] => {
  const files = fs.readdirSync("posts/");
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((file) => {
    const fileContent = fs.readFileSync(`posts/${file}`, "utf-8");
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      thumbnail: matterResult.data.thumbnail,
      tags: matterResult.data.tags,
      slug: file.replace(".md", ""),
    };
  });
  return posts;
};

export default getMetaData;
