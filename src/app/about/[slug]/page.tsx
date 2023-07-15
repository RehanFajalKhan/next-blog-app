"use client"
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import qs from 'qs'
const About = ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined | number}
}) => {
  // console.log(params);
  // console.log(params.slug);
  // let page=10;
  // console.log({...searchParams,page});

  const path = usePathname();
  console.log(path);
  
  const param = useParams();
  console.log(param);
  
  const {slug} = useParams();
  console.log(slug);
  
  const query = useSearchParams();
  console.log(query.get('name'));
  
  let queryObject:any = {}
  
  query.forEach((value, key:string) => {
     queryObject[`${key}`] = value
  });
  
  // console.log({...queryObject,page:10});
  
  
  const option = {
    ...queryObject,
    page: 10
  }
  const queryString = qs.stringify(option)
  console.log(queryString);
  
  return (
    <div>About Page</div>
  )
}

export default About
