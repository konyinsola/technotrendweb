export default function Partners() {
  return (
    <section id="partners" className=" px-6 py-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">
          Partners
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
          Trusted across the telecom ecosystem.
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          <img src="/airtel.png" alt="Airtel" className="h-10 object-contain" />
          <img
            src="/star.png"
            alt="Starlogik"
            className="h-10 object-contain "
          />
          <img src="/fon.png" alt="fonYou" className="h-10 object-contain" />
          <img
            src="/inmobile.png"
            alt="Inmobiles"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
