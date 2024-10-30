import Link from "next/link"

import type { CountryDetailsType } from "@/types"

export const CountryBorderListItem = ({
  countryCode,
  commonName,
}: CountryDetailsType) => (
  <li key={countryCode}>
    <Link
      href={`/country/${countryCode}`}
      className="flex items-center space-x-3 rounded-lg border border-gray-200 p-4 shadow transition hover:bg-gray-100"
    >
      <span className="w-full truncate text-center text-lg font-medium text-gray-700">
        {commonName}
      </span>
    </Link>
  </li>
)
