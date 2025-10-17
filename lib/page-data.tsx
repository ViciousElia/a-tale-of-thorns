export default interface PageData {
  global: number
  title: string
  book: string
  arc: string
  content: string
  date: string
  place: string
  mdx?: {
    intro: string
    content: string
    outro: string
    meta: string
    structured: string
  }
}
