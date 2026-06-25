export default function Home() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-20">
      <div className="bg-[#1f2a1f] text-[#B7F34A] text-[11px] font-semibold tracking-widest px-5 py-2 rounded-full uppercase">
        IT • Telecoms • Digital Products
      </div>

      <h1
        className="mt-8 max-w-4xl text-center text-[#080A07]"
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 900,
          fontSize: "72px",
          lineHeight: "76.32px",
          fontStyle: "semibold",
        }}
      >
        We build digital
        <br />
        systems that help
        <br />
        businesses{" "}
        <span
          className="text-[#B7F34A] bg-[#11130F] px-4 rounded-full inline-block"
          style={{ fontSize: "64px" }}
        >
          connect
        </span>
        <br />
        and scale.
      </h1>

      <p className="mt-8 max-w-2xl font-medium text-gray-500 text-lg leading-relaxed">
        TechnoTrend Platforms Nigeria Limited provides telecom solutions, mobile
        and web applications, AI-enabled systems, and digital product
        development for businesses across Africa.
      </p>

      <button className="mt-10 bg-white border border-gray-300 px-8 py-4 rounded-full font-medium shadow-sm hover:shadow-md transition">
        <a href="#products"> View Products</a>
      </button>
    </section>
  );
}
