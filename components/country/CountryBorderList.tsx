import type { CountryDetailsType } from "@/types"

import { CountryBorderListItem } from "./CountryBorderListItem"

export const CountryBorderList = ({ borders }: CountryDetailsType) => (
  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {borders.length ? (
      borders.map(({ countryCode, commonName }) => (
        <CountryBorderListItem
          key={countryCode}
          countryCode={countryCode}
          commonName={commonName}
        />
      ))
    ) : (
      <p className="italic text-gray-500">No border countries available.</p>
    )}
  </ul>
)
