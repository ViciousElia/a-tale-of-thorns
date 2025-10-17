'use client';

// Package imports
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Local imports
import { menuData as getMenuData } from '@/lib/menu-data'

export default function MenuPages(props: { headFoot: number }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuData = getMenuData();
  const headFoot = props.headFoot;

  return (
    <nav aria-label="Main navigation" className="flex justify-between items-center w-full">
      {/* Mobile menu button */}
      <div className="flex-1 md:hidden"></div>
      <button
        className="md:hidden flex items-center p-2 ml-auto"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open main menu</span>
        <div className="w-6 flex flex-col gap-1">
          <span className="h-0.5 w-full bg-current"></span>
          <span className="h-0.5 w-full bg-current"></span>
          <span className="h-0.5 w-full bg-current"></span>
        </div>
      </button>

      {/* Navigation menu */}
      <div
        id="mobile-menu"
        className={`
          ${isMobileMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col md:flex-row 
          absolute md:relative
          top-full left-0 right-0 md:top-0
          shadow-lg md:shadow-none 
          z-50
          bg-primary
          md:bg-primary-900
          text-light
          md:text-dark
        `}
      >
        <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0 w-full">
          {menuData.filter(item => (item.lock ?? 1) & headFoot).map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-2 
                    p-3 md:p-2 
                    rounded-lg 
                    transition-colors 
                    hover:bg-primary-800
                    hover:text-mid-100
                    ${isActive
                      ? 'text-secondary-500 bg-primary-50 font-semibold'
                      : ''
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon && (
                    <span className="flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}