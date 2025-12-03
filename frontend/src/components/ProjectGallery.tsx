import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  chromeStoreUrl: string;
  githubUrl?: string;
  tags: string[];
}

interface ProjectGalleryProps {
  language: "en" | "ru";
}

const projectsData: Record<string, Project[]> = {
  en: [
    {
      id: "1",
      title: "Yandex Tweak",
      imageUrl: "/banners/yandex-tweak.png",
      chromeStoreUrl: "https://chromewebstore.google.com/detail/яндекс-твик-adblock-почты/gdmgaolhbllpodgbdpmgbcdnplkcijcd?authuser=0&hl=en",
      githubUrl: "https://github.com/valentderah/yandex-tweak",
      tags: ["Chrome Extension", "JavaScript", "AdBlock"],
    },
    {
      id: "2",
      title: "VK Video Hotkeys",
      imageUrl: "/banners/vk-hotkeys.png",
      chromeStoreUrl: "https://chromewebstore.google.com/detail/горячие-клавиши-вк-видео/pgacfedlkaomiedeibedjhpmiknfkidk?authuser=0&hl=en",
      githubUrl: "https://github.com/valentderah/vk-video-hotkeys",
      tags: ["Chrome Extension", "JavaScript", "Hotkeys"],
    },
  ],
  ru: [
    {
      id: "1",
      title: "Yandex Tweak",
      imageUrl: "/banners/yandex-tweak.png",
      chromeStoreUrl: "https://chromewebstore.google.com/detail/яндекс-твик-adblock-почты/gdmgaolhbllpodgbdpmgbcdnplkcijcd?authuser=0&hl=en",
      githubUrl: "https://github.com/valentderah/yandex-tweak",
      tags: ["Chrome Extension", "JavaScript", "AdBlock"],
    },
    {
      id: "2",
      title: "VK Video Hotkeys",
      imageUrl: "/banners/vk-hotkeys.png",
      chromeStoreUrl: "https://chromewebstore.google.com/detail/горячие-клавиши-вк-видео/pgacfedlkaomiedeibedjhpmiknfkidk?authuser=0&hl=en",
      githubUrl: "https://github.com/valentderah/vk-video-hotkeys",
      tags: ["Chrome Extension", "JavaScript", "Hotkeys"],
    },
  ]
};

const projectDescriptions = {
  en: {
    "1": "One tab search for Yandex. Mail without ads. Adblock for search. This extension is designed for users of Yandex servers. It allows you to avoid creating multiple tabs when searching, as well as block ads in Yandex Mail and Yandex Search.",
    "2": "Bring back the usual YouTube keyboard shortcuts in VK Video! This extension brings back the familiar YouTube keyboard shortcuts. Navigate with ease, toggle subtitles on and off, switch to theater mode, and adjust video playback speed — all using convenient hotkeys."
  },
  ru: {
    "1": "Поиск в одной вкладке для Яндекса. Почта без рекламы. Блокировка рекламы в поиске. Это расширение создано для пользователей сервисов Яндекса. Оно позволяет избежать открытия множества вкладок при поиске, а также блокирует рекламу в Яндекс Почте и Яндекс Поиске.",
    "2": "Верните привычные горячие клавиши YouTube в VK Видео! Это расширение возвращает знакомые шорткаты YouTube. Удобная навигация, включение/выключение субтитров, режим кинотеатра и регулировка скорости воспроизведения — всё это с помощью удобных горячих клавиш. Каждую клавишу можно настроить в настройках расширения. Также в интерфейсе плеера доступны дополнительные кнопки управления."
  }
};

const ProjectGallery = ({ language = "en" }: ProjectGalleryProps) => {
  const translations = {
    en: { viewProject: "View Project", visitGithub: "GitHub" },
    ru: { viewProject: "Открыть", visitGithub: "GitHub" },
  };

  const t = translations[language] || translations.en;
  const currentProjects = projectsData[language] || projectsData.en;

  return (
    <Carousel className="w-full relative" opts={{ align: "start", loop: true }}>
       <div className="absolute -top-[5rem] right-0 hidden md:flex gap-2">
        <CarouselPrevious className="static translate-y-0 bg-[#F3F3F5] hover:bg-[#EBEBEB] border-none w-12 h-12 rounded-full" />
        <CarouselNext className="static translate-y-0 bg-[#F3F3F5] hover:bg-[#EBEBEB] border-none w-12 h-12 rounded-full" />
      </div>
      
      <CarouselContent className="-ml-4">
        {currentProjects.map((project) => (
          <CarouselItem key={project.id} className="pl-4 md:basis-[90%] lg:basis-[85%]">
            <div
              className="bg-[#F3F3F5] rounded-[2.5rem] p-6 flex flex-col md:flex-row gap-8 group transition-all duration-300 h-full"
            >
              {/* Image Container - Left Side */}
              <div className="w-full md:w-[35%] shrink-0 h-[280px] md:h-auto relative overflow-hidden rounded-[2rem]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Content Container - Right Side */}
              <div className="flex flex-col justify-between py-2 flex-grow">
                <div className="mb-6">
                    {/* Title First */}
                  <h3 className="text-2xl font-bold text-black leading-tight mb-4">
                    {project.title}
                  </h3>

                    {/* Description Second */}
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {projectDescriptions[language][project.id]}
                  </p>
                </div>

                <div>
                    {/* Tags */}
                    <div className="flex flex-wrap justify-start gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-white text-gray-500 rounded-lg text-xs font-bold shadow-sm border border-transparent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <a
                          href={project.chromeStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl shadow-sm text-base transition-colors"
                        >
                          {t.viewProject}
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-14 h-14 bg-white text-gray-600 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                        )}
                    </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProjectGallery;
