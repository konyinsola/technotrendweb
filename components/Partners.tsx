import Image from "next/image";

import SectionShell from "@/components/ui/section-shell";
import { HOME_SECTION_IDS } from "@/lib/routes";
import { homePageContent } from "@/lib/site";

export default function Partners() {
  const { partners } = homePageContent;

  return (
    <section id="partners" className=" px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">
          Partners
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-['DM_Serif_Display'] font-extrabold text-gray-900 mb-12">
          Trusted across the telecom ecosystem.
        </h2>

        {/* Logos */}
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
    </section>
  );
}
