type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}

// export interface ICategoryAttribute {
//   Title: string;
//   Slug: string;
// }

// export interface ICategory {
//   id: number;
//   attribute: ICategoryAttribute;
// }

// export interface IPagination {
//   page: number;
//   pageSize: number;
//   pageCount: number;
//   total: number;
// }
// export interface IResourceMeta {
//   pagination: IPagination;
// }

// export interface ICollectionResponse<T>{
//   data: T;
//   meta: IResourceMeta;
// }