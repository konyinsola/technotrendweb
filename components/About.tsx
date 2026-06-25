const cards = [
  {
    title: "Telecom Experience",
    desc: "Carrier-grade services across Nigeria's major networks",
  },
  {
    title: "Digital Product Development",
    desc: "End-to-end product design, development, and launch",
  },
  {
    title: "Business Technology Integration",
    desc: "Connecting enterprise systems with modern platforms",
  },
];

export default function About() {
  return (
    <section id="about" className=" px-6 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <div className="inline-block border border-gray-400 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">
            About
          </div>

          <h2 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
            Built for the businesses <br />
            shaping Africa's digital <br />
            economy.
          </h2>

          <p className="text-gray-500 text-[16px] font-bold leading-8">
            TechnoTrend Platforms Nigeria Limited is a full-service information
            technology and telecoms business services company. We help
            businesses create digital products, connect to mobile network
            services, automate operations, and serve customers through reliable
            technology.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-2xl px-6 py-5"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#aaee00] shrink-0" />
                <h3 className="font-bold text-[14px]">{card.title}</h3>
              </div>
              <p className="text-gray-500 text-[12px] pl-4">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
