import Navigator from "@/components/ui/Navigator";
import { PageDataProvider } from "@/contexts/PageContext";
import MDXRenderer from "@/components/MDXRenderer";
import { notFound } from 'next/navigation'

async function checkPageExists(pageId: number) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL
    const response = await fetch(`${baseUrl}/api/pages?p=${pageId}&check=true`)
    if (!response.ok) {
      console.log('Response not OK, status:', response.status)
      return false
    }
    const result = await response.json()
    return result.exists
  } catch (error) {
    console.log(error)
    return false
  }
}

export default async function Page({ params }: { params: Promise<{ globalIndex: number }> }) {
  const { globalIndex } = await params
  const queryParams = '?p=' + globalIndex

  const pageExists = await checkPageExists(globalIndex)
  if (!pageExists) {
    notFound() // This will show your 404 page
  }


  return (
    <PageDataProvider queryParams={queryParams}>
      <Navigator />
      <div className="w-full md:w-4/5 transition-all duration-500 mx-auto px-4 flex flex-col bg-mid-800 dark:bg-mid-200 min-h-full border-l-3 border-l-primary border-r-3 border-r-primary-100 flex-grow">
        <MDXRenderer />
      </div>
      <Navigator />
    </PageDataProvider>
  );
}
/* TODO: Add appropriate metadata (exists in page context) and structured data */