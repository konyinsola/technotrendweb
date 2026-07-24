import Image from "next/image";
import Link from "next/link";

const products = [
  {
    key: "real-properties",
    name: "Real Properties",
    description:
      "A full-featured real estate platform connecting buyers, sellers, landlords, and verified agents. Real Properties brings transparency to the Nigerian property market with AI-powered valuations, virtual tours, and a verified listings engine.",
    features: [
      "Verified property listings",
      "AI-powered valuation and chart",
      "CRM & lead tools",
      "Landlord Tour",
      "In app chat",
    ],
    link: "https://realproperties.ng/",
    tag: "REAL-PROPERTIES",
    top: "phones",
  },
  {
    key: "tivs",
    name: "TIVS",
    description:
      "A full-featured real estate platform connecting buyers, sellers, landlords, and verified agents.",
    features: [
      "Content goes here",
      "Content goes here",
      "Content goes here",
      "Content goes here",
      "Content goes here",
    ],
    link: "https://tivs.com",
    tag: "TIVS",
    top: "tivs",
  },
  {
    key: "rides",
    name: "24/7 Rides",
    description:
      "A digital marketplace connecting Nigerian homeowners with interior designers, furniture retailers, and decor suppliers. Homeinteriors brings the full home transformation journey — inspiration, design, procurement — into one platform.",
    features: [
      "Real-time ride dispatch",
      "Driver onboarding & scoring",
      "Corporate fleet accounts",
      "Route optimisation engine",
      "In-app payment & tipping",
    ],
    link:"https://rides.com",
    tag: "24/7 RIDES",
    top: "rides",
  },
  {
    key: "home-interiors",
    name: "Homeinteriors",
    description:
      "A digital marketplace connecting Nigerian homeowners with interior designers, furniture retailers, and décor suppliers. Homeinteriors brings the full home transformation journey — inspiration, design, procurement — into one platform.",
    features: [
      "Designer marketplace",
      "Product catalogue & cart",
      "Room visualiser (AR-ready)",
      "Project management tools",
      "Trade & contractor portal",
    ],
    link:"https://homeinteriorsng.com/",
    tag: "HOMEINTERIORS",
    top: "home-interiors",
  },
  {
    key: "autobrand",
    name: "Autobrand",
    description:
      "Autobrand is a comprehensive automotive brand management and marketplace platform for dealerships, independent sellers, and fleet operators.",
    features: [
      "Dealer & seller portal",
      "Vehicle search & comparison",
      "Finance & lease tools",
      "Fleet management module",
      "Inspection & history reports",
    ],
    link:"https://autobrandng.com",
    tag: "AUTOBRAND",
    top: "autobrand",
  },
];

function CardTop({
  type,
  name,
  description,
}: {
  type: string;
  name: string;
  description: string;
}) {
  const titleStyle = {
    fontWeight: 900,
    letterSpacing: "-1.2px",
  };

  const descStyle = {
    fontWeight: 400,
    letterSpacing: "0px",
  };

  if (type === "phones") {
    return (
      <div
        className="relative w-full h-[260px] sm:h-[277px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #C8DBFF 0%, #DCE4F0 100%)",
        }}
      >
        <div
          className="absolute"
          style={{
            top: "17.68px",
            left: "24.68px",
            width: "62%",
            maxWidth: "236px",
          }}
        >
          <p
            className="font-manrope text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px]"
            style={titleStyle}
          >
            {name}
          </p>
          <p
            className="font-inter mt-2 text-[12px] leading-[19px] sm:text-[14px] sm:leading-[24px]"
            style={{ ...descStyle, color: "#6F7169" }}
          >
            {description}
          </p>
        </div>

        <Image
          src="/phone1.png"
          alt="Real Properties app screen"
          width={257}
          height={416}
          className="absolute hidden sm:block"
          style={{
            top: "-0.38px",
            left: "233.7px",
            width: "257px",
            height: "auto",
          }}
        />

        <Image
          src="/phone2.png"
          alt="Real Properties app screen"
          width={257}
          height={416}
          className="absolute hidden sm:block"
          style={{
            top: "29.78px",
            left: "402.92px",
            width: "257px",
            height: "auto",
          }}
        />
      </div>
    );
  }

  if (type === "tivs") {
    return (
      <div
        className="relative w-full h-[260px] sm:h-[277px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #C8DBFF 0%, #DCE4F0 100%)",
        }}
      >
        <div
          className="absolute overflow-hidden rounded-[14px]"
          style={{
            top: "42.68px",
            left: "19.68px",
            width: "min(78%, 348px)",
            height: "min(50%, 196px)",
          }}
        >
          <Image
            src="/tivs.png"
            alt="TIVS Dashboard"
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{ top: "77.68px", left: "382.68px", width: "201px" }}
        >
          <p
            className="font-manrope text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px]"
            style={titleStyle}
          >
            {name}
          </p>
          <p
            className="font-inter mt-2 text-[12px] leading-[19px] sm:text-[14px] sm:leading-[24px]"
            style={{ ...descStyle, color: "#6F7169" }}
          >
            {description}
          </p>
        </div>
      </div>
    );
  }

  if (type === "rides") {
    return (
      <div className="relative w-full h-[260px] sm:h-[277px] overflow-hidden">
        <Image
          src="/ride-bg.png"
          alt="24/7 Rides"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "#080A076B" }} />
        <div
          className="absolute"
          style={{
            top: "17.68px",
            left: "24.68px",
            width: "70%",
            maxWidth: "294px",
          }}
        >
          <p
            className="font-manrope text-white text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px]"
            style={titleStyle}
          >
            {name}
          </p>
          <p
            className="font-inter mt-2 text-white text-[12px] leading-[19px] sm:text-[14px] sm:leading-[24px]"
            style={descStyle}
          >
            {description}
          </p>
        </div>
      </div>
    );
  }

  if (type === "home-interiors") {
    return (
      <div
        className="relative w-full h-[260px] sm:h-[277px] overflow-hidden flex"
        style={{
          background: "linear-gradient(135deg, #C8DBFF 0%, #DCE4F0 100%)",
        }}
      >
        <div className="relative w-[42%] sm:w-[284px] h-full shrink-0">
          <Image
            src="/home-bg.png"
            alt="Home interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-4 sm:px-6">
          <p
            className="font-manrope text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px]"
            style={titleStyle}
          >
            {name}
          </p>
          <p
            className="font-inter mt-2 text-[12px] leading-[19px] sm:text-[14px] sm:leading-[24px]"
            style={{ ...descStyle, color: "#6F7169" }}
          >
            {description}
          </p>
        </div>
      </div>
    );
  }

  if (type === "autobrand") {
    return (
      <div
        className="relative w-full h-[280px] sm:h-[277px] overflow-hidden flex flex-col items-center justify-start pt-4"
        style={{
          background: "linear-gradient(135deg, #C8DBFF 0%, #DCE4F0 100%)",
        }}
      >
        <div
          className="relative w-[85%] sm:w-[524px]"
          style={{
            height: "clamp(90px, 20vw, 157.4px)",
            border: "0.37px solid #D9D8D8",
          }}
        >
          <Image
            src="/auto-bg.png"
            alt="Autobrand vehicles"
            fill
            className="object-contain"
          />
        </div>
        <p
          className="font-manrope mt-3 text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px]"
          style={titleStyle}
        >
          {name}
        </p>
        <p
          className="font-inter mt-2 text-center px-6 text-[12px] leading-[19px] sm:text-[14px] sm:leading-[24px]"
          style={{ ...descStyle, color: "#6F7169", maxWidth: "420px" }}
        >
          {description}
        </p>
      </div>
    );
  }

  return null;
}

export default function IndustryProducts() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <p
          className="font-jetbrains-mono uppercase"
          style={{
            fontWeight: 700,
            fontSize: "11px",
            lineHeight: "16.5px",
            letterSpacing: "1.1px",
            color: "#6F7169",
          }}
        >
          Industry Products
        </p>

        <h2
          className="font-manrope mt-3 max-w-[560px] text-[26px] leading-[32px] tracking-[-1px] sm:text-[32px] sm:leading-[38px] sm:tracking-[-1.3px] lg:text-[38px] lg:leading-[42.56px] lg:tracking-[-1.5px]"
          style={{ fontWeight: 800 }}
        >
          Five platforms. Five industries. One team.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 lg:mt-16">
          {products.map((product) => (
            <div
              key={product.key}
              className="rounded-[20px] overflow-hidden bg-white"
              style={{ border: "1.32px solid #E3E0D499" }}
            >
              <CardTop
                type={product.top}
                name={product.name}
                description={product.description}
              />

              <div className="p-6 sm:p-7">
                <p
                  className="font-manrope"
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "20.63px",
                    letterSpacing: "0px",
                  }}
                >
                  Features
                </p>

                <ul className="flex flex-col gap-2.5 mt-3">
                  {product.features.map((feature, index) => (
                    <li
                      key={`${product.key}-feature-${index}`}
                      className="flex items-start gap-2"
                    >
                      <span
                        className="shrink-0 block mt-2"
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "9999px",
                          background: "#1565FF",
                        }}
                      />
                      <span
                        className="font-inter"
                        style={{
                          fontWeight: 400,
                          fontSize: "13px",
                          lineHeight: "19.5px",
                          letterSpacing: "0px",
                          color: "#080A07B2",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-6 pt-5 flex items-center justify-between"
                  style={{ borderTop: "1px solid #E3E0D499" }}
                >
                  <Link
                    href={product.link}
                    target="_blank"
                    className="font-manrope inline-flex items-center gap-2"
                    style={{
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: "19.5px",
                      letterSpacing: "0px",
                      color: "#1565FF",
                    }}
                  >
                    Visit Website
                    <span
                      className="inline-block"
                      style={{
                        width: "8px",
                        height: "0px",
                        borderTop: "1.08px solid #1565FF",
                      }}
                    />
                  </Link>

                  <span
                    className="font-jetbrains-mono uppercase hidden sm:inline"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1px",
                      color: "#9CA3AF",
                    }}
                  >
                    {product.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}