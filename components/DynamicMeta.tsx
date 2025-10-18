'use client'

import { usePageData } from '@/contexts/PageContext'
import PageData from '@/lib/page-data'
import { ChapterStructure } from '@/utils/restructPageContent'
import { useEffect } from 'react'

export default function DynamicMeta() {
  const { data, loading } = usePageData()

  useEffect(() => {
    const validData = data as PageData[]
    if (loading) return
    const [,,current,,] = validData
    if (!current.mdx) return
    const structured = current.mdx.structured
    if (current?.mdx?.meta) {
      try {
        const metaData = current.mdx.meta
        
        // Update title
        if (metaData.title) {
          document.title = metaData.title+' | A Tale of Thorns'
        }

        // Update meta tags
        updateMetaTag('name', 'description', metaData.description)
        updateMetaTag('property', 'og:title', metaData.openGraph.title || metaData.title)
        updateMetaTag('property', 'og:description', metaData.openGraph.description || metaData.description)
        updateMetaTag('property', 'og:image', metaData.openGraph.image)
        // Update StructuredData
        updateStructuredData(structured)

      } catch (error) {
        console.error('Error parsing meta data:', error)
      }
    }
  }, [data])

  const updateMetaTag = (attr: string, name: string, content?: string) => {
    if (!content) return
    
    let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attr, name)
      document.head.appendChild(meta)
    }
    meta.content = content
  }

  const updateStructuredData = (structuredData: ChapterStructure) => {
    // Remove existing structured data with the same type
    const existingScript = document.querySelector(`script[data-structured-type="chapter"]`)
    if (existingScript) {
      existingScript.remove()
    }
  
    // Create new script element with structured data
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('data-structured-type', 'chapter')
  
    script.textContent = JSON.stringify(structuredData, null, 2)
    document.head.appendChild(script)
  }

  return null // This component doesn't render anything
}