import Link from "next/link";

import SectionShell from "@/components/ui/section-shell";
import { homePageContent } from "@/lib/site";

export default function CTA() {
  const { cta } = homePageContent;

  return (
    <section className=" px-6 py-24 text-center">
      <div className="max-w-5xl mx-auto">
       

        {/* Heading */}
        <div className="w-full flex justify-center">
  <h2
    className="
      font-manrope
      font-medium
      text-[42px]
      leading-[64.2px]
      tracking-[-2.4px]
      text-center
      text-[#080A07]
    "
    style={{
      width: "727px",
      height: "129px",
    }}
  >
    Let&apos;s create the system your business
    <br />
    needs next.
  </h2>
</div>

        {/* Subtext */}
        <p className="text-[#6F7169] font-inter text-[16px] text-center  mb-10">
          Talk to us about your technology goals — we'll find the right approach
          together.
        </p>

       <Link
          href="/contact"
          className="bg-[#1565FF] text-white text-center rounded-full px-6 py-2.5 font-manrope font-bold text-[13px] leading-[19.5px] tracking-[-0.13px]"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
