import PageData from "@/lib/page-data"

export function transformPageData(pages: PageData[]) {
  const structure: Record<string, Record<string, PageData[]>> = {}
  const reversed = pages.slice().reverse()

  reversed.forEach(page => {
    if (!structure[page.arc]) {
      structure[page.arc] = {}
    }
    if (!structure[page.arc][page.book]) {
      structure[page.arc][page.book] = []
    }
    structure[page.arc][page.book].push(page)
  })

  return structure
}