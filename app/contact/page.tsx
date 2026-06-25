import type { Metadata } from 'next';
import Link from 'next/link';

import Contact from '@/components/Contact';
import SiteLogo from '@/components/ui/site-logo';
import { ROUTES } from '@/lib/routes';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${siteConfig.shortName} to discuss telecom, product, integration, and digital platform work.`,
  alternates: {
    canonical: ROUTES.contact,
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#f6f3eb] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <SiteLogo priority />

          <Link
            href={ROUTES.home}
            className="rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-700 transition hover:bg-white"
          >
            ← Back to site
          </Link>
        </div>

        <Contact />
      </div>
    </section>
  );
}
