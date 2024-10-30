// Country info
export type CountryInfoType = {
  info: CountryDetailsType
  population: CountryPopulationType[]
  flagUrl: string
}

// All countries
export type CountryListItemType = {
  countryCode: string
  name: string
}

// Country details
export type CountryDetailsType = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: CountryDetailsType[]
}

export type CountryPopulationType = {
  year: number
  value: number
}
