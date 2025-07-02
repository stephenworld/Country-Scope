/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import CountryLoading from "../components/CountryLoading";

export default function CountryDetail() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountry();
  }, [countryName]);

  const fetchCountry = () =>
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Remove spaces and compare lowercased names
        const found = data.find(
          (c) =>
            c.name.replace(/\s+/g, "").toLowerCase() ===
            countryName.replace(/\s+/g, "").toLowerCase()
        );
        setCountry(found);
      });
  if (!country) {
    return <CountryLoading />;
  }

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders = [],
  } = country;

  return (
    <>
      <div className="px-[5%] md:px-[7%] my-8">
        <Link to="/countries">
          <button className="cursor-pointer dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md py-2 px-8">
            Back
          </button>
        </Link>
      </div>
      <main className="px-[5%] md:px-[7%] flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center">
        <img
          src={flag}
          alt={name}
          className="w-full md:w-1/2 object-cover h-auto max-h-110"
        />
        <section className="w-full md:w-1/2">
          <h2 className="font-bold text-2xl">{name}</h2>

          <div className="flex flex-col md:flex-row justify-between gap-8 my-8 text-sm">
            <ul className="flex flex-col gap-2">
              <li>
                <b>Native Name: </b>
                {nativeName}
              </li>
              <li>
                <b>Population: </b>
                {population?.toLocaleString()}
              </li>
              <li>
                <b>Region: </b>
                {region}
              </li>
              <li>
                <b>Sub Region: </b>
                {subregion}
              </li>
              <li>
                <b>Capital: </b>
                {capital}
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>
                <b>Top Level Domain: </b>
                {topLevelDomain?.join(", ")}
              </li>
              <li>
                <b>Currencies: </b>
                {currencies?.map((cur) => cur.name).join(", ")}
              </li>
              <li>
                <b>Languages: </b>
                {languages?.map((lang) => lang.name).join(", ")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Border Countries</h3>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {borders.length > 0 ? (
                borders.map((borderCountry, index) => (
                  <button
                    key={index}
                    className="dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md py-2 px-4 min-w-1/5 text-sm cursor-pointer"
                  >
                    {borderCountry}
                  </button>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
