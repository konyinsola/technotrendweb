import SectionShell from '@/components/ui/section-shell';
import { HOME_SECTION_IDS } from '@/lib/routes';
import { homePageContent } from '@/lib/site';

export default function Process() {
  const { process } = homePageContent;

  return (
    <SectionShell
      id={HOME_SECTION_IDS.process}
      eyebrow={process.eyebrow}
      title={process.title}
      align="center"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {process.steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-left"
            >
              <p className="text-[#aaee00] font-bold text-sm mb-4">
                {step.number}
              </p>
              <h3 className="font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-6">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
