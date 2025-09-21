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
    chromeStoreUrl: "https://chromewebstore.google.com/detail/яндекс-твик-adblock-почты/gdmgaolhbllpodgbdpmgbcdnplkcijcd",
    githubUrl: "https://github.com/valentderah/yandex-mail-adblock",
    tags: ["Chrome Extension", "JavaScript", "AdBlock"],
  },
  {
    id: "2",
    title: "VK Video Hotkeys",
    description: "Chrome extension that adds hotkey support for VK video player",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    chromeStoreUrl: "https://chromewebstore.google.com/detail/горячие-клавиши-вк-видео/pgacfedlkaomiedeibedjhpmiknfkidk",
    githubUrl: "https://github.com/valentderah/vk-video-hotkeys",
    tags: ["Chrome Extension", "JavaScript", "Hotkeys"],
  },
];

const ProjectGallery = ({ language = "en" }: ProjectGalleryProps) => {
  const translations = {
    en: { viewProject: "View Project", visitGithub: "GitHub" },
    ru: { viewProject: "Открыть проект", visitGithub: "GitHub" },
  };

  const t = translations[language] || translations.en;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {projects.map((project) => (
        <Card key={project.id} className="main-card hover:shadow-xl transition-shadow">
          <div className="aspect-video w-full overflow-hidden rounded-t-lg">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90">
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
                <Button variant="outline" asChild className="border-primary text-primary">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t.visitGithub}
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGallery;