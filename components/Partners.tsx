import Image from 'next/image';

import SectionShell from '@/components/ui/section-shell';
import { HOME_SECTION_IDS } from '@/lib/routes';
import { homePageContent } from '@/lib/site';

export default function Partners() {
  const { partners } = homePageContent;

  return (
    <SectionShell
      id={HOME_SECTION_IDS.partners}
      eyebrow={partners.eyebrow}
      title={partners.title}
      align="center"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.items.map((partner) => (
            <Image
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
