"use client";
import { debounce } from "@/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface IPropType {
  categories: ICategory[];
}
const Tabs = ({ categories }: IPropType) => {
  const pathname = usePathname();
  const router = useRouter();

  function handleOnSearch(value: string): void {
    // console.log('requesting...');
    router.push(`${pathname}?search=${value}`);
  }

  const optimzfn = debounce(handleOnSearch, 500);

  return (
    <div className="my-1 flex flex-col justify-start content-center sm:flex-row sm:justify-between overflow-hidden">
      <ul className="flex items-center overflow-auto">
        <li
          className={
            "mr-6 pb-0 border-b-4 rounded-sm min-w-fit " +
            `${
              pathname.endsWith("/")
                ? "border-primary text-primary"
                : "border-white text-gray-400"
            }`
          }
        >
          <Link href="/" >Recent</Link>
        </li>

        {categories.map((category) => {
          const isActive = pathname.startsWith(
            `/category/${category.attributes.Slug}`
          );
          return (
            <li
              key={category.id}
              className={
                "mr-6 pb-0 border-b-4 rounded-sm min-w-fit " +
                `${
                  isActive
                    ? "border-primary text-primary"
                    : "border-white text-gray-400"
                }`
              }
            >
              <Link href={`/category/${category.attributes.Slug}`}>
                {category.attributes.Title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-start mt-2 sm:mt-0">
        <svg
          className="h-4 fill-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
        <input
          onChange={(e) => optimzfn(e.target.value)}
          type="text"
          placeholder="Search"
          className=" px-2 py-1 ml-1 outline-none"
        />
      </div>
    </div>
  );
};

export default Tabs;
