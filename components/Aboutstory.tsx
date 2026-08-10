import Image from "next/image";

export default function Aboutstory() {
  return (
    <section className="w-full pt-16 pb-16 lg:pt-24 lg:pb-24">
      <div className="max-w-288.5 mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20">
        <div className="w-full lg:max-w-146.25">
          <p
            className="font-['DM_Serif_Display'] uppercase text-gray-500"
            style={{
              fontWeight: 700,
              fontSize: "11px",
              lineHeight: "16.5px",
              letterSpacing: "1.1px",
            }}
          >
            Our story
          </p>

          <h2
            className="font-['DM_Serif_Display']e mt-3 max-w-[585px] text-[28px] leading-[34px] tracking-[-1px] sm:text-[32px] sm:leading-[38px] sm:tracking-[-1.3px] lg:text-[40px] lg:leading-[44.8px] lg:tracking-[-1.8px]"
            style={{ fontWeight: 800 }}
          >
            From telecoms to full-stack digital technology.
          </h2>

          <div
            className="font-['DM_Serif_Display'] mt-6 flex flex-col gap-5 text-gray-600 text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px]"
            style={{ fontWeight: 400, letterSpacing: "0px" }}
          >
            <p>
              TechnoTrend Platforms Nigeria Limited was founded by a team of
              telecommunications engineers and software architects who
              identified a persistent gap: African enterprises lacked access
              to the same quality of digital infrastructure that was
              transforming businesses elsewhere in the world.
            </p>
            <p>
              We started in telecoms — building VAS platforms, callback
              services, and carrier-grade communication systems for mobile
              operators. Over time, our clients asked for more: mobile
              applications, web platforms, AI-enabled systems,
              industry-specific products. We grew to meet those needs.
            </p>
            <p>
              Today, TPNL operates as a full-service technology company —
              building the systems that help African businesses connect,
              grow, and compete at a global standard.
            </p>
          </div>
        </div>

        <div
          className="relative shrink-0 w-full h-[220px] sm:h-[280px] lg:w-[440px] lg:h-[330px] rounded-[20px]"
          style={{
            background: "linear-gradient(135deg, #C8DBFF 0%, #D6DAE2 100%)",
          }}
        >
          <Image
            src="/apeople.png"
            alt="TechnoTrend team working"
            fill
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}