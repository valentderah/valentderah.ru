import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Github, Mail, MessageSquare, MapPin, Calendar, Code2, Briefcase } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ProjectGallery from "./ProjectGallery";

type Language = "ru" | "en";

const translations = {
  name: { ru: "Валентин Дерах", en: "Valentin Derakh" },
  title: { ru: "Кнопкодав-смузихлеб (программист)", en: "Software Developer" },
  about: { ru: "О себе", en: "About me" },
  experience: { ru: "Опыт", en: "Experience" },
  projects: { ru: "Проекты", en: "Projects" },
  skills: { ru: "Навыки", en: "Skills" },
  contacts: { ru: "Контакты", en: "Contacts" },
  viewProjects: { ru: "Смотреть проекты", en: "View projects" },
  aboutDescription: {
    ru: "Привет! Я разработчик с опытом создания веб-приложений на Python и JavaScript. Увлекаюсь созданием удобных интерфейсов и эффективных backend решений. Люблю изучать новые технологии и применять их в своих проектах.",
    en: "Hi! I'm a developer with experience in creating web applications using Python and JavaScript. I'm passionate about building user-friendly interfaces and efficient backend solutions. I love learning new technologies and applying them in my projects."
  },
  workExperience: { ru: "Опыт работы", en: "Work Experience" },
  getInTouch: { ru: "Связаться со мной", en: "Get in touch" },
  contactDescription: {
    ru: "Готов обсудить новые проекты и возможности сотрудничества",
    en: "Ready to discuss new projects and collaboration opportunities"
  }
};

const skills = ["Python", "JavaScript", "React", "Django", "Docker", "Redis", "Celery", "PostgreSQL"];

const workExperience = [
  {
    company: "Tech Startup",
    position: { ru: "Fullstack разработчик", en: "Fullstack Developer" },
    period: "2022 - 2024",
    description: {
      ru: "Разработка веб-приложений на Django и React. Оптимизация производительности и внедрение новых функций.",
      en: "Developing web applications with Django and React. Performance optimization and implementing new features."
    },
    technologies: ["Python", "Django", "React", "PostgreSQL"]
  },
  {
    company: "Digital Agency",
    position: { ru: "Frontend разработчик", en: "Frontend Developer" },
    period: "2021 - 2022",
    description: {
      ru: "Создание интерактивных пользовательских интерфейсов и интеграция с API.",
      en: "Creating interactive user interfaces and API integration."
    },
    technologies: ["JavaScript", "React", "CSS", "REST API"]
  }
];

const socialLinks = [
  { name: "GitHub", icon: <Github />, url: "https://github.com/valentderah/" },
  { name: "Telegram", icon: <MessageSquare />, url: "https://t.me/valentderah" },
  { name: "VK", icon: <Mail />, url: "https://vk.com/valentderah" }
];

const Home = () => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string) => translations[key][language];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">{t("name")}</h1>
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
                <Avatar className="w-80 h-80 border-4 border-primary shadow-lg">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=valentin"
                    alt="Valentin Derakh"
                    className="object-cover"
                  />
                </Avatar>
              </div>
              
              <div className="lg:w-2/3">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-black">
                  {t("name")}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-primary mb-8 font-medium">
                  {t("title")}
                </h2>
                
                <Card className="main-card mb-8">
                  <CardContent className="pt-6">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {t("aboutDescription")}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">
                          {language === "ru" ? "Россия" : "Russia"}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <Code2 className="w-5 h-5 text-accent" />
                        <span className="font-medium">
                          {language === "ru" ? "3+ года" : "3+ years"}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-black" />
                        <span className="font-medium">
                          {language === "ru" ? "Доступен" : "Available"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black">{t("skills")}:</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => scrollToSection("projects")}
                    className="bg-primary hover:bg-primary/90 text-white px-8"
                  >
                    {t("viewProjects")}
                  </Button>
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
                {language === "ru" 
                  ? "Мой профессиональный путь в разработке программного обеспечения"
                  : "My professional journey in software development"
                }
              </p>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
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
                            <p className="text-primary font-semibold">{job.position[language]}</p>
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
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
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
            <p className="font-medium">© 2024 {t("name")}</p>
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