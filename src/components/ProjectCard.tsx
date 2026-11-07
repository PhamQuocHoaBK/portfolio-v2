"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];

  timeAgo?: string;
  duration?: string;
  teamSize?: number;
  responsibilities?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,

  timeAgo,
  duration,
  teamSize,
  responsibilities,
  appStoreLink,
  playStoreLink,
  link,
}: ProjectCardProps) {
  const t = useTranslations("projects");
  return (
    <article className="card group animate-fade-in-up">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground whitespace-pre-wrap">
              {duration || timeAgo}
            </p>
            {teamSize && (
              <span className="text-xs text-muted-foreground">
                • {teamSize} {t("members")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Title & Description */}
      <div className="mb-4">
        <p className="text-foreground/80 text-sm leading-relaxed mb-3">
          {description}
        </p>
        {responsibilities && (
          <div className="text-foreground/80 text-sm leading-relaxed">
            <span className="font-semibold">{t("responsibilities")}: </span>
            {responsibilities}
          </div>
        )}
      </div>

      {/* Project Image */}
      <div className="relative mb-4 w-full overflow-hidden rounded-xl bg-muted/20 aspect-[1024/500]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* View Project Links */}
      <div className="mt-4 flex flex-col gap-2">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-center font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            View Project →
          </a>
        )}
        <div className="flex gap-2">
          {appStoreLink && (
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-card border border-border py-2.5 text-center font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              App Store
            </a>
          )}
          {playStoreLink && (
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-card border border-border py-2.5 text-center font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              Play Store
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
