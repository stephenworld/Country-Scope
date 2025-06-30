import { Link } from "react-router";
import Navigation from "../components/Navigation";

export default function ErrorPage() {
  return (
    <>
      <div className="px-[5%] md:px-[7%] my-8 text-center">
        <p>404 Not Found</p>
        <Link to="/">
          <button className="dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md py-2 px-8">
            Go Home
          </button>
        </Link>
      </div>
    </>
  );
}
