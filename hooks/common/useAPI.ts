"use client"

import type { AxiosResponse } from "axios"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"

export const useAPI = <T>(callback: () => Promise<AxiosResponse<T>>) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [response, setResponse] = useState<T | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const { data } = await callback()
        setResponse(data)
      } catch (error) {
        if (error instanceof AxiosError) setError(error.response?.data.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { error, loading, response }
}
