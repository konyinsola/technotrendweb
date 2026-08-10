import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/lib/routes';
import { siteConfig } from '@/lib/site';

type SiteLogoProps = {
  priority?: boolean;
};

export default function SiteLogo({ priority = false }: SiteLogoProps) {
  return (
    <Link href={ROUTES.home} className="flex items-center gap-3" aria-label={`${siteConfig.shortName} home`}>
      <Image
        src="/logo.png"
        alt={`${siteConfig.shortName} logo`}
        width={32}
        height={32}
        priority={priority}
        className="h-8 w-auto"
      />
      <span className="text-sm font-bold tracking-tight text-[gray]">
        {siteConfig.shortName}
      </span>
    </Link>
  );
}
