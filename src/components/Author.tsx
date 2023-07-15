import React from "react";
import Image from "next/image";
import { formatDate } from "@/utils";

interface IPropType {
  article: IArticle;
}

const Author = ({ article }: IPropType) => {
  return (
    <div className="flex items-center my-2">
      <div className="relative overflow-hidden flex items-center justify-center mr-2 w-7 h-7">
        <Image
          src={`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
          alt="author-image"
          fill
          style={{ objectFit: "cover", borderRadius: "20%" }}
          quality={75}
          sizes="2.5rem"
        />
      </div>
      <span className="text-sm font-bold text-gray-600">
        {article.attributes.author.data.attributes.firstname}{" "}
        {article.attributes.author.data.attributes.lastname} on &nbsp;
        <span className="text-gray-400">
          {formatDate(article.attributes.createdAt)}
        </span>
      </span>
    </div>
  );
};

export default Author;
