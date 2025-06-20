'use client';

import { useState } from 'react';

const countries = [
  {
    name: 'India',
    population: '145,00,00,000',
    region: 'Asia',
    capital: 'Delhi',
    flag: '/india.png',
  },
  {
    name: 'United States of America',
    population: '323,947,000',
    region: 'Americas',
    capital: 'Washington, D.C.',
    flag: 'https://flagcdn.com/w320/us.png',
  },
  {
    name: 'Brazil',
    population: '206,135,893',
    region: 'Americas',
    capital: 'Brasília',
    flag: 'https://flagcdn.com/w320/br.png',
  },
  {
    name: 'Australia',
    population: '26,974,026',
    region: 'South-east Asia',
    capital: 'Canberra',
    flag: '/Australia.jpg',
  },
  {
    name: 'Afghanistan',
    population: '27,657,145',
    region: 'Asia',
    capital: 'Kabul',
    flag: 'https://flagcdn.com/w320/af.png',
  },
  {
    name: 'Åland Islands',
    population: '28,875',
    region: 'Europe',
    capital: 'Mariehamn',
    flag: 'https://flagcdn.com/w320/ax.png',
  },
  {
    name: 'Albania',
    population: '2,886,026',
    region: 'Europe',
    capital: 'Tirana',
    flag: 'https://flagcdn.com/w320/al.png',
  },
  {
    name: 'Algeria',
    population: '40,400,000',
    region: 'Africa',
    capital: 'Algiers',
    flag: 'https://flagcdn.com/w320/dz.png',
  },
];

export default function Page() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region === '' || country.region.toLowerCase() === region.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 py-10">
      <div className="flex flex-col md:flex-row md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold">Where in the world?</h1>
        <button className="self-end text-sm text-gray-600 dark:text-gray-300">
          🌙 Dark Mode
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2 border rounded shadow-sm w-full md:w-1/4 focus:outline-none"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <div
            key={country.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-[1.02] transition-all"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{country.name}</h2>
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
