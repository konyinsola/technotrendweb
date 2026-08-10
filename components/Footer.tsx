import Link from 'next/link';

import SiteLogo from '@/components/ui/site-logo';
import { HOME_SECTION_IDS, buildSectionHref } from '@/lib/routes';
import { siteConfig } from '@/lib/site';

const companyLinks = [
  { label: 'About', href: buildSectionHref(HOME_SECTION_IDS.about) },
  { label: 'Services', href: buildSectionHref(HOME_SECTION_IDS.services) },
  { label: 'Products', href: buildSectionHref(HOME_SECTION_IDS.products) },
  { label: 'Partners', href: buildSectionHref(HOME_SECTION_IDS.partners) },
] as const;

const serviceLinks = [
  'Carrier Grade Services',
  'Mobile & Web Applications',
  'AI & Automation',
  'Technology Integration',
  'Health IT',
] as const;

const productLinks = ['HomeInteriors', 'RealProperties', 'Autobrand', '24/7 Rides'] as const;

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 sm:px-10 pb-6 pt-10 sm:pt-12 text-gray-400">
      <div className="mx-auto mb-8 sm:mb-10 grid max-w-6xl grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <div className="mb-4 ">
            <SiteLogo />
          </div>
          <p className="max-w-[220px] sm:max-w-[280px] lg:max-w-[180px] text-xs leading-6 text-gray-500">
            Full-service IT and telecoms business services company based in Lagos, Nigeria.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">Company</p>
          <ul className="space-y-3 text-xs">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">Services</p>
          <ul className="space-y-3 text-xs">
            {serviceLinks.map((service) => (
              <li key={service}>
                <span className="text-gray-500">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">Products</p>
          <ul className="space-y-3 text-xs">
            {productLinks.map((product) => (
              <li key={product}>
                <span className="text-gray-500">{product}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">Contact</p>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <span className="break-all">{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>{siteConfig.contact.phone}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mb-4 max-w-6xl overflow-hidden">
        <svg
          viewBox="0 0 1000 100"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <text
            x="0"
            y="85"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="fill-gray-800"
            style={{ fontWeight: 800, fontSize: "100px" }}
          >
            {siteConfig.shortName}
          </text>
        </svg>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-gray-800 pt-5">
        <p className="text-xs text-gray-600">© 2026 {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#aaee00]" />
          <span className="text-xs uppercase tracking-widest text-gray-500">{siteConfig.contact.city}</span>
        </div>
      </div>
    </footer>
  );
}