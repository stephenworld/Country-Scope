import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center dark:bg-[#202C37] bg-slate-50">
      <div className="max-w-lg w-full mx-auto px-6 py-12 bg-white dark:bg-[#2B3743] rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-7xl font-extrabold text-[#FF5A5F] mb-2">404</h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center dark:text-white text-gray-900">
          Page not found.
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          We’re sorry, but it appears that we can’t find the page you were
          looking for.
          <br />
          This usually happens because the page was removed or you’ve mistyped
          the address.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-md bg-[#FF5A5F] text-white font-semibold shadow hover:bg-[#e14c50] transition"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
