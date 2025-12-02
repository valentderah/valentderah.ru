import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  Github,
  Mail,
  MessageSquare,
  Youtube,
  ChevronDown,
  Building2,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ProjectGallery from "./ProjectGallery";
import ResumeTimeline from "./ResumeTimeline";

import globalData from "@/storage/global.ts";

type Language = "ru" | "en";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/valentderah/",
  },
  {
    name: "Telegram",
    icon: <MessageSquare className="w-5 h-5" />,
    url: "https://t.me/s/valentderah",
  },
  {
    name: "VK",
    icon: <Mail className="w-5 h-5" />,
    url: "https://vk.com/valentderah",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    url: "https://www.youtube.com/@valentderah",
  },
];

const Home = () => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string) => globalData[key][language];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] font-sans text-black">
      {/* Header - Clean & Minimal */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              В
            </div>
            <h1 className="text-xl font-bold tracking-tight">Валентин Дерах</h1>
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex space-x-8">
              {["experience", "projects", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-[15px] font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {t(section)}
                </button>
              ))}
            </nav>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </header>

      {/* Hero Section - Card Based */}
      <section id="about" className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <Avatar className="w-48 h-48 rounded-full shadow-md border-4 border-white">
                  <img
                    src="/face.jpg"
                    className="object-cover"
                    alt="Valentin Derah"
                  />
                </Avatar>
              </div>

              <div className="flex-grow text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-3 tracking-tight">
                  {t("name")}
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-500 mb-6 font-medium">
                  {t("title")}
                </h2>

                <p className="text-lg text-gray-800 leading-relaxed mb-8 max-w-3xl">
                  {t("aboutDescription")}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                  {globalData.skillsList.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-gray-400 text-sm font-medium">
                    + more
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contacts")}
                    className="bg-[#FFCC00] hover:bg-[#FFCC00]/90 text-black font-semibold px-8 rounded-xl"
                  >
                    {t("getInTouch")}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection("experience")}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 rounded-xl"
                  >
                    {t("experience")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <ResumeTimeline language={language} />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-4 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-black">
            {t("education")}
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <Building2 className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-lg text-gray-900 font-medium">
                  {language === "ru"
                    ? "Белорусский национальный технический университет"
                    : "Belarusian National Technical University"}
                </p>
                <p className="text-gray-500 mt-1">
                  {language === "ru"
                    ? "Машиностроительный факультет (МСФ), Мехатроника"
                    : "Mechanical Engineering Faculty, Mechatronics"}
                </p>
                <p className="text-gray-400 text-sm mt-1">2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">
              {t("projects")}
            </h2>
            <p className="text-lg text-gray-500">
              {language === "ru"
                ? "Личные проекты и Open Source"
                : "Personal Projects & Open Source"}
            </p>
          </div>
          <ProjectGallery language={language} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">
              {t("contacts")}
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-600 flex items-center justify-center group-hover:bg-[#FFCC00] group-hover:text-black transition-all duration-300">
                      {link.icon}
                    </div>
                    <span className="font-medium text-gray-900">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">{t("siteWasVibecoded")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
