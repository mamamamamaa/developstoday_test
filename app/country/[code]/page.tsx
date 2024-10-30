"use client"

import { ErrorMessage, Loader, NotFound } from "@/components/common"
import {
  CountryBorderList,
  CountryFlag,
  PopulationChart,
} from "@/components/country"
import { useGetCountryInfoAPI } from "@/hooks/api"

interface CountryInfoProps {
  params: { code: string }
}

export default function CountryInfoPage({ params }: CountryInfoProps) {
  const { code } = params
  const { response: country, loading, error } = useGetCountryInfoAPI(code)

  if (loading) return <Loader />

  if (error) return <ErrorMessage message={error} />

  if (!country)
    return <NotFound message={`Country with code "${code}" not found.`} />

  return (
    <section className="flex flex-wrap justify-evenly gap-8">
      <div className=" max-w-3xl rounded-lg border border-gray-200 p-6 shadow-md">
        <CountryFlag flagUrl={country.flagUrl} name={country.info.commonName} />

        <h2 className="mt-6 text-2xl font-semibold text-gray-700">
          Border Countries
        </h2>

        <CountryBorderList {...country.info} />
      </div>

      <PopulationChart data={country.population} />
    </section>
  )
}
