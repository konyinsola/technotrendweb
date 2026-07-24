import Image from "next/image";

export default function Abouthero() {
  return (
    <section className="relative w-full h-100.25 pt-30 pb-20 flex items-center overflow-hidden">
      <Image
        src="/ahome.jpg"
        alt="Building Africa's digital future"
        fill
        priority
        className="object-cover mt-3 -z-10"
      />

      <div className="max-w-288.5 mx-auto w-full px-6">
        <h1
          className="text-white font-manrope"
          style={{
            width: 867,
            fontWeight: 800,
            fontSize: "64px",
            lineHeight: "67.2px",
            letterSpacing: "-1.6px",
          }}
        >
          Building Africa's digital future, one system at a time.
        </h1>

        <p
          className="text-white font-manrope mt-6"
          style={{
            width: 520,
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: "27.63px",
            letterSpacing: "0px",
          }}
        >
          TechnoTrend Platforms Nigeria Limited is a full-service IT and
          telecommunications company headquartered in Lagos, Nigeria.
        </p>
      </div>
    </section>
  );
}
