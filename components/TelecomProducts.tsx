import SectionShell from "@/components/ui/section-shell";
import { HOME_SECTION_IDS } from "@/lib/routes";
import { homePageContent } from "@/lib/site";

export default function TelecomProducts() {
  const { telecomProducts } = homePageContent;

  return (
    <SectionShell
      id={HOME_SECTION_IDS.telecomProducts}
      title={telecomProducts.title}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className={`text-xs uppercase tracking-widest mb-3 ${"text-gray-400"}`}
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
                <h3 className="text-xl font-bold">{product.title}</h3>
              </div>

              <p
                className={`text-sm leading-7 mb-6 ${
                  product.emphasized ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border ${
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
