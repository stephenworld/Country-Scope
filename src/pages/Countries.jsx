import { useEffect, useState } from "react";
import CountryInfo from "../components/CountryInfo";
import Form from "../components/Form";
import Loading from "../components/Loading";
import { Link } from "react-router";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  // Using a local JSON file for demonstration purposes
  const fetchCountries = () =>
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .finally(() => setLoading(false));

  return (
    <>
      <Form countries={countries} handleCountries={setCountries} />
      <main className="px-[5%] md:px-[7%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-20 p-4">
        {loading ? (
          <>
            <Loading />
            <Loading />
            <Loading />
          </>
        ) : (
          countries.map((country) => (
            <Link
              to={`/countries/${country.name
                .replace(/\s+/g, "")
                .toLowerCase()}`}
              key={country.name}
            >
              <CountryInfo
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          ))
        )}
      </main>
    </>
  );
}
