export default function Loading() {
  return (
    <article
      className="dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md overflow-hidden animate-pulse"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="w-full h-48 mb-4 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 rounded-full border-4 border-amber-300 border-t-transparent animate-spin"></div>
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none" />
      </div>
      <div className="px-6 pt-2 md:pt-4 pb-10 md:pb-14">
        <h2 className="text-2xl font-bold mb-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 h-6 relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </h2>
        <ul>
          {[32, 24, 28].map((w, i) => (
            <li className="mb-2" key={i}>
              <span
                className={`inline-block bg-gray-200 dark:bg-gray-700 rounded h-4 w-${w} relative overflow-hidden`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 1.5s infinite linear;
          }
        `}
      </style>
    </article>
  );
}
