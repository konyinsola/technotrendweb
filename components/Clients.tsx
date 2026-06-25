import SectionShell from '@/components/ui/section-shell';
import { HOME_SECTION_IDS } from '@/lib/routes';
import { homePageContent } from '@/lib/site';

export default function Clients() {
  const { clients } = homePageContent;

  return (
    <SectionShell
      id={HOME_SECTION_IDS.clients}
      eyebrow={clients.eyebrow}
      title={clients.title}
      description={clients.description}
      align="center"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap justify-center gap-3">
          {clients.items.map((client) => (
            <span
              key={client}
              className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
