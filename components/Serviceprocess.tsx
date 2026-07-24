const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your business deeply — goals, constraints, users, and technical landscape.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft a solution architecture tailored to your specific needs and growth trajectory.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop with agility, shipping in structured phases with regular reviews.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "We launch with full monitoring, quality assurance, and zero-downtime strategies.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We stay with you through maintenance, updates, scaling, and future evolution.",
  },
];

export default function Serviceprocess() {
  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{
        background: "#F9FAFB",
      }}
    >
      <div className="max-w-288.5 mx-auto px-6 text-center">
        <p
          className="font-jetbrains-mono uppercase mx-auto"
          style={{
            fontWeight: 700,
            fontSize: "11px",
            lineHeight: "16.5px",
            letterSpacing: "1.1px",
            color: "#6F7169",
          }}
        >
          How we work
        </p>

        <h2
          className="font-manrope mx-auto mt-3 max-w-[571px] text-[26px] leading-[32px] tracking-[-1px] sm:text-[32px] sm:leading-[38px] sm:tracking-[-1.3px] lg:text-[40px] lg:leading-[44px] lg:tracking-[-1.6px]"
          style={{ fontWeight: 800 }}
        >
          Our process, from brief to build.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5 mt-10 lg:mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white text-left"
              style={{
                borderRadius: "16px",
                padding: "16px",
              }}
            >
              <p
                className="font-jetbrains-mono"
                style={{
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  color: "#1565FF",
                }}
              >
                {step.number}
              </p>

              <p
                className="font-manrope mt-3 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px]"
                style={{
                  fontWeight: 800,
                  letterSpacing: "0px",
                }}
              >
                {step.title}
              </p>

              <p
                className="font-inter mt-2 text-[12px] leading-[20px] lg:text-[13px] lg:leading-[22px]"
                style={{
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "#6F7169",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}