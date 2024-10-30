"use client"

import { ErrorMessage, Loader, NotFound } from "@/components/common"
import { CountryListItem } from "@/components/country"
import { useGetAllCountriesAPI } from "@/hooks/api"

export default function CountryListPage() {
  const { response: countries, loading, error } = useGetAllCountriesAPI()

  if (loading) return <Loader />

  if (error) return <ErrorMessage message={error} />

  if (!countries) return <NotFound message="No countries found" />

  return (
    <section className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-extrabold text-gray-800">
        Country List
      </h1>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <CountryListItem
            key={country.countryCode}
            name={country.name}
            code={country.countryCode}
          />
        ))}
      </ul>
    </section>
  )
}
