import Link from 'next/link';

import SectionShell from '@/components/ui/section-shell';
import { homePageContent } from '@/lib/site';

export default function CTA() {
  const { cta } = homePageContent;

  return (
    <SectionShell
      eyebrow={cta.eyebrow}
      title={cta.title}
      description={cta.description}
      align="center"
      className="pb-28"
    >
      <div className="flex justify-center">
        <Link
          href={cta.actionHref}
          className="inline-flex rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          {cta.actionLabel}
        </Link>
      </div>
    </SectionShell>
  );
}
