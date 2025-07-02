import { FaRegMoon, FaMoon } from "react-icons/fa";

export default function Navigation() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  }

  return (
    <nav className="dark:bg-[#2B3743] bg-slate-50 shadow-xs flex items-center justify-between px-[5%] md:px-[7%] py-6 font-bold">
      <h1 className="text-2xl">Where in the world?</h1>
      <button
        className="flex items-center justify-center gap-1 md:gap-2 cursor-pointer"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <FaMoon className="dark:inline-block hidden" />
        <FaRegMoon className="dark:hidden inline-block" />
        <span>
          <span className="dark:inline-block hidden">Light</span>
          <span className="dark:hidden inline-block">Dark</span>
          <span> Mode</span>
        </span>
      </button>
    </nav>
  );
}
