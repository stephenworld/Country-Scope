export default function CountryInfo({
  flag,
  name,
  population,
  region,
  capital,
}) {
  return (
    <article className="dark:bg-[#2B3743] bg-slate-50 shadow-sm rounded-md overflow-hidden">
      <img
        src={flag}
        alt={name}
        className="w-full h-48 object-cover mb-4 bg-amber-200"
      />
      <div className="px-6 pt-2 md:pt-4 pb-10 md:pb-14">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <ul>
          <li>
            <b>Population:</b> {population.toLocaleString()}
          </li>
          <li>
            <b>Region:</b> {region}
          </li>
          <li>
            <b>Capital:</b> {capital}
          </li>
        </ul>
      </div>
    </article>
  );
}
