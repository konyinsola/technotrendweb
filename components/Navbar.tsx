'use client';

import { useState } from 'react';
import Link from 'next/link';

import SiteLogo from '@/components/ui/site-logo';
import { navigationItems } from '@/lib/site';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 flex justify-center px-6 pt-6">
      <div className="w-full max-w-6xl rounded-[2rem] border border-black/10 bg-white/90 px-6 py-3 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <SiteLogo priority />

          <ul className="hidden items-center gap-8 text-sm text-black/64 md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-black">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex"
            >
              Speak with us
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black/5 md:hidden"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                    isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                    isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-200 md:hidden ${
            isMenuOpen ? 'mt-5 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-4">
            <ul className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-black/70 transition hover:bg-white hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 inline-flex w-full justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Speak with us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
