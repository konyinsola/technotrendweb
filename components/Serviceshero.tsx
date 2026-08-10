import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="w-full py-12 lg:py-16 px-6">
      <div className="max-w-[637px] mx-auto text-center">
        <h2 className="font-['DM_Serif_Display'] font-normal text-[28px] leading-[34px] tracking-[-0.5px] sm:text-[38px] sm:leading-[44px] sm:tracking-[-1px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.5px] text-center text-[#1a1a1a]">
          Platforms built for African telecom and enterprise.
        </h2>
        <p className="font-['DM_Serif_Display'] font-normal text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-[#757575] max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] mx-auto mt-4 lg:mt-6">
          Three focused products each solving a specific problem for
          operators, institutions, and managed service customers across
          Nigeria.
        </p>
      </div>
    </section>
  );
}
