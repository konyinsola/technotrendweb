import Image from "next/image";
import Link from "next/link";

const productLinks = {
  realProperties: "https://realproperties.com",
  tivs: "https://tivs.com",
  homeInteriors: "https://homeinteriors.com",
  rides: "https://rides.com",
  autoBrand: "https://auto-brand.com",
};

export default function About() {
  return (
    <section className="w-full py-24">
      {/* Heading */}

      <div className="max-w-360 mx-auto">
        <h2
          className="
                        text-center
                        font-manrope
                        font-medium
                        text-[43px]
                        leading-[60.96px]
                        tracking-[-2.3px]
                    "
        >
          Tailored Technology for
          <br />
          <span className="text-[#1565FF]">diverse industries</span>
        </h2>

        {/* Cards Container */}

        <div
          className="relative mx-auto mt-20"
          style={{
            width: "1236px",
            height: "766px",
          }}
        >
          {/* ==============================
                            REAL PROPERTIES
                      =============================== */}

          <div
            className="absolute rounded-[14px] overflow-hidden"
            style={{
              width: "746px",
              height: "361px",
              left: 0,
              top: 0,
              background:
                "linear-gradient(143.03deg,#F1F3FF 7.79%,#D5E5FF 89.9%)",
            }}
          >
            {/* Left Content */}

            <div
              className="absolute"
              style={{
                width: "362px",
                left: "40px",
                top: "48px",
              }}
            >
              <h3
                className="
                                font-manrope
                                font-black
                                text-[24px]
                                leading-[60.96px]
                                tracking-[-2.3px]
                                text-[#080A07]
                            "
              >
                Real Properties
              </h3>

              <p
                className="
                                mt-1
                                font-manrope
                                font-normal
                                text-[16px]
                                leading-[30.26px]
                                text-[#4B5563]
                            "
              >
                TechnoTrend Platforms Nigeria Limited provides telecom
                solutions, mobile and web applications.
              </p>

              <Link
                href={productLinks.realProperties}
                target="_blank"
                className="
                                inline-flex
                                items-center
                                justify-center
                                mt-8
                                w-[127px]
                                h-[41px]
                                rounded-[10px]
                                text-white
                                text-[12px]
                                font-bold
                            "
                style={{
                  background: "linear-gradient(90deg,#1565FF 0%,#0D3D99 100%)",
                }}
              >
                View Product
              </Link>
            </div>

            {/* Phones */}

            <Image
              src="/hone1.png"
              alt="Phone One"
              width={257}
              height={416}
              className="absolute"
              style={{
                top: "82px",
                left: "360px",
              }}
            />

            <Image
              src="/hone2.png"
              alt="Phone Two"
              width={257}
              height={416}
              className="absolute"
              style={{
                top: "82px",
                left: "529px",
                
              }}
            />
          </div>

          {/* ==========================
                      TIVS
            ========================== */}

          <div
            className="absolute rounded-[14px] overflow-hidden"
            style={{
              width: "472px",
              height: "514px",
              left: "764px",
              top: "0px",
              background:
                "linear-gradient(143.03deg,#F1F3FF 7.79%,#D5E5FF 89.9%)",
              boxShadow: "0px 12px 30px rgba(15,23,42,.05)",
            }}
          >
            {/* Dashboard Image */}

            <div
              className="absolute overflow-hidden rounded-[14px]"
              style={{
                width: "348px",
                height: "196px",
                left: "62px",
                top: "50px",
              }}
            >
              <Image
                src="/tivs.png"
                alt="TIVS Dashboard"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}

            <div
              className="absolute flex flex-col items-center"
              style={{
                width: "362px",
                left: "55px",
                top: "285px",
                gap: "10px",
              }}
            >
              <h3
                className="
                    font-manrope
                    font-extrabold
                    text-[24px]
                    leading-[34px]
                    tracking-[-2.3px]
                    text-center
                    text-[#080A07]
                  "
              >
                TIVS
              </h3>

              <p
                className="
                    font-manrope
                    font-normal
                    text-[16px]
                    leading-[30px]
                    text-center
                    text-[#667085]
                  "
              >
                TechnoTrend Platforms Nigeria Limited provides telecom
                solutions, mobile and web applications.
              </p>
            </div>

            {/* Button */}

            <Link
              href={productLinks.tivs}
              target="_blank"
              className="
                  absolute
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  text-white
                  font-bold
                  text-[12px]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              style={{
                width: "192px",
                height: "41px",
                left: "140px",
                bottom: "28px",
                background: "linear-gradient(90deg,#1565FF 0%,#0D3D99 100%)",
              }}
            >
              View Product
            </Link>
          </div>

          {/* ==========================
                    AUTOBRAND
            ========================== */}

          <div
            className="absolute rounded-[14px] overflow-hidden"
            style={{
              width: "366px",
              height: "384px",
              left: "0px",
              top: "382px",
              background:
                "linear-gradient(143.03deg,#F1F3FF 7.79%,#D5E5FF 89.9%)",
              boxShadow: "0px 12px 30px rgba(15,23,42,.05)",
            }}
          >
            {/* Car */}

            <Image
              src="/car.png"
              alt="Car"
              width={76}
              height={76}
              className="absolute rounded-[18px]"
              style={{
                left: "141px",
                top: "25px",
              }}
            />

            {/* People */}

            <Image
              src="/per1.png"
              alt=""
              width={36}
              height={36}
              className="absolute rounded-[3px]"
              style={{
                left: "73px",
                top: "75px",
                transform: "rotate(-6.31deg)",
              }}
            />

            <Image
              src="/per2.png"
              alt=""
              width={36}
              height={36}
              className="absolute rounded-[3px]"
              style={{
                left: "107px",
                top: "124px",
                transform: "rotate(-19.86deg)",
              }}
            />

            <Image
              src="/per3.png"
              alt=""
              width={36}
              height={36}
              className="absolute rounded-[3px]"
              style={{
                left: "183px",
                top: "127px",
                transform: "rotate(-6.31deg)",
              }}
            />

            <Image
              src="/per4.png"
              alt=""
              width={36}
              height={36}
              className="absolute rounded-[3px]"
              style={{
                left: "239px",
                top: "82px",
                transform: "rotate(16.5deg)",
              }}
            />

            {/* Text */}

            <div
              className="absolute flex flex-col items-center"
              style={{
                width: "294px",
                left: "36px",
                top: "165px",
                gap: "10px",
              }}
            >
              <h3
                className="
                    font-manrope
                    font-extrabold
                    text-[24px]
                    leading-[34px]
                    tracking-[-2.3px]
                    text-center
                    text-[#080A07]
                  "
              >
                AutoBrand
              </h3>

              <p
                className="
                    font-manrope
                    font-normal
                    text-[16px]
                    leading-[28px]
                    text-center
                    text-[#667085]
                  "
              >
                Connecting buyers to their vehicles.
                <br />
                Do not waste the opportunity and
                <br />
                order from us.
              </p>
            </div>

            {/* Button */}

            <Link
              href={productLinks.autoBrand}
              target="_blank"
              className="
                  absolute
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  text-white
                  font-bold
                  text-[14px]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              style={{
                width: "149px",
                height: "47px",
                left: "109px",
                bottom: "20px",
                background: "linear-gradient(90deg,#1565FF 0%,#0D3D99 100%)",
              }}
            >
              View Product
            </Link>
          </div>
          {/* ==========================
                    24/7 RIDES
            ========================== */}

          <div
            className="absolute overflow-hidden rounded-[14px]"
            style={{
              width: "366px",
              height: "384px",
              left: "380px",
              top: "382px",
            }}
          >
            {/* Background Image */}

            <Image
              src="/rides.png"
              alt="24/7 Rides"
              fill
              className="object-cover"
            />

            {/* Blue Overlay */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(132.81deg,#003FC0 27.22%,#4765E7 95.12%)",
                opacity: ".73",
              }}
            />

            {/* Content */}

            <div
              className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-8
                "
            >
              <h3
                className="
                    text-white
                    font-manrope
                    font-black
                    text-[24px]
                    leading-[60.96px]
                    tracking-[-2.3px]
                  "
              >
                24/7 Rides
              </h3>

              <p
                className="
                    mt-3
                    text-white
                    text-[16px]
                    leading-[30.26px]
                    max-w-[294px]
                  "
              >
                TechnoTrend Platforms Nigeria Limited provides telecom solution.
              </p>

              <button
                className="
                    mt-8
                    bg-white
                    rounded-[10px]
                    font-bold
                    text-[14px]
                    text-[#0D3D99]
                  "
                style={{
                  width: "149px",
                  height: "47px",
                }}
              >
                Coming soon
              </button>
            </div>
          </div>

          {/* ==========================
                  HOME INTERIORS
            ========================== */}

          <div
            className="absolute rounded-[14px] overflow-hidden"
            style={{
              width: "483px",
              height: "233px",
              top: "533px",
              left: "753px",
              background:
                "linear-gradient(143.03deg,#F1F3FF 7.79%,#D5E5FF 89.9%)",
              boxShadow: "0px 12px 30px rgba(15,23,42,.05)",
            }}
          >
            {/* Left Image */}

            <div
              className="absolute overflow-hidden rounded-[14px]"
              style={{
                width: "224px",
                height: "211px",
                top: "11px",
                left: "8px",
              }}
            >
              <Image
                src="/home.png"
                alt="Home Interiors"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}

            <div
              className="absolute flex flex-col"
              style={{
                width: "225px",
                top: "18px",
                right: "16px",
              }}
            >
              <h3
                className="
                    font-manrope
                    font-extrabold
                    text-[24px]
                    leading-[40px]
                    tracking-[-2.3px]
                    text-right
                    text-[#080A07]
                  "
              >
                HomeInteriors
              </h3>

              <p
                className="
                    mt-2
                    font-manrope
                    font-normal
                    text-[16px]
                    leading-[24px]
                    text-right
                    text-[#667085]
                  "
              >
                TechnoTrend Platforms Nigeria Limited provides telecom
                solutions, mobile and web applications.
              </p>

              <Link
                href={productLinks.homeInteriors}
                target="_blank"
                className="
                    mt-5
                    ml-auto
                    flex
                    items-center
                    justify-center
                    rounded-[10px]
                    text-white
                    text-[12px]
                    font-bold
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                style={{
                  width: "127px",
                  height: "41px",
                  background: "linear-gradient(90deg,#1565FF 0%,#0D3D99 100%)",
                }}
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
