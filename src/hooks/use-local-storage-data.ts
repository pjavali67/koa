"use client"

import { useState, useEffect } from "react"

export function useLocalStorageData<T>(key: string, initialData: T[]): [T[], (data: T[]) => void] {
  const [data, setData] = useState<T[]>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(key)
      if (savedData) {
        try {
          return JSON.parse(savedData)
        } catch (error) {
          console.error(`Error parsing data from localStorage for key ${key}:`, error)
          return initialData
        }
      }
    }
    return initialData
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [key, data])

  return [data, setData]
}
