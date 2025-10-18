import { Metadata } from "next";
import { PageDataProvider } from "@/contexts/PageContext";
import ArchiveTable from "@/components/layout/ArchiveTable";

export const metadata: Metadata = {
  title: 'Archive',
  description: 'A collection of the old pages from A Tale of Thorns.',
  alternates: {
    canonical: 'https://rose.fruitfolio.com/archive',
  },
  openGraph: {
    title: 'Archive',
    description: 'A collection of the old pages from A Tale of Thorns.',
    url: 'https://rose.fruitfolio.com/archive',
    siteName: 'A Tale of Thorns',
    images: [{ url: 'https://rose.fruitfolio.com/vectors/Rose.svg' }]
  },
};

export default function ArchivePage() {
  const queryParams = ''

  return (
    <PageDataProvider queryParams={queryParams}>
      <div className="w-full md:w-4/5 transition-all duration-500 mx-auto px-4 flex flex-col bg-mid-800 dark:bg-mid-200 min-h-full border-l-3 border-l-primary border-r-3 border-r-primary-100 flex-grow">
        <div className="intro">
          <h1>Archive</h1>
        </div>
        <hr />
        <div className="content flex-grow">
          <ArchiveTable />
        </div>
        <div className="py-8"></div>
      </div>
    </PageDataProvider>
  );
}
