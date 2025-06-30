/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Form({ handleCountries }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
        handleCountries(data);
      });
  }, []);

  useEffect(() => {
    filterCountries(search, region);
  }, [search, region, allCountries]);

  function filterCountries(searchValue, regionValue) {
    let filtered = allCountries;

    if (regionValue) {
      filtered = filtered.filter(
        (country) =>
          country.region &&
          country.region.toLowerCase() === regionValue.toLowerCase()
      );
    }

    if (searchValue) {
      filtered = filtered.filter(
        (country) =>
          country.name &&
          country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    handleCountries(filtered);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleRegion(e) {
    setRegion(e.target.value);
  }

  return (
    <form
      action="#"
      className="w-full flex flex-col md:flex-row justify-between gap-4 px-[5%] md:px-[7%] my-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <label
        htmlFor="search"
        className="flex items-center gap-2 px-8 dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md w-full md:w-80"
      >
        <span className="text-gray-700 dark:text-gray-300">
          <FaSearch className="text-gray-500 dark:text-gray-400" />
        </span>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for a country..."
          className="p-3 focus:outline-none"
          value={search}
          onChange={handleSearch}
        />
      </label>

      <label htmlFor="filter" className="w-1/2 md:w-auto">
        <select
          name="Region"
          id="filter"
          value={region}
          onChange={handleRegion}
          className="appearance-none px-4 py-3 rounded-md dark:bg-[#2B3743] bg-slate-50 shadow-sm focus:outline-none"
        >
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </form>
  );
}
