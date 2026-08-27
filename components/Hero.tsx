import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-360 mx-auto">
        {/* <Image
          src="/box1.png"
          alt=""
          width={78}
          height={69}
          className="absolute z-0 pointer-events-none select-none border rounded-md"
          style={{ top: "15.42px", left: "28px" }}
        />

        <Image
          src="/product.png"
          alt=""
          width={260}
          height={222}
          className="absolute z-0 pointer-events-none select-none rounded-[2.56px]"
          style={{ top: "253.42px", left: "14px" }}
        />

        <Image
          src="/box2.png"
          alt=""
          width={78}
          height={69}
          className="absolute z-0 pointer-events-none select-none border rounded-md"
          style={{ top: "353.42px", left: "940px" }}
        />

        <Image
          src="/yellow.png"
          alt=""
          width={217}
          height={219}
          className="absolute z-0 pointer-events-none select-none rounded-[5px]"
          style={{ top: "153.02px", left: "1120px" }}
        />

        <Image
          src="/green.png"
          alt=""
          width={142}
          height={143}
          className="absolute z-0 pointer-events-none select-none rounded-[3.27px]"
          style={{ top: "290.3px", left: "1156.83px" }}
        /> */}

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 pb-24 px-4">
          <h1 className="font-['DM_Serif_Display'] font-semibold text-[48px] leading-13.25 tracking-[-2.3px]">
            <span className="text-black">
              We build digital systems that help
            </span>
            <br />
            <span className="bg-[linear-gradient(31.84deg,#1565FF_34.68%,#080A07_98.03%)] bg-clip-text text-transparent">
              businesses connect and scale
            </span>
          </h1>

          <p className="font-['DM_Serif_Display'] font-normal text-[17px] leading-[30.26px] tracking-normal text-gray-500 mt-6 max-w-155 mx-auto">
            TPNL provides telecom solutions, mobile and web applications,
            AI-enabled systems, and digital product development for businesses
            across Africa.
          </p>

          <button className="mt-8 bg-[#1565FF] font-['DM_Serif_Display'] text-white text-sm rounded-[10px] pt-3.25 pr-5 pb-3.25 pl-5">
            Let&apos;s work with you
          </button>
        </div>
      </div>
    </section>
  );
}
