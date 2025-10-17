// contexts/PageContext.tsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { restructPageContent } from '@/utils/restructPageContent'
import PageData from '@/lib/page-data'

interface DataContextType {
  data: PageData[] | null
  loading: boolean
  error: string | null
}

const PageContext = createContext<DataContextType>({
  data: null,
  loading: true,
  error: null
})

export function PageDataProvider({ children, queryParams }: { children: React.ReactNode; queryParams?: string }) {
  const [data, setData] = useState<PageData[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function processPageData() {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(`/api/pages${queryParams || ''}`)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }
        
        const result = await response.json()
        
        // Validate data structure and process
        if (result && Array.isArray(result) && result.length >= 3 && result[2]) {
          const processedData = [...result]
          
          // Apply your utility function to data[2]
          try {
            const restructuredContent = await restructPageContent(processedData[2])
            processedData[2] = {
              ...processedData[2],
              mdx: restructuredContent
            }
          } catch (processError) {
            console.warn('Failed to process page content:', processError)
            // Keep original data[2] if processing fails
          }
          
          setData(processedData)
        } else {
          console.warn('Unexpected data structure from API:', result)
          setData(result)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    
    processPageData()
  }, [queryParams])

  return (
    <PageContext.Provider value={{ data, loading, error }}>
      {children}
    </PageContext.Provider>
  )
}

export const usePageData = () => useContext(PageContext)