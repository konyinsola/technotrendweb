const telecomProducts = [
  {
    label: "CALLBACK SERVICE",
    icon: "📲",
    title: "StarCall",
    desc: "A callback service that allows subscribers to notify another user to call them back when they have low or no airtime.",
    tags: ["Low airtime", "Free to send", "Real-time notification"],
    dark: true,
  },
  {
    label: "COLLECT CALL SERVICE",
    icon: "📞",
    title: "Call Collect",
    desc: "A collect-call service that allows a subscriber to place a call even with low balance, while the receiving party accepts the charge.",
    tags: ["Zero balance", "Party acceptance", "Carrier-grade"],
    dark: false,
  },
];

export default function TelecomProducts() {
  return (
    <section id="contact" className=" px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-4">
            Telecom Products
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 max-w-md leading-snug">
            Telecom products built for real mobile users.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {telecomProducts.map((product) => (
            <div
              key={product.title}
              className={`rounded-2xl p-8 ${
                product.dark
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              {/* Label */}
              <p
                className={`text-xs uppercase tracking-widest mb-3 ${
                  product.dark ? "text-gray-400" : "text-gray-400"
                }`}
              >
                {product.label}
              </p>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    product.dark ? "bg-[#1e2a1e]" : "bg-gray-100"
                  }`}
                >
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold">{product.title}</h3>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-7 mb-6 ${
                  product.dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {product.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      product.dark
                        ? "border-gray-700 text-gray-300"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
