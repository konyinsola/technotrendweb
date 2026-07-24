import Image from "next/image";

const services = [
  { title: "Telecom Infrastructure", image: "/telecom-infrastructure.png" },
  { title: "Intelligent Systems", image: "/intelligent-systems.png" },
  { title: "Digital Product", image: "/digital-product.png" },
];

export default function Services() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-20">
      <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-[17px] px-4">
        <h2 className="font-manrope font-medium text-[43px] leading-[60.96px] tracking-[-2.3px] whitespace-nowrap">
          Building the future, one system at a time
        </h2>
        <p className="font-manrope font-normal text-[17px] leading-[30.26px] max-w-[650px] mx-auto">
          We support businesses with technology to move from manual or
          limited operations into structured digital systems.
        </p>
      </div>

      <div className="flex justify-center gap-[44px] max-w-[1240px] mx-auto mt-16">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative w-[378px] h-[328px] rounded-[11px] overflow-hidden"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}