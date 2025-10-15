'use client'

import FooterPages from "@/components/ui/FooterPages"
import CopyrightNotice from "@/components/layout/CopyrightNotice"
import Tagline from "@/components/layout/Tagline"
import Logo from "@/components/ui/Logo"

export default function Footer(){
  return(
    <footer className="flex flex-col space-y-2 bg-primary-900 text-dark">
      <Tagline />
      <div className="flex flex-col md:flex-row space-x-8 space-y-4 px-16 py-2 items-center justify-between">
        <Logo headFoot={2} />
        <>{/* Menu grouping or collapser */}</>
        <FooterPages />
      </div>
      <CopyrightNotice />
    </footer>
  )
}