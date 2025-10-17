import Navigator from "@/components/ui/Navigator";
import { PageDataProvider } from "@/contexts/PageContext";
import MDXRenderer from "@/components/MDXRenderer";

export default function Home() {
  const queryParams = '?p=last'

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