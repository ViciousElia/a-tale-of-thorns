// contexts/PageContext.tsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface DataContextType {
  data: any[] | null
  loading: boolean
}

const PageContext = createContext<DataContextType>({
  data: null,
  loading: true
})

export function PageDataProvider({ children, queryParams }: { children: React.ReactNode; queryParams?: string }) {
  const [data, setData] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/pages${queryParams}`)
      const data = await response.json()
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [queryParams])

  return (
    <PageContext.Provider value={{ data, loading }}>
      {children}
    </PageContext.Provider>
  )
}

export const usePageData = () => useContext(PageContext)