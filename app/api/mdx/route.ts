// app/api/mdx/route.ts
import { getMdxContent } from '@/lib/mdx-build'

export async function POST(request: Request) {
  try {
    const { source } = await request.json()
    const result = await getMdxContent(source)
    return Response.json({ 
      code: result.code,
      frontmatter: result.frontmatter 
    })
  } catch (error) {
    console.log(error)
    return Response.json({ error: 'Failed to compile MDX' }, { status: 500 })
  }
}