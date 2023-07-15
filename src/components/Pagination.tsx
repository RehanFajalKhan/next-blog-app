"use client";

import qs from "qs";
import { useRouter, usePathname, useSearchParams, useParams } from "next/navigation";
import { useCallback } from "react";

interface IProptype {
  page: number;
  pageCount: number;
  // redirectUrl?: string;
}

const Pagination = ({ page, pageCount}: IProptype) => {
  const router = useRouter();
  const pathname = usePathname();
  const param = useParams();
  const searchParams = useSearchParams();

  // const query = searchParams.toString();
  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params:URLSearchParams = new URLSearchParams(searchParams.toString())
  //     params.set(name, value)
  //     return params.toString()
  //   },
  //   [searchParams]
  // )

  //! OR
  

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }
    let queryObject: any = {};
  searchParams.forEach((value, key: string) => {
    queryObject[`${key}`] = value;
  });

    const option = {
      ...param,
      ...queryObject,
      page: page + direction,
    };
    const queryString = qs.stringify(option);
    router.push(pathname + "?" + queryString);
    // router.push(pathname + '?' + createQueryString('page', `${page+direction}`))
  };
  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${"bg-primary py-2 px-4 text-white w-24 rounded"} ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${"bg-primary py-2 px-4 text-white w-24 rounded ml-4"} ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
