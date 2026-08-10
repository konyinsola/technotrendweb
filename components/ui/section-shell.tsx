import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  children: ReactNode;
  align?: "left" | "center";
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
  children,
  align = "left",
}: SectionShellProps) {
  const alignmentClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section id={id} className={`border-black/15 px-6 py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-6xl">
        {eyebrow || title || description ? (
          <div
            className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignmentClass}`}
          >
            {eyebrow ? (
              <span className="inline-flex rounded-full border border-black/15 px-4 py-1 text-xs uppercase tracking-[0.24em] text-black/60">
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2
                className={`text-4xl font-bold tracking-tight text-[#080A07] md:text-5xl ${titleClassName}`}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="text-base leading-8 text-black/58 md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        {children}
      </div>
    </section>
  );
}