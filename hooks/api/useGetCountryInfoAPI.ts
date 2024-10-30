"use client"

import type { CountryInfoType } from "@/types"
import axios from "@/utils/api"

import { useAPI } from "../common"

export const useGetCountryInfoAPI = (code: string) => {
  const apiCallback = () => axios.get<CountryInfoType>(`/countries/${code}`)

  return useAPI<CountryInfoType>(apiCallback)
}
