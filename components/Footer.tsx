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
    <footer className="bg-gray-900 px-10 pb-8 pt-16 text-gray-400">
      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4 invert">
            <SiteLogo />
          </div>
          <p className="max-w-[180px] text-xs leading-6 text-gray-500">
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

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">Contact</p>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>{siteConfig.contact.phone}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mb-6 max-w-6xl overflow-hidden">
        <p className="select-none text-[80px] font-extrabold leading-none text-gray-800 md:text-[120px]">
          {siteConfig.shortName}
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-gray-800 pt-6">
        <p className="text-xs text-gray-600">© 2026 {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#aaee00]" />
          <span className="text-xs uppercase tracking-widest text-gray-500">{siteConfig.contact.city}</span>
        </div>
      </div>
    </footer>
  );
}
