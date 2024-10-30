"use client"

import type { CountryListItemType } from "@/types"
import axios from "@/utils/api"

import { useAPI } from "../common"

export const useGetAllCountriesAPI = () => {
  const apiCallback = () => axios.get<CountryListItemType[]>("/countries")

  return useAPI<CountryListItemType[]>(apiCallback)
}
