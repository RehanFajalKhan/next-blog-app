interface ICategoryAttribute{
    "Title": string;
    "Slug": string;
  }
     
  
  interface ICategory  {
      "id": number;
      "attributes": ICategoryAttribute;
  }
  
  interface ICategories {
      "data" : ICategory[];
      "meta" : ResourceMeta;
  }
  
  interface IPagination  {
      "page": number;
      "pageSize": number;
      "pageCount": number;
      "total": number;
  }
  
  interface IResourceMeta  {
      "pagination": IPagination;
  }
  
  interface ICollectionResponse<T>{
    data: T;
    meta: IResourceMeta;
  }

  interface IImageData {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string
                }
            }
        }
    }
  }

  interface IAuthor {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                       formats: {
                        thumbnail: {
                            url: string;
                        }
                       } 
                    }
                }
            }
        }
    }
  }

  interface IArticleAttribute {
    Title: string;
    body: string;
    Slug: string;
    Image: IImageData;
    createdAt: string;
    author: IAuthor;
    shortDescription: string;
  }

  interface IArticle {
    [x: string]: any;
    id: number;
    attributes: IArticleAttribute;
  }

  type TDirection = 1 | -1;

  interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number;
        pageSize: number;
    }
  }