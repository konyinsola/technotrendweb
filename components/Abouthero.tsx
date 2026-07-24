import Image from "next/image";

export default function Abouthero() {
  return (
    <section className="relative w-full  lg:h-100.25 pt-24 lg:pt-30 pb-16 lg:pb-20 flex items-center overflow-hidden">
      <Image
        src="/ahome.jpg"
        alt="Building Africa's digital future"
        fill
        priority
        className="object-cover mt-3 -z-10"
      />

      <div className="max-w-288.5 mx-auto w-full px-6">
        <h1 className="text-white font-manrope font-extrabold text-[32px] leading-[36px] tracking-[-1px] sm:text-[44px] sm:leading-[46px] sm:tracking-[-1.2px] lg:text-[64px] lg:leading-[67.2px] lg:tracking-[-1.6px] w-full lg:w-[720px]">
          Building Africa's digital future, one system at a time.
        </h1>

        <p className="text-white font-manrope font-normal text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.63px] mt-4 lg:mt-6 w-full lg:w-[500px]">
          TechnoTrend Platforms Nigeria Limited is a full-service IT and
          telecommunications company headquartered in Lagos, Nigeria.
        </p>
      </div>
    </section>
  );
}
