import { Link } from "react-router";

export default function CountryLoading() {
  return (
    <>
      <div className="px-[5%] md:px-[7%] my-8">
        <Link to="/countries">
          <button className="cursor-pointer dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md py-2 px-8">
            Back
          </button>
        </Link>
      </div>
      <main className="px-[5%] md:px-[7%] flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center animate-pulse">
        {/* Flag Skeleton */}
        <div className="w-full md:w-1/2 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 md:mb-0" />
        {/* Details Skeleton */}
        <section className="w-full md:w-1/2 space-y-6">
          <div className="h-8 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="flex flex-col md:flex-row justify-between gap-8 my-8 text-sm">
            <ul className="flex flex-col gap-2 w-full">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"
                />
              ))}
            </ul>
            <ul className="flex flex-col gap-2 w-full">
              {[...Array(3)].map((_, i) => (
                <li
                  key={i}
                  className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"
                />
              ))}
            </ul>
          </div>
          <div>
            <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
