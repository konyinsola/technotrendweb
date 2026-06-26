import { homePageContent, siteConfig } from '@/lib/site';

export default function Stack() {
  const { stack } = homePageContent;

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-[#11130f] p-8 shadow-2xl md:p-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-lg font-semibold tracking-[0.08em] text-lime-400">
              {stack.title}
            </span>
          </div>

          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="h-2 w-2 rounded-full bg-gray-600" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {stack.items.map((item) => (
            <div
              key={item.title}
              className="bg-[#1b1d19] border border-[#2c2e29] rounded-2xl p-5"
            >
              <h3 className="text-white font-medium mb-4">{item.title}</h3>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#2a2c27] text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-10 text-[10px] uppercase tracking-[0.2em]">
          <span className="text-gray-500">{siteConfig.url.replace(/^https?:\/\//, '')} • {siteConfig.contact.city}</span>

          <div className="flex items-center gap-2 text-lime-400">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span>{stack.statusLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
