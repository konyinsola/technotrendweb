const clients = [
  "Telecom Operators",
  "Real Estate Businesses",
  "Mobility Companies",
  "Healthcare Providers",
  "E-commerce Brands",
  "Enterprise Teams",
  "Digital Product Founders",
];

export default function Clients() {
  return (
    <section id="clients" className=" px-6 py-24 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Tag */}
        <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">
          Clients
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Who we build for
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm leading-7 mb-10">
          From telecom operators to digital product founders — we serve
          businesses that take technology seriously.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((client) => (
            <span
              key={client}
              className="border border-gray-300 text-gray-700 text-sm rounded-full px-5 py-2"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
