"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const IconReact = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
    <circle cx="12" cy="12" r="2.139" />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.222"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.222"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.222"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
      transform="rotate(120 12 12)"
    />
  </svg>
);

const IconNextjs = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
  </svg>
);

const IconTypeScript = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#3178C6">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const IconNodejs = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#339933">
    <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.28.28 0 0 0-.139.24v10.15c0 .099.053.19.137.241l2.417 1.394c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.242a1.92 1.92 0 0 1 1.846 0l8.794 5.076c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.794 5.078a1.836 1.836 0 0 1-.923.247z" />
  </svg>
);

const IconTailwind = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#06B6D4">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const IconFirebase = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FFCA28">
    <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-13.999a.543.543 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />
  </svg>
);

const IconGit = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F05032">
    <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.66 2.66a1.838 1.838 0 1 1-1.103 1.042l-2.48-2.48v6.53a1.838 1.838 0 1 1-1.512-.066V8.806a1.838 1.838 0 0 1-.998-2.41L7.629 3.665.452 10.842a1.55 1.55 0 0 0 0 2.188l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.43-10.43a1.55 1.55 0 0 0 0-2.147z" />
  </svg>
);

const IconRedux = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#764ABC">
    <path d="M16.634 16.504c.87-.075 1.543-.818 1.5-1.705-.043-.878-.775-1.56-1.66-1.56h-.057c-.914.033-1.613.817-1.576 1.712.043.46.228.86.514 1.13-1.087 2.14-2.75 3.71-5.244 5.03-1.685.892-3.442 1.224-5.213.92-1.457-.25-2.594-.978-3.317-2.148-.993-1.62-1.121-3.38-.385-5.14.528-1.263 1.385-2.19 1.97-2.663-.107-.378-.285-1.02-.37-1.49C.32 12.885-.498 16.42.27 19.343c.57 2.149 1.84 3.726 3.717 4.575 .786.355 1.614.534 2.476.534.886 0 1.806-.192 2.678-.572 2.32-.987 4.078-2.76 5.08-5.13l.002.003.003-.004c.004-.007.007-.015.01-.022.003-.008.007-.016.01-.024l-.002.003c.28-.574.504-1.18.67-1.808.02-.082.04-.164.06-.247.01-.04.017-.08.025-.12l-.003.002a7.803 7.803 0 0 0 .13-.81c.02-.15.035-.3.047-.45.01-.1.017-.2.022-.3.007-.12.011-.24.013-.36l.002-.058zM21.413 11.126c-2.286-2.677-5.655-4.147-9.465-4.147h-.495c-.27-.532-.826-.892-1.456-.892h-.056c-.914.035-1.613.818-1.576 1.714.043.877.775 1.558 1.66 1.558h.056c.664-.024 1.225-.46 1.456-.944h.543c2.261 0 4.398.662 6.348 1.963 1.486 .993 2.555 2.282 3.164 3.827.527 1.313.5 2.594-.065 3.65-.863 1.61-2.313 2.5-4.228 2.5-.865.01-1.92-.26-2.465-.462-.336.299-.923.773-1.336 1.066 1.234.528 2.498.825 3.703.825 2.756 0 4.793-1.528 5.576-3.058.82-1.643.764-4.488-1.367-7.6zM7.126 17.16c.043.878.774 1.56 1.66 1.56h.056c.914-.036 1.613-.82 1.577-1.714-.043-.877-.775-1.558-1.66-1.558h-.057c-.063 0-.157 0-.228.034-1.32-2.2-1.878-4.59-1.692-7.15.121-1.904.72-3.558 1.781-4.906.878-1.118 2.586-1.663 3.727-1.695 3.2-.053 4.56 3.926 4.648 5.52l1.37.413C18.09 2.982 15.463.283 12.474.283 9.657.283 7.074 2.395 6.07 5.465c-1.377 4.26-.484 8.354 1.37 11.578-.178.262-.263.587-.24.932l-.074.185z" />
  </svg>
);

const IconAndroidStudio = () => (
  <Image
    src="/android-studio.svg"
    alt="Android Studio"
    width={24}
    height={24}
    className="object-contain"
  />
);

const IconXcode = () => (
  <Image
    src="/xCode.svg"
    alt="Xcode"
    width={24}
    height={24}
    className="object-contain"
  />
);

const SKILLS: {
  name: string;
  icon: React.ReactNode;
  t: string;
  l: string;
  d: string;
  dur: string;
}[] = [
  {
    name: "React",
    icon: <IconReact />,
    t: "15%",
    l: "12%",
    d: "0s",
    dur: "8s",
  },
  {
    name: "Next.js",
    icon: <IconNextjs />,
    t: "25%",
    l: "75%",
    d: "1.5s",
    dur: "10s",
  },
  {
    name: "TypeScript",
    icon: <IconTypeScript />,
    t: "65%",
    l: "18%",
    d: "0.5s",
    dur: "9s",
  },
  {
    name: "Node.js",
    icon: <IconNodejs />,
    t: "42%",
    l: "48%",
    d: "3s",
    dur: "11s",
  },
  {
    name: "Tailwind",
    icon: <IconTailwind />,
    t: "72%",
    l: "78%",
    d: "2.2s",
    dur: "8.5s",
  },
  {
    name: "React Native",
    icon: <IconReact />,
    t: "82%",
    l: "32%",
    d: "1s",
    dur: "12s",
  },
  {
    name: "Firebase",
    icon: <IconFirebase />,
    t: "12%",
    l: "82%",
    d: "4s",
    dur: "9.5s",
  },
  { name: "Git", icon: <IconGit />, t: "58%", l: "85%", d: "5s", dur: "11.5s" },
  {
    name: "Redux",
    icon: <IconRedux />,
    t: "18%",
    l: "45%",
    d: "3.5s",
    dur: "7.5s",
  },
  {
    name: "Android Studio",
    icon: <IconAndroidStudio />,
    t: "55%",
    l: "65%",
    d: "4.5s",
    dur: "10.2s",
  },
  {
    name: "Xcode",
    icon: <IconXcode />,
    t: "35%",
    l: "25%",
    d: "2.1s",
    dur: "8.8s",
  },
];

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="card bg-card/50 backdrop-blur-xl border-border p-8 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

        {/* About Title */}
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("title")}</h2>

        {/* Biography Description */}
        <div className="prose dark:prose-invert max-w-none mb-12 text-lg text-foreground/80 leading-relaxed text-left">
          {t.rich("description", {
            p: (chunks) => <p className="mb-4 last:mb-0">{chunks}</p>,
            highlight: (chunks) => <span className="font-bold">{chunks}</span>,
            link: (chunks) => (
              <a
                href="https://hcmut.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold hover:text-primary transition-colors cursor-pointer">
                  {chunks}
                </span>
              </a>
            ),
          })}
        </div>

        {/* Technical Skills Section */}
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("skills")}</h2>

        <div className="relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm">
          {/* Animated Stars Background - Shared */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary/20 animate-pulse-soft"
                style={{
                  top: `${(i * 37) % 100}%`,
                  left: `${(i * 23) % 100}%`,
                  width: `${(i % 4) + 1}px`,
                  height: `${(i % 4) + 1}px`,
                  animationDelay: `${i % 5}s`,
                }}
              />
            ))}
          </div>

          {/* Mobile View: Cosmic Grid */}
          <div className="md:hidden p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-card/40 border border-primary/10 backdrop-blur-md animate-cosmic hover:bg-primary/10 transition-colors"
                style={
                  {
                    "--float-duration": skill.dur,
                    animationDelay: skill.d,
                  } as React.CSSProperties
                }
              >
                <span className="w-8 h-8 mb-1 flex items-center justify-center">
                  {skill.icon}
                </span>
                <span className="text-sm font-bold opacity-90 text-center">
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-primary/5 blur-md -z-10"></div>
              </div>
            ))}
          </div>

          {/* Desktop View: 3D Orbit System */}
          <div className="hidden md:block relative h-[450px] w-full perspective-1000">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="absolute z-10 animate-cosmic"
                style={
                  {
                    top: skill.t,
                    left: skill.l,
                    "--float-duration": skill.dur,
                    animationDelay: skill.d,
                  } as React.CSSProperties
                }
              >
                <div className="skill-tag group">
                  <span className="w-5 h-5 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-primary/5 blur-md -z-10 group-hover:bg-primary/20 transition-all"></div>
                </div>
              </div>
            ))}

            {/* Center Decoration (Sun/Core) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/10 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-24 h-24 rounded-full border border-primary/20 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
