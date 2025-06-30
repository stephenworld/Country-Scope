export default function Loading() {
  return (
    <article className="dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md overflow-hidden animate-pulse">
      <div className="w-full h-48 mb-4 bg-amber-200 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-amber-300 border-t-transparent animate-spin"></div>
      </div>
      <div className="px-6 pt-2 md:pt-4 pb-10 md:pb-14">
        <h2 className="text-2xl font-bold mb-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 h-6"></h2>
        <ul>
          <li className="mb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded w-32 h-4"></span>
          </li>
          <li className="mb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded w-24 h-4"></span>
          </li>
          <li>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded w-28 h-4"></span>
          </li>
        </ul>
      </div>
    </article>
  );
}
