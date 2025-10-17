'use server'
// utils/restructPageContent.ts
import fs from 'fs/promises'
import path from 'path'
import yaml from 'yaml'
import PageData from '@/lib/page-data'
import { Metadata } from 'next'

export interface ProcessedContent {
  intro: string
  content: string
  outro: string
  meta?: Metadata
  structured?: ChapterStructure
}
export interface ChapterStructure extends GeneralStructure {
  '@context': 'https://schema.org'
  '@type': 'Chapter'
  author: {
    '@type': 'Person'
    name: 'Terra Hyde'
  },
  isPartOf: {
    '@type': 'Book'
    bookFormat: 'EBook'
    name: string
    position: number
    isPartOf: {
      '@type': 'BookSeries'
      name: string
      position: number
      isPartOf: {
        '@type': 'CreativeWorkSeries'
        name: 'A Tale of Thorns'
      }
    }
  }
}
interface GeneralStructure extends BasicStructure {
  '@context': string
  description: string
  abstract: string
  position?: number
  wordCount: number
  datePublished: string
  author: AuthorStructure
  isPartOf?: BasicStructure
}
interface BasicStructure {
  '@type': string
  name: string
  position?: number
  isPartOf?: BasicStructure
}
interface AuthorStructure {
  '@type': 'Person'
  name: string
  url?: string
}
interface Frontmatter{
  title: string
  chapter_number: number
  book: string
  arc: string
  published: Date
  status: string
  global_part: number
  description: string
  summary: string
  ogTitle?: string
  ogDescription?: string
  word_count: number
}


export async function restructPageContent(pageData: PageData): Promise<ProcessedContent> {

  const filePath = path.join(process.cwd(), 'content/', pageData.content)
  let fileContent: string
  try {
    fileContent = await fs.readFile(filePath, 'utf8')
  } catch (error) {
    throw new Error(`Failed to read content file: ${filePath}. Error details: ${error}`)
  }

  // Split file between frontmatter and mainmatter
  const frontmatterMatch = fileContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
  if (!frontmatterMatch) {
    throw new Error('Invalid content format - frontmatter not found')
  }

  const [, frontmatterYaml, mainmatter] = frontmatterMatch

  // Read frontmatter as YAML into object
  let frontmatter: Frontmatter
  try {
    frontmatter = yaml.parse(frontmatterYaml)
  } catch (error) {
    console.log(error)
    throw new Error('Failed to parse frontmatter YAML')
  }

  // Data magic to create intro and outro markdown strings
  const intro = generateIntro(pageData)
  const outro = generateOutro(pageData)
  const meta = generateMeta(frontmatter)
  const structure = generateStructure(frontmatter,pageData)

  return {
    intro,
    content: mainmatter.trim(),
    outro,
    meta,
    structured: structure
  }
}

function generateIntro(pageData:PageData): string {
  let retVal: string
  retVal = pageData.arc?'### '+pageData.arc:''
  retVal += pageData.book?'\n### '+pageData.book:''
  retVal += pageData.place?'\n#### '+pageData.place:''
  return retVal
}

function generateOutro(pageData:PageData): string {
  let retVal: string
  retVal = 'Date: '+(pageData.date?pageData.date:'')+'\n\n'
  retVal += 'Place: '+(pageData.place?pageData.place:'')+'\n\n'
  retVal += 'Permalink: '+(pageData.global?'[https://rose.fruitfolio.com/p/'+pageData.global+'](/p/'+pageData.global+')':'')
  return retVal
}

function generateMeta(frontmatter: Frontmatter): Metadata {
  const retVal: Metadata = {
    title: frontmatter.title ,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.ogTitle || frontmatter.title,
      description: frontmatter.ogDescription || frontmatter.summary,
    },
  }
  return retVal
}

function generateStructure(frontmatter: Frontmatter,pageData:PageData): ChapterStructure {
  const [arc, book, chapter] = pageData.place.split('-').map(str => parseInt(str, 10))
  const retVal: ChapterStructure = {
    '@context': 'https://schema.org',
    '@type': 'Chapter',
    author: {
      '@type': 'Person',
      name: 'Terra Hyde'
    },
    isPartOf: {
      '@type': 'Book',
      bookFormat: 'EBook',
      name: frontmatter.book,
      position: book,
      isPartOf: {
        '@type': 'BookSeries',
        name: frontmatter.arc,
        position: arc,
        isPartOf: {
          '@type': 'CreativeWorkSeries',
          name: 'A Tale of Thorns'
        }
      }
    },
    name: frontmatter.title,
    description: frontmatter.description,
    abstract: frontmatter.summary,
    position: chapter,
    wordCount: frontmatter.word_count,
    datePublished: pageData.date,
  }
    
  return retVal
}
