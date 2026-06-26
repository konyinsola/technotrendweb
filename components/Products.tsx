import Image from 'next/image';

import SectionShell from '@/components/ui/section-shell';
import { HOME_SECTION_IDS } from '@/lib/routes';
import { homePageContent } from '@/lib/site';

export default function Products() {
  const { products } = homePageContent;

  return (
    <SectionShell
      id={HOME_SECTION_IDS.products}
      eyebrow={products.eyebrow}
      title={products.title}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.items.map((product) => {
            const isComingSoon = !product.href;

            return (
            <div
              key={product.title}
              className={`flex flex-col overflow-hidden rounded-2xl ${
                isComingSoon ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={320}
                  height={144}
                  className="h-36 w-full object-cover"
                />
                {isComingSoon ? (
                  <span className="absolute top-3 right-3 text-xs bg-black/60 text-white px-2 py-1 rounded-full">
                    in development
                  </span>
                ) : null}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <span
                  className={`mb-3 self-start rounded-full px-3 py-1 text-xs font-semibold ${
                    isComingSoon ? 'bg-[#aaee00] text-gray-900' : 'bg-gray-900 text-white'
                  }`}
                >
                  {product.status}
                </span>

                <h3 className="font-bold text-sm mb-2">{product.title}</h3>
                <p
                  className={`text-xs leading-5 flex-1 ${
                    isComingSoon ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {product.description}
                </p>

                <div className="mt-4">
                  {isComingSoon ? (
                    <span className="text-xs text-gray-500 border border-gray-600 rounded-full px-4 py-2">
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-gray-900 text-white text-xs px-4 py-2 rounded-full hover:bg-gray-700 transition"
                    >
                      Visit website ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
