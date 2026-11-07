"use client";

import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  const projects = [
    {
      ...t.raw("items.myhers"),
      image: "/myhers_community.png",
      tags: [
        "TypeScript",
        "React Native",
        "Redux",
        "Axios",
        "Firebase",
        "Socket.IO",
        "Stripe SDKs",
      ],
      teamSize: 4,
      duration: "08/2025 - Present",
      appStoreLink:
        "https://apps.apple.com/vn/app/myhers-community/id6752558285",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.myherscommunity",
    },
    {
      ...t.raw("items.wisebuddy"),
      image: "/wise_buddy.png",
      tags: [
        "TypeScript",
        "React Native",
        "Redux",
        "RTK Query",
        "Google Cloud",
        "OpenAI",
        "Firebase",
      ],
      teamSize: 6,
      duration: "04/2025 - Present",
    },
    {
      ...t.raw("items.indochina"),
      image: "/indochina_enterprise.png",
      tags: [
        "TypeScript",
        "React Native",
        "Redux",
        "RTK Query",
        "NativeBase",
        "Firebase",
        "OneSignal",
        "Stripe SDKs",
      ],
      teamSize: 4,
      duration: "06/2024 - 02/2025",
      appStoreLink:
        "https://apps.apple.com/vn/app/indochina-enterprises/id6587560987",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.myzens.nimenterprises",
    },
    {
      ...t.raw("items.camxu"),
      image: "/camxu.jpg",
      tags: [
        "TypeScript",
        "React Native",
        "Redux",
        "RTK Query",
        "NativeBase",
        "Firebase",
      ],
      teamSize: 8,
      duration: "07/2023 - 12/2024",
      appStoreLink: "https://apps.apple.com/us/app/camxu/id6451105574",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.tiengtrungcamxu.mobile.camxu",
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}
