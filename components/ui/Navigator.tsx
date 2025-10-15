'use client'

import PageData from '@/lib/page-data'
import { usePageData } from '@/contexts/PageContext'
import Link from 'next/link'

export default function Navigator() {
  const {data,loading} = usePageData()
  const validData = data as PageData[]

  if (loading) return <></>

  const [first, second, , fourth, fifth] = validData

  return (
    <div className="localNav text-4xl flex flex-row w-full justify-between px-32 bg-mid-700 dark:bg-mid-300">
      {first ? (
        <Link className="px-2 w-[4rem] text-center text-secondary hover:text-primary-700 transition-all duration-300" href={`/p/${first.global}`}>&lsaquo; &lsaquo;</Link>
      ) : (
        <span className="px-2 w-[4rem] text-center">&lsaquo; &lsaquo;</span>
      )}
      {second ? (
        <Link className="px-2 w-[4rem] text-center text-secondary hover:text-primary-700 transition-all duration-300" href={`/p/${second.global}`}>&lsaquo;</Link>
      ) : (
        <span className="px-2 w-[4rem] text-center">&lsaquo;</span>
      )}
      {fourth ? (
        <Link className="px-2 w-[4rem] text-center text-secondary hover:text-primary-700 transition-all duration-300" href={`/p/${fourth.global}`}>&rsaquo;</Link>
      ) : (
        <span className="px-2 w-[4rem] text-center">&rsaquo;</span>
      )}
      {fifth ? (
        <Link className="px-2 w-[4rem] text-center text-secondary hover:text-primary-700 transition-all duration-300" href={`/p/${fifth.global}`}>&rsaquo; &rsaquo;</Link>
      ) : (
        <span className="px-2 w-[4rem] text-center">&rsaquo; &rsaquo;</span>
      )}
    </div>
  );
}
