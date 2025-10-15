'use client'

import PageData from '@/lib/page-data'
import { usePageData } from '@/contexts/PageContext'
import Link from 'next/link'
import { transformPageData } from '@/utils/transformPageData'

export default function ArchiveTable() {
  const {data,loading} = usePageData()
  const validData = data as PageData[]

  if (loading) return <div>Loading...</div>

  const structure = transformPageData(validData)

  return (
    <div>
      {Object.entries(structure).map(([arcName, books]) => (
        <details key={arcName} open>
          <summary className="cursor-pointer font-bold text-3xl mt-6">{arcName}</summary>
          <div className="ml-4">
            {Object.entries(books).map(([bookName, pages]) => (
              <details key={bookName} open className="mt-4">
                <summary className="cursor-pointer text-2xl">{bookName}</summary>
                <table className="ml-4 mt-4 w-[90%]">
                  <thead>
                    <tr className="border-b-1 border-mid">
                      <th className="text-left">Page Number</th>
                      <th className="text-left">Place</th>
                      <th className="text-left">Page Title</th>
                      <th className="text-left">Page Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map(page => (
                      <tr key={page.global} className="even:bg-mid-700 dark:even:bg-mid-300">
                        <td>{page.global}</td>
                        <td><Link href={`/p/${page.global}`} className="text-secondary hover:text-primary-700 transition-all duration-300">{page.place}</Link></td>
                        <td>{page.title}</td>
                        <td>{page.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </details>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
