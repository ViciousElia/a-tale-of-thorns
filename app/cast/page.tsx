import { Metadata } from "next";
import CastTable from "@/components/layout/CastTable";

export const metadata: Metadata = {
  title: 'Cast',
  description: 'The cast of characters of A Tale of Thorns.',
  alternates: {
    canonical: 'https://rose.fruitfolio.com/cast',
  },
  openGraph: {
    title: 'Cast',
    description: 'The cast of characters of A Tale of Thorns.',
    url: 'https://rose.fruitfolio.com/cast',
    siteName: 'A Tale of Thorns',
  },
};

export default function Cast() {
  return (
    <div className="w-full md:w-4/5 transition-all duration-500 mx-auto px-4 flex flex-col bg-mid-800 dark:bg-mid-200 min-h-full border-l-3 border-l-primary border-r-3 border-r-primary-100 flex-grow">
      <div className="content">
        <CastTable />
      </div>
    </div>
  )
}
