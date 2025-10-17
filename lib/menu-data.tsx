import { ReactNode } from 'react';
import Image from 'next/image';

export function menuData() : NamedPage[] {
  return [
    {name:'Archive',   href:'/archive',    icon:''},
    {name:'About',     href:'/about',      icon:''},
    {name:'Cast',      href:'/cast',       icon:''},
    {name:'References',href:'/references', icon:'',lock: 0},
    {name:'Contact',   href:'/contact',    icon:''},
    {name:'Home',      href:'/',           icon:'',lock: 2},
    {name:'Sitemap',   href:'/sitemap.xml',icon:'',lock: 2},
  ];
}

export function externals() : NamedPage[]{
  return [
    {name:'Birbles Art', href:'https://birbles.com/', icon:<div className="relative w-5 h-5"><Image src="/vectors/birbles.svg" alt="Birbles Art" className="object-cover" fill/></div>, lock: 2, external: true},
    {name:'XKCD', href:'https://xkcd.com/', icon:'',lock: 2, external: true},
    {name:'Questionable Content', href:'https://questionablecontent.net/', icon:'',lock: 2, external: true},
  ];
}

export function personals() : NamedPage[]{
  return [
    {name:'Fruit Folio', href:'https://fruitfolio.com/', icon:<div className="relative w-5 h-5"><Image src="/vectors/Folio.svg" alt="Fruit Folio" className="object-cover" fill/></div>,lock: 2,external: true},
    {name:'Forays (under construction)', href:'https://forays.fruitfolio.com/', icon:<div className="relative w-5 h-5"><Image src="/vectors/Forays.svg" alt="Forays" className="object-cover" fill/></div>,lock: 2, external: true},
  ];
}

export interface NamedPage {
  // Core data (for menus)
  name: string
  href: string
  icon?: ReactNode
  lock?: 0 | 1 | 2 | 3              // treat as binary flags 0b01 = header; 0b10 = footer

  // Navigation & SEO
  title?: string                    // Different from display name
  description?: string              // Meta description
  keywords?: string[]               // SEO keywords

  // OpenGraph et c
  ogImage?: string | { url: string; width?: number; height?: number; alt?: string }
  twitterCard?: 'summary' | 'summary_large_image' | 'player'
  twitterHandle?: string
  locale?: string

  // Behavior
  priority?: number                // Sort order (1 = high priority)
  external?: boolean               // External link
  target?: '_blank' | '_self'      // Link target
  rel?: string                     // Link rel attribute
  
  // State & Visibility  
  disabled?: boolean               // Grayed out/non-clickable
  badge?: string                   // "New", "Updated", count, etc.
  requiresAuth?: boolean           // Show only when authenticated
  
  // Organization
  category?: string                // Group menu items
  tags?: string[]                  // For filtering/search
  
  // Mobile/Responsive
  mobileOnly?: boolean             // Hide on desktop
  desktopOnly?: boolean            // Hide on mobile
  
  // Future-proofing
  children?: NamedPage[]           // For dropdown menus

}

