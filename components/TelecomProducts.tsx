const telecomProducts = {
  eyebrow: "Telecom Products",
  title: "Telecom products built for real mobile users.",
  items: [
    {
      label: "Callback Service",
      icon: "📲",
      title: "StarCall",
      description:
        "A callback service that allows subscribers to notify another user to call them back when they have low or no airtime.",
      tags: ["Low airtime", "Free to send", "Real-time notification"],
      emphasized: true,
    },
    {
      label: "Collect Call Service",
      icon: "📞",
      title: "Call Collect",
      description:
        "A collect-call service that allows a subscriber to place a call even with low balance, while the receiving party accepts the charge.",
      tags: ["Zero balance", "Party acceptance", "Carrier-grade"],
      emphasized: false,
    },
  ],
};

import SectionShell from "@/components/ui/section-shell";
import { HOME_SECTION_IDS } from "@/lib/routes";

export default function TelecomProducts() {
  return (
    <SectionShell
      id={HOME_SECTION_IDS.telecomProducts}
      title={telecomProducts.title}
      titleClassName="font-['DM_Serif_Display'] font-normal"
    >
      <div className="mx-auto max-w-6xl font-['DM_Serif_Display']">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-['DM_Serif_Display']">
          {telecomProducts.items.map((product) => (
            <div
              key={product.title}
              className={`rounded-2xl p-8 ${
                product.emphasized
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 bg-white text-gray-900"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-widest mb-3 font-['DM_Serif_Display'] ${"text-gray-400"}`}
              >
                {product.label}
              </p>

              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    product.emphasized ? "bg-[#1e2a1e]" : "bg-gray-100"
                  }`}
                >
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold font-['DM_Serif_Display']">
                  {product.title}
                </h3>
              </div>

              <p
                className={`text-sm leading-7 mb-6 font-['DM_Serif_Display'] ${
                  product.emphasized ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border font-['DM_Serif_Display'] ${
                      product.emphasized
                        ? "border-gray-700 text-gray-300"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
