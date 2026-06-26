import Link from 'next/link';

import { homePageContent } from '@/lib/site';

export default function Hero() {
  const { hero } = homePageContent;

  return (
    <section className="px-6 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <span className="rounded-full bg-[#1f2a1f] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B7F34A]">
          {hero.eyebrow}
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-black tracking-tight text-[#080A07] md:text-7xl md:leading-[1.05]">
          {hero.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="inline-block rounded-full bg-[#11130F] px-4 py-1 text-[#B7F34A] md:px-5">
            {hero.highlightedWord}
          </span>
          <span className="block">{hero.closingLine}</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
          {hero.description}
        </p>

        <Link
          href={hero.ctaHref}
          className="mt-10 inline-flex rounded-full border border-black/15 bg-white px-8 py-4 text-sm font-semibold text-[#080A07] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {hero.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
