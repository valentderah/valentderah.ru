import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, ArrowUpRight } from "lucide-react";

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  url?: string;
}

interface ResumeTimelineProps {
  jobs?: Job[];
  language?: "en" | "ru";
}

const defaultJobs: Record<string, Job[]> = {
  en: [
    {
      id: "1",
      company: "Insterra",
      position: "Fullstack Developer",
      period: "February 2023 — Present",
      description:
        "• Developed and implemented an internal metrics collection system (GTM analog), which accelerated product team decision-making by 30%.\n• Implemented a mechanism for sequential document sending via Celery and Redis with notification distribution.\n• Designed multiple document signing functionality, reducing operation time from 3 minutes to 30 seconds.\n• Initiated frontend refactoring: introduced Webpack for build optimization and migrated part of the project to React, increasing client-side performance by 40% and simplifying further development.",
      technologies: ["Python", "JS", "Django", "Docker", "Redis", "Celery", "React", "Webpack", "PostgreSQL", "Nginx"],
      url: "https://podpis.by/",
    },
    {
      id: "2",
      company: "Invento Labs",
      position: "Fullstack Developer",
      period: "February 2022 — February 2023",
      description:
        "• Configured CI/CD in GitLab with Docker, reducing feature deployment time to production from 2 hours to 1.\n• Increased test coverage from 40% to 70% by writing 80+ unit and endpoint tests (Pytest, Unittest).\n• Developed monetization modules: tariff plans, subscriptions, limits — the foundation for commercial product use.\n• Implemented two-factor authentication (2FA) and role-based access control model to improve security.",
      technologies: [
        "Python",
        "Django",
        "Docker",
        "Celery",
        "Redis",
        "Pytest",
        "jQuery",
        "PostgreSQL",
        "MongoDB",
        "JavaScript",
      ],
      url: "https://invento-labs.by/",
    },
    {
      id: "3",
      company: "Innotech Solutions",
      position: "Fullstack Developer",
      period: "January 2021 — February 2022",
      description:
        "• Implemented an open API for integration with external services, attracting 1C clients.\n• Automated report generation in Python, reducing documentation preparation time by 90%.\n• Implemented 'multi-login' function in JavaScript, allowing users to quickly switch between accounts.\n• Conducted a large-scale redesign of the personal cabinet and landing page, improving usability and visual components.",
      technologies: ["Python", "REST API", "JavaScript", "Django", "PostgreSQL"],
      url: "https://intechs.by/",
    },
    {
      id: "4",
      company: "Ariteta and IT Overone",
      position: "Web Programmer / IT Course Instructor",
      period: "September 2020 — January 2022",
      description:
        "• Implemented and supported commercial projects on PHP and CMS (WordPress, Joomla), solving client tasks for launching and maintaining their web resources.\n• Taught Python and Django, conducting lectures and practical classes.\n• As a mentor, helped students go through the full development cycle: from idea to working prototype.",
      technologies: ["PHP", "JavaScript", "Django", "Python"],
    },
  ],
  ru: [
    {
      id: "1",
      company: "Insterra",
      position: "Fullstack-разработчик",
      period: "Февраль 2023 — настоящее время",
      description:
        "• Разработал и внедрил внутреннюю систему сбора метрик (аналог GTM), что ускорило принятие решений на 30%.\n• Реализовал механизм последовательной отправки документов через Celery и Redis с рассылкой уведомлений.\n• Спроектировал функционал множественного подписания документов, сократив время операции с 3 минут до 30 секунд.\n• Инициировал рефакторинг фронтенда: внедрил Webpack для оптимизации сборки и перевел часть проекта на React, повысив производительность клиентской части на 40% и упростив дальнейшую разработку.",
      technologies: ["Python", "JS", "Django", "Docker", "Redis", "Celery", "React", "Webpack", "PostgreSQL", "Nginx"],
      url: "https://podpis.by/",
    },
    {
      id: "2",
      company: "Invento Labs",
      position: "Fullstack-разработчик",
      period: "Февраль 2022 — Февраль 2023",
      description:
        "• Настроил CI/CD в GitLab с Docker, сократив время вывода функционала в прод с 2 часов до 1.\n• Увеличил покрытие тестами с 40% до 70%, написав 80+ unit и endpoint тестов (Pytest, Unittest).\n• Разработал модули монетизации: тарифные планы, подписки, лимиты — основу для коммерческого использования продукта.\n• Внедрил двухфакторную аутентификацию (2FA) и ролевую модель доступа для повышения безопасности.",
      technologies: [
        "Python",
        "Django",
        "Docker",
        "Celery",
        "Redis",
        "Pytest",
        "jQuery",
        "PostgreSQL",
        "MongoDB",
        "JavaScript",
      ],
      url: "https://invento-labs.by/",
    },
    {
      id: "3",
      company: "Innotech Solutions",
      position: "Fullstack-разработчик",
      period: "Январь 2021 — Февраль 2022",
      description:
        "• Реализовал открытый API для интеграции с внешними сервисами, что привлекло 1С-клиентов.\n• Автоматизировал генерацию отчетов на Python, сократив время подготовки документации на 90%.\n• Реализовал на JavaScript функцию «мультивхода», позволив пользователям быстро переключаться между учетными записями.\n• Провел масштабный редизайн личного кабинета и лендинга, улучшив их юзабилити и визуальную составляющую.",
      technologies: ["Python", "REST API", "JavaScript", "Django", "PostgreSQL"],
      url: "https://intechs.by/",
    },
    {
      id: "4",
      company: "Ariteta и IT Overone",
      position: "Web-программист / Преподаватель IT-курсов",
      period: "Сентябрь 2020 — Январь 2022",
      description:
        "• Реализовывал и поддерживал коммерческие проекты на PHP и CMS (WordPress, Joomla), решая задачи клиентов по запуску и сопровождению их веб-ресурсов.\n• Преподавал Python и Django, проводя лекции и практические занятия.\n• В роли ментора помогал студентам пройти полный цикл разработки: от идеи до работающего прототипа.",
      technologies: ["PHP", "JavaScript", "Django", "Python"],
    },
  ],
};

const ResumeTimeline: React.FC<ResumeTimelineProps> = ({
  jobs,
  language = "en",
}) => {
  const resumeJobs = jobs || defaultJobs[language];

  const translations = {
    en: {
      title: "Resume",
      experience: "Experience",
      visitWebsite: "Company Website",
      technologies: "Technologies",
    },
    ru: {
      title: "Резюме",
      experience: "Опыт работы",
      visitWebsite: "Сайт компании",
      technologies: "Стек технологий",
    },
  };

  const t = translations[language];

  return (
    <div className="w-full">
      <div className="bg-[#F3F3F5] rounded-[2.5rem] p-8">
        <h2 className="text-4xl font-bold mb-8 text-black text-left">{t.experience}</h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {resumeJobs.map((job) => (
            <AccordionItem 
              key={job.id} 
              value={job.id} 
              className="bg-white rounded-2xl px-6 border-none"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4 text-left pr-8">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.position}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 font-medium mt-1">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                      {job.url && (
                          <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors ml-1"
                              title={t.visitWebsite}
                              onClick={(e) => e.stopPropagation()}
                          >
                              <ArrowUpRight className="w-4 h-4" />
                          </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-gray-500 font-medium whitespace-nowrap text-sm md:text-base">
                    {job.period}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2 pb-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[16px] mb-6">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-[#F3F3F5] text-gray-600 rounded-lg text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ResumeTimeline;
