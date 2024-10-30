type Props = {
  name: string
  flagUrl: string
}

export const CountryFlag = ({ flagUrl, name }: Props) => (
  <h1 className="flex items-center gap-4 text-4xl font-extrabold text-gray-800">
    {name}
    <img
      src={flagUrl}
      alt={`${name} flag`}
      className="h-14 w-20 rounded-md border border-gray-300 shadow-lg"
    />
  </h1>
)
