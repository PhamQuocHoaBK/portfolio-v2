"use client";

import { useTranslations } from "next-intl";

export default function ExperiencesPage() {
  const t = useTranslations("experiences");

  const experiences = [
    {
      company: t("zens.company"),
      website: t("zens.website"),
      period: t("zens.period"),
      role: t("zens.role"),
      points: t.raw("zens.points") as string[],
    },
    {
      company: t("fpt.company"),
      website: t("fpt.website"),
      period: t("fpt.period"),
      role: t("fpt.role"),
      points: t.raw("fpt.points") as string[],
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="card bg-card/50 backdrop-blur-xl border-border p-4 md:p-8 relative overflow-hidden min-h-[70vh]">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-foreground/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

        <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground relative z-10">
          {t("title")}
        </h2>

        <div className="relative border-l border-border ml-2 md:ml-4 space-y-8 md:space-y-10 z-10 pb-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-5 md:pl-8 pb-2">
              {/* Timeline Node Center */}
              <div className="absolute -left-[5px] top-6 md:top-7 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-foreground" />

              {/* Experience Card */}
              <div className="group flex flex-col gap-4 rounded-2xl bg-secondary/20 p-5 md:p-7 border border-border/60 hover:border-border hover:bg-secondary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border/40 pb-4">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <h4 className="text-sm font-medium text-foreground/60 mt-0.5">
                      {exp.role}
                    </h4>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary border border-border/60 text-foreground/75 text-xs font-medium tracking-wide whitespace-nowrap self-start md:self-auto">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2.5 mt-1">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-foreground/75 leading-relaxed text-left text-sm"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30 group-hover:bg-foreground/60 transition-colors"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
