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
        paddingTop: "64px",
        paddingBottom: "64px",
        background: "#F9FAFB",
      }}
    >
      <div className="max-w-288.5 mx-auto flex items-center justify-between">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center"
            style={{ width: "284px" }}
          >
            <p
              className="font-manrope"
              style={{
                fontWeight: 800,
                fontSize: "52px",
                lineHeight: "52px",
                letterSpacing: "-2px",
                textAlign: "center",
              }}
            >
              {stat.value}
            </p>

            <p
              className="font-inter mt-3 text-gray-500"
              style={{
                width: "120px",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0px",
                textAlign: "center",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}