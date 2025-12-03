import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  Github,
  Mail,
  MessageSquare,
  Youtube,
  ChevronDown,
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
  const [isScrolled, setIsScrolled] = useState(false);

  const t = (key: string) => globalData[key][language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Floating Island Header - Appears on Scroll */}
      <div className="flex justify-center">
        <header
          className={`fixed top-4 z-50 transition-all duration-300 ${
            isScrolled
              ? "rounded-xl bg-white/90 backdrop-blur-md shadow-lg px-6 py-3 border border-gray-100 max-w-6xl w-full"
              : "rounded-none bg-transparent backdrop-blur-none shadow-none px-6 py-3 border-none w-full max-w-6xl"
          }`}
        >
          <div className={`flex items-center justify-between ${isScrolled ? "" : "max-w-6xl mx-auto"}`}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <span className="text-lg font-bold tracking-tight">{t("name")}</span>
            </div>

            <div className="flex items-center gap-6">
              <nav className="hidden md:flex space-x-6">
                {["experience", "projects", "contacts"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    {t(section)}
                  </button>
                ))}
              </nav>
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section - Redesigned as Blue Card */}
      <section id="about" className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#202020] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl min-h-[500px] flex flex-col justify-center">
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
              {/* Left Content */}
              <div className="flex-grow text-left w-full md:w-3/5">
                <h1 className="text-5xl font-bold mb-2 tracking-tight">
                  {t("name")}
                </h1>
                <h2 className="text-2xl text-gray-300 mb-6 font-medium">
                  {t("title")}
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {t("aboutDescription")}
                </p>

                <div className="flex flex-wrap justify-start gap-2 mb-8">
                  {globalData.skillsList.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/10 text-white rounded-lg text-xs font-medium border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-gray-400 text-xs font-medium">
                    {t("more")}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contacts")}
                    className="bg-primary hover:bg-primary/90 text-white font-bold px-8 rounded-xl shadow-sm"
                  >
                    {t("getInTouch")}
                  </Button>
                </div>
              </div>

              {/* Right Content - Avatar & Decoration */}
              <div className="w-full md:w-2/5 relative flex justify-center md:justify-end mt-8 md:mt-0 self-start">
                {/* Avatar */}
                <div className="relative z-10">
                  <Avatar className="w-64 h-64 rounded-[2rem] shadow-2xl border-8 border-white/10">
                    <img
                      src="/face.jpg"
                      className="object-cover"
                      alt="Valiantsin Dzerakh"
                    />
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
          </div>
        </div>
      </section>

      {/* Experience Section (White) */}
      <section id="experience" className="py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          <ResumeTimeline language={language} />
        </div>
      </section>

      {/* Projects Section (White) */}
      <section id="projects" className="py-20 bg-white w-full overflow-x-clip">
        <div className="container mx-auto px-4 max-w-6xl">
          <ProjectGallery language={language} />
        </div>
      </section>

      {/* Contact Section (Dark Card) */}
      <section id="contacts" className="py-24 w-full bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#202020] rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
              {/* Left Side */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {t("contacts")}
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-sm">
                  {t("contactDescription")}
                </p>
                {/* Decoration Image or Graphic could go here */}
                <div className="hidden md:block text-8xl mt-8">👋</div>
              </div>

              {/* Right Side - Content/Links */}
              <div className="flex-1 w-full">
                <div className="grid gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-[#2a2a2a] hover:bg-[#333] rounded-xl transition-all group border border-white/5 hover:border-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors">
                          {link.icon}
                        </div>
                        <span className="font-medium text-lg">{link.name}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 -rotate-90 text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                  ))}

                  {/* Big Blue CTA Button mimicking the form button */}
                  <Button
                    size="lg"
                    className="w-full py-8 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-xl mt-4 shadow-lg shadow-primary/25"
                    onClick={() => window.open("https://t.me/vderah", "_blank")}
                  >
                    {language === "ru" ? "Написать мне" : "Write to me"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative blurry blob similar to the purple blob in the image */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white w-full">
        <div className="container mx-auto px-6 text-center md:text-left max-w-6xl">
          <p className="text-gray-400 text-sm">{t("siteWasVibecoded")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
