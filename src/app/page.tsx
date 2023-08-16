import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import {fetchArticles, fetchCategories} from "@/http";
import qs from 'qs'


export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined | number}
}) {
  
  // Articles
  const options: Partial<IQueryOptions> = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: searchParams.page ? +searchParams.page : 1,
      pageSize: 4
    }
  }
 
  if (searchParams.search) {
    options.filters = {
      Title: {
          $containsi: searchParams.search
      }
    }
  }
  const queryString:string = qs.stringify(options);
  
  const resArticles: Promise<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
  const {data: articles,meta: {pagination: {page,pageCount}}} = await resArticles;
  
  // Categories
  const resCategories: Promise<ICollectionResponse<ICategory[]>> = await fetchCategories();
  const {data: categories} = await resCategories;
  
  return <>
    <Tabs categories={categories} />
    <ArticleList articles={articles} />
    <Pagination  page={page} pageCount={pageCount} />
  </>
};

