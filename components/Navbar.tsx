import Link from 'next/link';

import SiteLogo from '@/components/ui/site-logo';
import { navigationItems } from '@/lib/site';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center px-6 pt-6">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-black/10 bg-white/90 px-6 py-3 shadow-sm backdrop-blur">
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

        <Link
          href="/contact"
          className="inline-flex rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Speak with us
        </Link>
      </div>
    </nav>
  );
}
