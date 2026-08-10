const values = [
  {
    title: "Excellence",
    description:
      "We don't ship products we wouldn't use ourselves. Every line of code, every system, every delivery is held to a standard we're proud to stand behind.",
  },
  {
    title: "Partnership",
    description:
      "Our work doesn't end at deployment. We stay engaged because your growth is the measure of our success.",
  },
  {
    title: "Innovation",
    description:
      "We solve African challenges with African context — building for real infrastructure constraints, real users, and real markets.",
  },
  {
    title: "Reliability",
    description:
      "Telecom and enterprise systems don't sleep. Neither do we. Our infrastructure and support operate around the clock.",
  },
];

export default function Aboutmission() {
  return (
    <section className="w-full pt-16 pb-16 lg:pt-24 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <p
          className="font-['DM_Serif_Display'] uppercase text-gray-500 text-center"
          style={{
            fontWeight: 700,
            fontSize: "11px",
            lineHeight: "16.5px",
            letterSpacing: "1.1px",
          }}
        >
          Mission
        </p>

        <h2
          className="font-['DM_Serif_Display'] text-center mx-auto mt-4 max-w-[760px] text-[26px] leading-[32px] tracking-[-1px] sm:text-[32px] sm:leading-[38px] sm:tracking-[-1.3px] lg:text-[44px] lg:leading-[48.4px] lg:tracking-[-1.8px]"
          style={{ fontWeight: 800 }}
        >
          To enable every African business with the digital tools and
          infrastructure needed to operate at global standards.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 lg:mt-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8"
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "16px",
                  background: "#1565FF",
                }}
              >
                <span className="block w-2 h-2 rounded-full bg-white" />
              </div>

              <p
                className="font-['DM_Serif_Display'] mt-4"
                style={{
                  fontWeight: 800,
                  fontSize: "18px",
                  lineHeight: "27px",
                  letterSpacing: "0px",
                }}
              >
                {value.title}
              </p>

              <p
                className="font-['DM_Serif_Display'] mt-2 text-gray-500 text-[14px] leading-[24px] sm:text-[15px] sm:leading-[26px]"
                style={{
                  fontWeight: 400,
                  letterSpacing: "0px",
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}