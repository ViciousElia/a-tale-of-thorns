'use client'

import PageData from '@/lib/page-data'
import { usePageData } from '@/contexts/PageContext'
import MDXBuilder from '@/components/MDXBuilder'

export default function MDXRenderer() {
  const {data,loading} = usePageData()
  const validData = data as PageData[]

  if (!data || loading) return <></>
  const [,,current] = validData

  return (
    <>
      {current.mdx && current.mdx.intro && (<div className="intro"><MDXBuilder markdown={current.mdx.intro}/><hr /></div>)}
      {current.mdx && current.mdx.content && (<div className="content"><MDXBuilder markdown={current.mdx.content}/></div>)}
      {current.mdx && current.mdx.outro && (<div className="outro"><hr /><MDXBuilder markdown={current.mdx.outro}/></div>)}
    </>
  );
}
