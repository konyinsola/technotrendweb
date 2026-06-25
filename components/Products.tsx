const products = [
  {
    image: "/home.png",
    status: "LIVE",
    statusColor: "bg-gray-900",
    title: "HomeInteriors",
    desc: "A digital platform for home interiors, property styling, and lifestyle-focused improvement solutions.",
    url: "https://homeinteriorsng.com/",
    comingSoon: false,
    dark: false,
  },
  {
    image: "/real.png",
    status: "LIVE",
    statusColor: "bg-gray-900",
    title: "RealProperties",
    desc: "A digital property platform connecting buyers, sellers, and agents across Nigeria's real estate market.",
    url: "https://realpropertiesng.com/",
    comingSoon: false,
    dark: false,
  },
  {
    image: "/auto.png",
    status: "LIVE",
    statusColor: "bg-gray-900",
    title: "Autobrand",
    desc: "A digital platform for automotive branding, vehicle presentation, and auto-related business visibility.",
    url: "https://autobrandng.com/",
    comingSoon: false,
    dark: false,
  },
  {
    image: "/rides.png",
    status: "COMING SOON",
    statusColor: "bg-[#aaee00] text-gray-900",
    title: "24/7 Rides",
    desc: "A mobility platform being developed to support smarter, safer, and more accessible ride services.",
    url: null,
    comingSoon: true,
    dark: true,
  },
];

export default function Products() {
  return (
    <section id="products" className=" px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-4">
            Products
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Products we have built
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.title}
              className={`rounded-2xl overflow-hidden flex flex-col ${
                product.dark
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-36 object-cover"
                />
                {product.dark && (
                  <span className="absolute top-3 right-3 text-xs bg-black/60 text-white px-2 py-1 rounded-full">
                    in development
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Status Badge */}
                <span
                  className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                    product.comingSoon
                      ? "bg-[#aaee00] text-gray-900"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {product.status}
                </span>

                <h3 className="font-bold text-sm mb-2">{product.title}</h3>
                <p
                  className={`text-xs leading-5 flex-1 ${
                    product.dark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {product.desc}
                </p>

                {/* Button */}
                <div className="mt-4">
                  {product.comingSoon ? (
                    <span className="text-xs text-gray-500 border border-gray-600 rounded-full px-4 py-2">
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={product.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-gray-900 text-white text-xs px-4 py-2 rounded-full hover:bg-gray-700 transition"
                    >
                      Visit website ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
