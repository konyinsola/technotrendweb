const steps = [
  {
    number: "01",
    title: "Understand",
    desc: "We define the business goal, users, requirements, and technical scope.",
  },
  {
    number: "02",
    title: "Design",
    desc: "We map the product structure, user experience, and system architecture.",
  },
  {
    number: "03",
    title: "Build",
    desc: "We develop, integrate, test, and prepare the solution for real-world use.",
  },
  {
    number: "04",
    title: "Support",
    desc: "We assist with launch, optimization, maintenance, and continuous improvement.",
  },
];

export default function Process() {
  return (
    <section id="process" className=" px-6 py-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">
          Process
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-16">
          From idea to working product.
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-left"
            >
              <p className="text-[#aaee00] font-bold text-sm mb-4">
                {step.number}
              </p>
              <h3 className="font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
