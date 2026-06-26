import SectionShell from '@/components/ui/section-shell';
import { HOME_SECTION_IDS } from '@/lib/routes';
import { homePageContent } from '@/lib/site';

export default function Services() {
  const { services } = homePageContent;

  return (
    <SectionShell
      id={HOME_SECTION_IDS.services}
      eyebrow={services.eyebrow}
      title={services.title}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.items.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl px-6 py-8 ${
                service.emphasized
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-200 bg-white text-gray-900'
              }`}
            >
              <div className="mb-4 text-xl">
                <span className={service.emphasized ? 'text-[#aaee00]' : 'text-gray-700'}>•</span>
              </div>
              <h3 className="font-semibold text-sm mb-2">{service.title}</h3>
              <p
                className={`text-sm leading-6 ${
                  service.emphasized ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
