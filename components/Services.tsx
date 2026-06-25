const services = [
  {
    icon: "",
    title: "Carrier Grade Services",
    desc: "IVR, USSD, SMS, games, and telecom services built for mobile network subscribers.",
    dark: true,
  },
  {
    icon: "",
    title: "Mobile & Web Applications",
    desc: "Custom platforms for real estate, mobility, e-commerce, enterprise operations, and customer engagement.",
    dark: false,
  },
  {
    icon: "",
    title: "Cognitive Services",
    desc: "Speech recognition, vision systems, knowledge services, and intelligent automation tools.",
    dark: false,
  },
  {
    icon: "",
    title: "Technology Interoperability",
    desc: "API integrations and system connections that allow platforms, telecom systems, and enterprise tools to work together.",
    dark: false,
  },
  {
    icon: "",
    title: "Artificial Intelligence",
    desc: "Predictive systems, workflow automation, data intelligence, and productivity-focused solutions.",
    dark: true,
  },
  {
    icon: "",
    title: "Health IT",
    desc: "Health informatics, telemedicine, clinical integration, and digital prescription solutions.",
    dark: false,
  },
];
export default function Services() {
  return (
    <section id="services" className=" px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">
            Services
          </div>
          <h2 className="text-4xl font-extrabold leading-snug text-gray-900 max-w-md">
            Not just IT services — practical technology infrastructure.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl px-6 py-8 ${
                service.dark
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              <div className="text-xl mb-4">
                {service.dark ? (
                  <span className="text-[#aaee00]">{service.icon}</span>
                ) : (
                  <span className="text-gray-700">{service.icon}</span>
                )}
              </div>
              <h3 className="font-semibold text-sm mb-2">{service.title}</h3>
              <p
                className={`text-sm leading-6 ${
                  service.dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
