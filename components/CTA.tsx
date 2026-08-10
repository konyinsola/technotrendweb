import Link from "next/link";

import SectionShell from "@/components/ui/section-shell";
import { homePageContent } from "@/lib/site";

export default function CTA() {
  const { cta } = homePageContent;

  return (
    <section className="px-6 py-16 sm:py-20 lg:py-24 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="w-full flex justify-center">
          <h2
            className="
              font-['DM_Serif_Display']
              font-normal
              text-[28px]
              leading-[36px]
              tracking-[-1px]
              sm:text-[34px]
              sm:leading-[46px]
              sm:tracking-[-1.6px]
              lg:text-[42px]
              lg:leading-[64.2px]
              lg:tracking-[-2.4px]
              text-center
              text-[#080A07]
              max-w-[727px]
              mx-auto
            "
          >
            Let&apos;s create the system your business
            <br className="hidden lg:block" />
            needs next.
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-[#6F7169] font-['DM_Serif_Display'] text-[15px] sm:text-[16px] text-center max-w-[420px] sm:max-w-none mx-auto mt-4 mb-10">
          Talk to us about your technology goals — we&apos;ll find the right
          approach together.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#1565FF] text-white text-center rounded-full px-6 py-2.5 font-['DM_Serif_Display'] font-bold text-[13px] leading-[19.5px] tracking-[-0.13px]"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
