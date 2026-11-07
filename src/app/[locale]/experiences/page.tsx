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
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary relative z-10">
          {t("title")}
        </h2>

        <div className="relative border-l-2 border-primary/30 ml-2 md:ml-4 space-y-8 md:space-y-12 z-10 pb-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-5 md:pl-10 pb-2">
              {/* Timeline Node Center */}
              <div className="absolute -left-[9px] top-6 md:top-8 flex h-4 w-4 items-center justify-center rounded-full bg-background outline outline-4 outline-background">
                <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              </div>

              {/* Experience Card */}
              <div className="group flex flex-col gap-4 rounded-2xl bg-secondary/10 p-4 md:p-8 border border-border/30 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/30 pb-4">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
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
                    <h4 className="text-lg font-semibold text-foreground/70 mt-1">
                      {exp.role}
                    </h4>
                  </div>
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide whitespace-nowrap self-start md:self-auto">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mt-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 md:gap-4 text-foreground/80 leading-relaxed text-left md:text-[1.05rem]"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></span>
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
