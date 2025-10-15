// lib/mdx-build.ts
import { bundleMDX } from 'mdx-bundler'
import remarkObsidian from 'remark-obsidian'

export async function getMdxContent(source: string) {
  const result = await bundleMDX({
    source,
    mdxOptions(options) {  // ← Use mdxOptions instead of remarkPlugins
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkObsidian]
      return options
    },
  })

  return result
}
