import { useEffect, useState } from "react";
import { FaRegMoon, FaMoon } from "react-icons/fa";

export default function Navigation() {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log(`Theme changed to: ${theme === "dark" ? "light" : "dark"}`);
  };

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
