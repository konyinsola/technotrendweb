const stackItems = [
  {
    title: "Telecom Services",
    tags: ["IVR", "USSD", "SMS", "Call Collect", "StarCall"],
  },
  {
    title: "Digital Products",
    tags: ["HomeInteriors", "Autobrand", "24/7 Rides"],
  },
  {
    title: "AI & Automation",
    tags: ["Cognitive services", "Prediction", "Workflow intelligence"],
  },
  {
    title: "Integration Layer",
    tags: ["APIs", "Enterprise systems", "Mobile networks"],
  },
];

export default function stack() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-[#11130f] rounded-[28px] p-8 md:p-12 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <span
              className="text-lime-400 "
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "16.5px",
                letterSpacing: "1.1px",
                fontStyle: "semibold",
              }}
            >
              Technotrend Platform Stack
            </span>
          </div>

          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-600"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {stackItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#1b1d19] border border-[#2c2e29] rounded-2xl p-5"
            >
              <h3 className="text-white font-medium mb-4">{item.title}</h3>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#2a2c27] text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-10 text-[10px] uppercase tracking-[0.2em]">
          <span className="text-gray-500">TechnoTrend.ng • Lagos, Nigeria</span>

          <div className="flex items-center gap-2 text-lime-400">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <span>All Systems Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
