const stats = [
  { value: "10+", label: "Years in operation" },
  { value: "50+", label: "Enterprise clients" },
  { value: "8", label: "Countries reached" },
  { value: "99.9%", label: "System uptime SLA" },
];

export default function Aboutstats() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        background: "#F9FAFB",
      }}
    >
      <div className="max-w-[1154px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 lg:gap-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center flex-1 min-w-0"
          >
            <p
              className="font-manrope text-center whitespace-nowrap"
              style={{
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              <span className="text-[24px] leading-[24px] sm:text-[36px] sm:leading-[36px] lg:text-[52px] lg:leading-[52px]">
                {stat.value}
              </span>
            </p>

            <p
              className="font-inter mt-2 text-gray-500 text-center"
              style={{
                fontWeight: 400,
                letterSpacing: "0px",
              }}
            >
              <span className="text-[10px] leading-[14px] sm:text-[12px] sm:leading-[18px] lg:text-[14px] lg:leading-[21px] block truncate">
                {stat.label}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}