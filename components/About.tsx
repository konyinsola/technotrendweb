import SectionShell from '@/components/ui/section-shell';
import { HOME_SECTION_IDS } from '@/lib/routes';
import { homePageContent } from '@/lib/site';

export default function About() {
  const { about } = homePageContent;

  return (
    <SectionShell
      id={HOME_SECTION_IDS.about}
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.description}
    >
      <div className="grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div />
        <div className="space-y-4">
          {about.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white px-6 py-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#aaee00]" />
                <h3 className="text-sm font-bold">{card.title}</h3>
              </div>
              <p className="pl-4 text-sm leading-6 text-black/56">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
