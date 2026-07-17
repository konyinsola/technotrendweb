import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{
        height: "478px",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <Image
        src="/serviceh.jpg"
        alt="End-to-end technology services"
        fill
        priority
        className="object-cover mt-3 -z-10"
      />

      <div className="max-w-288.5 mx-auto w-full px-6">
        <h1
          className="text-white font-manrope"
          style={{
            width: 720,
            fontWeight: 800,
            fontSize: "64px",
            lineHeight: "67.2px",
            letterSpacing: "-1.6px",
          }}
        >
          End-to-end technology services built around your growth.
        </h1>

        <p
          className="text-white font-manrope mt-6"
          style={{
            width: 817,
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: "27.63px",
            letterSpacing: "0px",
          }}
        >
          We cover the full technology stack — from carrier infrastructure to
          consumer-facing mobile apps — so you never outgrow your partner.
        </p>
      </div>
    </section>
  );
}