'use client'

import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo, useEffect, useState } from 'react'

interface Props {
  markdown: string
}

export default function MDXBuilder({ markdown }: Props) {
  const [compiledCode, setCompiledCode] = useState<string>('')

  useEffect(() => {
    const compile = async () => {
      const response = await fetch('/api/mdx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: markdown })
      })
      const { code } = await response.json()
      setCompiledCode(code)
    }

    if (markdown) compile()
  }, [markdown])

  const Component = useMemo(() => {
    if (!compiledCode) return () => null
    return getMDXComponent(compiledCode)
  }, [compiledCode])

  return <Component />
}