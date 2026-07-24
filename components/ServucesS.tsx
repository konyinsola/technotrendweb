import Link from "next/link";

interface ServiceBlockProps {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  linkLabel: string;
  bgImage: string;
  tags: string[];
  imageLeft: boolean;
}

function ServiceBlock({
  eyebrow,
  title,
  description,
  points,
  bgImage,
  tags,
  imageLeft,
}: ServiceBlockProps) {
 const image = (
  <div
    className="relative shrink-0 overflow-hidden w-full lg:max-w-130 "
    style={{
      
      height: "340px",
      minHeight: "340px",
      borderRadius: "20px",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="absolute flex flex-wrap gap-2"
      style={{
        bottom: "28px",
        left: "28px",
        right: "28px",
      }}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-inter inline-block whitespace-nowrap"
          style={{
            paddingTop: "6px",
            paddingRight: "12px",
            paddingBottom: "6px",
            paddingLeft: "12px",
            borderRadius: "16px",
            background: "#FFFFFF99",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "0px",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

  const content = (
    <div
      className={`w-full lg:max-w-145.5 ${
        imageLeft ? "lg:pl-0 lg:pr-5" : "lg:pr-0 lg:pl-5"
      }`}
    >
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
        {eyebrow}
      </p>

      <h2
        className="font-manrope mt-3"
        style={{
          fontWeight: 800,
          fontSize: "38px",
          lineHeight: "42.56px",
          letterSpacing: "-1.5px",
        }}
      >
        {title}
      </h2>

      <p
        className="font-inter mt-4"
        style={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "28px",
          letterSpacing: "0px",
          color: "#6F7169",
        }}
      >
        {description}
      </p>

      <ul
        className="flex flex-col"
        style={{ gap: "10px", paddingTop: "32px", paddingBottom: "32px" }}
      >
        {points.map((point) => (
          <li key={point} className="flex items-center gap-3">
            <span
              className="shrink-0 block"
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
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0px",
              }}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );

  return (
     <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-6xl w-full px-6 gap-10">
      {imageLeft ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}

const services = [
  {
    eyebrow: "Telecom Infrastructure",
    title: "Carrier-grade telecom systems for modern mobile operators.",
    description:
      "We design, deploy, and manage the backbone of mobile telecommunications networks. From VAS platforms to carrier-grade switching systems, we build the infrastructure that keeps people connected — reliably, at scale, around the clock.",
    points: [
      "VAS (Value Added Services) platforms",
      "Mobile switching & signalling systems",
      "Subscriber management systems",
      "SMSC & USSD gateway integration",
      "Network Operations Center (NOC)",
      "Carrier billing & charging platforms",
    ],
    linkLabel: "Talk to us about telecom",
    bgImage: "ser1.png",
    tags: [
      "Telecom infrastructure",
      "VAS (Value Added Services) platforms",
      "Mobile switching & signalling systems",
      "Subscriber management systems",
    ],
    imageLeft: true,
  },
  {
    eyebrow: "Intelligence Systems",
    title: "AI and automation that turns data into decisions.",
    description:
      "We build AI-enabled intelligence systems that help businesses understand their operations, predict demand, automate repetitive processes, and make better strategic decisions — faster and with greater accuracy.",
    points: [
      "AI model development & deployment",
      "Data pipeline architecture",
      "Business intelligence dashboards",
      "Predictive analytics platforms",
      "Process automation & RPA",
      "Decision support systems",
    ],
    linkLabel: "Talk to us about intelligence",
    bgImage: "ser2.png",
    tags: [
      "Intelligence systems",
      "AI model development & deployment",
      "Data pipeline architecture",
      "Business intelligence dashboards",
    ],
    imageLeft: false,
  },
  {
    eyebrow: "Digital Products",
    title: "Custom software built to fit your business model.",
    description:
      "We build web applications, mobile apps, enterprise platforms, and APIs that scale with your business. Every product we build is designed for real users, real infrastructure, and real growth — not just to ship.",
    points: [
      "iOS & Android mobile applications",
      "Web application development",
      "Enterprise software (ERP, CRM)",
      "API design & third-party integration",
      "Cloud migration & architecture",
      "DevOps, CI/CD & infrastructure",
    ],
    linkLabel: "Talk to us about digital",
    bgImage: "ser3.png",
    tags: [
      "Digital products",
      "iOS & Android mobile applications",
      "Web application development",
      "Enterprise software (ERP, CRM)",
    ],
    imageLeft: true,
  },
];

export default function ServicesS() {
  return (
    <section className="w-full  py-24 flex flex-col gap-24">
      {services.map((service) => (
        <ServiceBlock key={service.title} {...service} />
      ))}
    </section>
  );
}
