import BlogCardWithImage from "./BlogCardWithImage";
import Blogcard from "./Blogcard";

interface IPropType {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2  gap-12 mt-4">
      {articles.map((article, idx) => {
        return (
          <div key={article.id}>
            {idx === 1 ? (
              <BlogCardWithImage article={article}/>
            ) : (
              <Blogcard article={article}/>
              // <BlogCardWithImage article={article}/>

            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
