import Link from "next/link"

type CountryListItemProps = {
  name: string
  code: string
}

export const CountryListItem = ({ name, code }: CountryListItemProps) => (
  <li>
    <Link
      href={`/country/${code}`}
      className="block rounded-lg border bg-white p-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="w-full truncate text-center text-lg font-semibold text-gray-800">
        {name}
      </h3>
    </Link>
  </li>
)
