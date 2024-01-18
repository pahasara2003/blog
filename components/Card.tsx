import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import CardTags from "./CardTags";

import Link from "next/link";
import { generateTime } from "./generateTime";

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

const BlogCard = ({
  slug,
  title,
  description,
  date,
  thumbnail,
  tags,
}: metadata) => {
  const time = generateTime(date);

  return (
    <Link href={`/posts/${slug}`}>
      <Card className="py-4 w-[300px] hover:ring-1 duration-400 ring-s2 dark:bg-fg  rounded-sm shadow-xl shado-[#242527]">
        <CardHeader className="pb-0 pt-2 px-4 h-[120px] flex-col items-start">
          <p className="text-tiny uppercase font-bold">{time}</p>
          <h4 className="font-bold text-xl py-2">{title}</h4>
        </CardHeader>
        <CardBody className=" overflow-visible p-3  ">
          <Image
            alt="Card background"
            className=" rounded-none w-[300px] h-[200px] object-cover"
            src={`https://pahasara.byte-burst.xyz/${thumbnail}`}
          />
        </CardBody>
        <CardBody className="py-0">
          <p className="p-0 text-default-500 h-[100px] text-[0.9rem]  after:inset-0 relative after:absolute after:bg-gradient-to-b from-transparent overflow-hidden dark:to-fg to-white">
            {description}
          </p>
        </CardBody>
        <CardFooter className="p-0 px-5">
          <CardTags tags={tags} />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
