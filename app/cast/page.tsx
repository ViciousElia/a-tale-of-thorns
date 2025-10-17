import CastTable from "@/components/layout/CastTable";

export default function Cast() {
  return (
    <div className="w-full md:w-4/5 transition-all duration-500 mx-auto px-4 flex flex-col bg-mid-800 dark:bg-mid-200 min-h-full border-l-3 border-l-primary border-r-3 border-r-primary-100 flex-grow">
      <div className="content">
        <CastTable />
      </div>
    </div>
  )
}
/* TODO: Add appropriate metadata (exists in page context) and structured data */