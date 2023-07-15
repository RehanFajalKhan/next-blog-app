import Link from "next/link";
import Author from "./Author";

interface IPropType {
  article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <Author article={article} />
      <div className="text-gray-500">
        {article.attributes.shortDescription.slice(0, 250)}
        {article.attributes.shortDescription.length > 250 ? "..." : ""}
      </div>
    </div>
  );
};

export default Blogcard;
