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
    title: "Yandex Mail Adblock",
    description: "Chrome extension that blocks ads in Yandex Mail service",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    chromeStoreUrl: "https://chromewebstore.google.com/detail/яндекс-твик-adblock-почты/gdmgaolhbllpodgbdpmgbcdnplkcijcd?authuser=0&hl=en",
    githubUrl: "https://github.com/valentderah/yandex-mail-adblock",
    tags: ["Chrome Extension", "JavaScript", "AdBlock"],
  },
  {
    id: "2",
    title: "VK Video Hotkeys",
    description: "Chrome extension that adds hotkey support for VK video player",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
          <div className="h-48 w-full overflow-hidden bg-gray-100 relative group">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed flex-grow">
                {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3 mt-auto">
              <Button asChild className="bg-[#FFCC00] hover:bg-[#FFCC00]/90 text-black font-semibold flex-1 rounded-xl shadow-sm">
                <a
                  href={project.chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t.viewProject}
                </a>
              </Button>
              {project.githubUrl && (
                <Button variant="outline" asChild className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
