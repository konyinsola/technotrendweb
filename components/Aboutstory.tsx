import Image from "next/image";

export default function Aboutstory() {
  return (
    <section className="w-full pt-24 pb-24">
      <div className="max-w-288.5 mx-auto flex items-start justify-between gap-20">
        <div className="max-w-146.25">
          <p
            className="font-jetbrains-mono uppercase text-gray-500"
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
            className="font-manrope mt-3"
            style={{
              width: 585,
              fontWeight: 800,
              fontSize: "40px",
              lineHeight: "44.8px",
              letterSpacing: "-1.8px",
            }}
          >
            From telecoms to full-stack digital technology.
          </h2>

          <div
            className="font-inter mt-6 flex flex-col gap-5 text-gray-600"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0px",
            }}
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
          className="relative shrink-0"
          style={{
            width: "100%",
            maxWidth: "440px",
            height: "330px",
            borderRadius: "20px",
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