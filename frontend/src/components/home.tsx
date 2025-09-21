import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Github, Mail, MessageSquare, Briefcase } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ProjectGallery from "./ProjectGallery";

import globalData from "@/storage/global.ts";

type Language = "ru" | "en";

const socialLinks = [
  { name: "GitHub", icon: <Github />, url: "https://github.com/valentderah/" },
  { name: "Telegram", icon: <MessageSquare />, url: "https://t.me/valentderah" },
  { name: "VK", icon: <Mail />, url: "https://vk.com/valentderah" }
];

const Home = () => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string) => globalData[key][language];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{t("name")}</h1>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex space-x-6">
              {["about", "experience", "projects", "contacts"].map((section) => (
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

      {/* Hero Section */}
      <section id="about" className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 flex justify-center">
                <Avatar className="w-80 h-80 shadow-lg">
                  <img
                    src="/face.jpg"
                    className="object-cover"
                  />
                </Avatar>
              </div>

              <div className="lg:w-2/3">
                <h1 className="text-5xl lg:text-6xl font-bold text-black">
                  {t("name")}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-secondary mb-8 font-medium">
                  {t("title")}
                </h2>

                {/*<p className="text-lg text-gray-700 leading-relaxed mb-2">*/}
                {/*  {t("hi")}*/}
                {/*</p>*/}

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t("aboutDescription")}
                </p>

                {/*<div className="">*/}
                {/*  <h3 className="text-xl font-bold mb-4 text-black">{t("skills")}:</h3>*/}
                {/*  <div className="flex flex-wrap gap-3">*/}
                {/*    {globalData.skillsList.map((skill) => (*/}
                {/*      <span*/}
                {/*        key={skill}*/}
                {/*        className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium"*/}
                {/*      >*/}
                {/*        {skill}*/}
                {/*      </span>*/}
                {/*    ))}*/}
                {/*  </div>*/}
                {/*</div>*/}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                      variant="outline"
                      size="lg"
                      onClick={() => scrollToSection("contacts")}
                      className="border-primary text-primary hover:bg-primary hover:text-white px-8"
                  >
                    {t("getInTouch")}
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">
                {t("workExperience")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("workExperienceDescription")}
              </p>
            </div>

            <div className="space-y-6">
              {/*<ResumeTimeline>*/}
              {/*</ResumeTimeline>*/}
              {globalData.workExperienceList.map((job, index) => (
                <Card key={index} className="main-card hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary rounded-lg">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-black">{job.company}</h3>
                            <p className="text-secondary font-semibold">{job.position[language]}</p>
                          </div>
                        </div>
                        <p className="text-gray-500 font-medium">{job.period}</p>
                      </div>

                      <div className="lg:w-2/3">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {job.description[language]}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                              // <Badge></Badge>
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent text-black rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">
              {t("projects")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ru"
                ? "Коллекция моих личных проектов, включая расширения для Chrome и веб-приложения"
                : "Collection of my personal projects, including Chrome extensions and web applications"
              }
            </p>
          </div>
          <ProjectGallery language={language} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">
                {t("contacts")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("contactDescription")}
              </p>
            </div>
            
            <Card className="main-card">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="p-4 rounded-full bg-primary text-white group-hover:bg-accent transition-colors">
                        {link.icon}
                      </div>
                      <span className="font-semibold text-lg text-black">{link.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-medium">{t("siteWasVibecoded")}</p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;