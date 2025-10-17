'use client'

import MenuPages from "@/components/ui/MenuPages"
import Logo from "@/components/ui/Logo"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-row space-x-8 bg-primary-900 text-dark px-4 py-2">
      <Logo headFoot={1} />
      <>{/* Menu grouping or collapser */}</>
      <MenuPages headFoot={1} />
    </header>
  )
}