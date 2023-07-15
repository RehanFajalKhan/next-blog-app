import QueryString from "qs";

const baseURL = process.env.API_BASE_URL;
const header = {
  Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  "Content-Type": "application/json",
};

// Categories
export const fetchCategories = async () => {
  try {
    const res = await fetch(`${baseURL}/api/categories`, {
      method: "GET",
      headers: header,
      // next: { revalidate: 10 }
      cache: 'no-store'
    });
    return res.json();
   
  } catch (error) {
    console.log(error);
  }
};

// Articles
export const fetchArticles = async (queryString: string) => {
  try {
    const res = await fetch(`${baseURL}/api/articles?${queryString}`, {
      method: "GET",
      headers: header,
      cache: 'no-store',
    });
    return res.json();
   
  } catch (error) {
    console.log(error);
  }
};

//ArticlesBySlug
export const fetchArticlesBySlug = async (queryString: string) => {
  try {
    const res = await fetch(`${baseURL}/api/articles?${queryString}`, {
      method: "GET",
      headers: header,
      cache: 'no-store',
    });
    return res.json();
   
  } catch (error) {
    console.log(error);
  }
}
