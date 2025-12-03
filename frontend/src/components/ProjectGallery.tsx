import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  chromeStoreUrl: string;
  githubUrl?: string;
  tags: string[];
}

interface ProjectGalleryProps {
  language: "en" | "ru";
}

const projects: Project[] = [
  {
    id: "1",
    title: "Yandex Tweak",
    description: "Chrome extension that blocks ads in Yandex Mail service",
    imageUrl: "/banners/yandex-tweak.png",
    chromeStoreUrl: "https://chromewebstore.google.com/detail/яндекс-твик-adblock-почты/gdmgaolhbllpodgbdpmgbcdnplkcijcd?authuser=0&hl=en",
    githubUrl: "https://github.com/valentderah/yandex-tweak",
    tags: ["Chrome Extension", "JavaScript", "AdBlock"],
  },
  {
    id: "2",
    title: "VK Video Hotkeys",
    description: "Chrome extension that adds hotkey support for VK video player",
    imageUrl: "/banners/vk-hotkeys.png",
    chromeStoreUrl: "https://chromewebstore.google.com/detail/горячие-клавиши-вк-видео/pgacfedlkaomiedeibedjhpmiknfkidk?authuser=0&hl=en",
    githubUrl: "https://github.com/valentderah/vk-video-hotkeys",
    tags: ["Chrome Extension", "JavaScript", "Hotkeys"],
  },
];

const ProjectGallery = ({ language = "en" }: ProjectGalleryProps) => {
  const translations = {
    en: { viewProject: "View Project", visitGithub: "GitHub" },
    ru: { viewProject: "Открыть", visitGithub: "GitHub" },
  };

  const t = translations[language] || translations.en;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="bg-[#F3F3F5] rounded-[2rem] p-8 min-h-[400px] relative overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          {/* Content Container */}
          <div className="relative z-10 flex flex-col h-full max-w-[60%]">
             <h3 className="text-3xl font-bold text-black mb-3 leading-tight">
               {project.title}
             </h3>
             
             <p className="text-gray-600 mb-6 font-medium">
               {project.description}
             </p>
             
             <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white text-gray-600 rounded-lg text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

             <div className="flex gap-3 mt-auto">
                <a
                  href={project.chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors text-sm shadow-sm"
                >
                  {t.viewProject}
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
             </div>
          </div>

          {/* Image Container - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-[55%] h-[65%] translate-x-4 translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
             <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-left-top rounded-tl-2xl shadow-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
