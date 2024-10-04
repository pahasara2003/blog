import { Card, CardBody, Image } from "@nextui-org/react";
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

const ArticleListElement = ({
  slug,
  title,
  description,
  date,
  thumbnail,
  tags,
}: metadata) => {
  const time = generateTime(date);

  return (
    <Link href={`/articles/${encodeURIComponent(slug)}`}>
      <Card className="py-4 my-3 lg:w-[43vw] hover:ring-1  duration-400 ring-s2 w-[100%] rounded-md shadow-md shado-[#242527]">
        <CardBody className=" overflow-visible p-3  ">
          <div className="flex justify-evenly max-sm:flex-col max-sm:items-center">
            <Image
              alt={title}
              className=" rounded-md  max-sm:w-[80vw]  max-sm:h-[200px]  max-xl:w-[20vw] max-xl:h-[100%]  xl:w-[20rem] lg:h-[200px] object-cover"
              src={`https://pahasara.byte-burst.xyz/${thumbnail}`}
            />
            <div className="w-[70%]  max-sm:w-[100%]  max-sm:pt-3 px-4">
              <p className="text-sm text-fg uppercase p-0 font-bold">{time}</p>
              <h3 className="font-bold overflow-hidden h-[60px] text-s2 line-clamp-2  text-xl pb-2">
                {title}
              </h3>
              <p className="p-0 text-default-500 h-[100px] text-[0.9rem]  after:inset-0 relative after:absolute after:bg-gradient-to-b from-transparent overflow-hidden dark:to-fg to-white">
                {description}
              </p>
              <CardTags tags={tags} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ArticleListElement;
