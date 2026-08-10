import Image from "next/image";

const services = [
  { title: "Telecom Infrastructure", image: "/telecom-infrastructure.png" },
  { title: "Intelligent Systems", image: "/intelligent-systems.png" },
  { title: "Digital Product", image: "/digital-product.png" },
];

export default function Services() {
  return (
    <section className="w-full max-w-360 mx-auto py-12">
      <div className="max-w-225 mx-auto text-center flex flex-col items-center gap-4.25 px-4">
        <h2 className="font-['DM_Serif_Display'] font-normal text-[28px] leading-[34px] tracking-[-0.5px] sm:text-[34px] sm:leading-[44px] sm:tracking-[-1px] lg:text-[43px] lg:leading-[60.96px] lg:tracking-[-2.3px] lg:whitespace-nowrap">
          Building the future, one system at a time
        </h2>
        <p className="font-['DM_Serif_Display'] font-normal text-[15px] leading-[24px] sm:text-[16px] sm:leading-[27px] lg:text-[17px] lg:leading-[30.26px] max-w-162.5 mx-auto">
          We support businesses with technology to move from manual or
          limited operations into structured digital systems.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-nowrap lg:gap-11 max-w-310 mx-auto mt-10 lg:mt-16 px-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative w-full max-w-94.5 h-64 sm:w-[calc(50%-12px)] sm:h-72 lg:w-94.5 lg:h-82 rounded-[11px] overflow-hidden"
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