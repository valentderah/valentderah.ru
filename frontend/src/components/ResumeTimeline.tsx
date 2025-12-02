import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, Calendar, ChevronDown, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      position: "Python Developer / Fullstack Developer",
      period: "February 2023 — Present (2 years 11 months)",
      description:
        "Developed and implemented an internal metrics collection system (GTM analog), which accelerated product team decision-making by 30%. Implemented a mechanism for sequential document sending via Celery and Redis with notification distribution. Designed multiple document signing functionality (Avest avcmxwebp), reducing operation time from 3 minutes to 30 seconds. Initiated frontend refactoring: introduced Webpack for build optimization and migrated part of the project to React, increasing client-side performance by 40% and simplifying further development.",
      technologies: ["Python", "JS", "Django", "Docker", "Redis", "Celery", "React", "Webpack", "PostgreSQL", "Nginx"],
      url: "https://podpis.by/",
    },
    {
      id: "2",
      company: "Invento Labs",
      position: "Python Developer / Fullstack Developer",
      period: "February 2022 — February 2023 (1 year 1 month)",
      description:
        "Configured CI/CD in GitLab with Docker, reducing feature deployment time to production from 2 hours to 1. Increased test coverage from 40% to 70% by writing 80+ unit and endpoint tests (Pytest, Unittest). Developed monetization modules: tariff plans, subscriptions, limits — the foundation for commercial product use. Implemented two-factor authentication (2FA) and role-based access control model to improve security.",
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
      position: "Python Developer / Fullstack Developer",
      period: "January 2021 — February 2022 (1 year 2 months)",
      description:
        "Implemented an open API for integration with external services, attracting 1C clients. Automated report generation in Python, reducing documentation preparation time by 90%. Implemented 'multi-login' function in JavaScript, allowing users to quickly switch between accounts. Conducted a large-scale redesign of the personal cabinet and landing page, improving usability and visual components.",
      technologies: ["Python", "REST API", "JavaScript", "Django", "PostgreSQL"],
      url: "https://intechs.by/",
    },
    {
      id: "4",
      company: "Ariteta and IT Overone",
      position: "Web Programmer / IT Course Instructor",
      period: "September 2020 — January 2022 (1 year 5 months)",
      description:
        "Implemented and supported commercial projects on PHP and CMS (WordPress, Joomla), solving client tasks for launching and maintaining their web resources. Taught Python and Django, conducting lectures and practical classes. As a mentor, helped students go through the full development cycle: from idea to working prototype.",
      technologies: ["PHP", "JavaScript", "Django", "Python"],
    },
  ],
  ru: [
    {
      id: "1",
      company: "Insterra",
      position: "Python-разработчик / Fullstack-разработчик",
      period: "Февраль 2023 — настоящее время",
      description:
        "Разработал и внедрил внутреннюю систему сбора метрик (аналог GTM), что ускорило принятие решений продуктовой командой на 30%. Реализовал механизм последовательной отправки документов через Celery и Redis с рассылкой уведомлений. Спроектировал функционал множественного подписания документов (Avest avcmxwebp), сократив время операции с 3 минут до 30 секунд. Инициировал рефакторинг фронтенда: внедрил Webpack для оптимизации сборки и перевел часть проекта на React, повысив производительность клиентской части на 40% и упростив дальнейшую разработку.",
      technologies: ["Python", "JS", "Django", "Docker", "Redis", "Celery", "React", "Webpack", "PostgreSQL", "Nginx"],
      url: "https://podpis.by/",
    },
    {
      id: "2",
      company: "Invento Labs",
      position: "Python-разработчик / Fullstack-разработчик",
      period: "Февраль 2022 — Февраль 2023",
      description:
        "Настроил CI/CD в GitLab с Docker, сократив время вывода функционала в прод с 2 часов до 1. Увеличил покрытие тестами с 40% до 70%, написав 80+ unit и endpoint тестов (Pytest, Unittest). Разработал модули монетизации: тарифные планы, подписки, лимиты — основу для коммерческого использования продукта. Внедрил двухфакторную аутентификацию (2FA) и ролевую модель доступа для повышения безопасности.",
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
      position: "Python-разработчик / Fullstack-разработчик",
      period: "Январь 2021 — Февраль 2022",
      description:
        "Реализовал открытый API для интеграции с внешними сервисами, что привлекло 1С-клиентов. Автоматизировал генерацию отчетов на Python, сократив время подготовки документации на 90%. Реализовал на JavaScript функцию «мультивхода», позволив пользователям быстро переключаться между учетными записями. Провел масштабный редизайн личного кабинета и лендинга, улучшив их юзабилити и визуальную составляющую.",
      technologies: ["Python", "REST API", "JavaScript", "Django", "PostgreSQL"],
      url: "https://intechs.by/",
    },
    {
      id: "4",
      company: "Ariteta и IT Overone",
      position: "Web-программист / Преподаватель IT-курсов",
      period: "Сентябрь 2020 — Январь 2022",
      description:
        "Реализовывал и поддерживал коммерческие проекты на PHP и CMS (WordPress, Joomla), решая задачи клиентов по запуску и сопровождению их веб-ресурсов. Преподавал Python и Django, проводя лекции и практические занятия. В роли ментора помогал студентам пройти полный цикл разработки: от идеи до работающего прототипа.",
      technologies: ["PHP", "JavaScript", "Django", "Python"],
    },
  ],
};

const ResumeTimeline: React.FC<ResumeTimelineProps> = ({
  jobs,
  language = "en",
}) => {
  const [expanded, setExpanded] = useState<string | null>("1"); // First job expanded by default

  const resumeJobs = jobs || defaultJobs[language];

  const translations = {
    en: {
      title: "Resume",
      experience: "Experience",
      visitWebsite: "Company Website",
      technologies: "Technologies",
      showMore: "Show more",
      showLess: "Show less",
    },
    ru: {
      title: "Резюме",
      experience: "Опыт работы",
      visitWebsite: "Сайт компании",
      technologies: "Стек технологий",
      showMore: "Показать больше",
      showLess: "Показать меньше",
    },
  };

  const t = translations[language];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-black">{t.experience}</h2>
      
      <div className="flex flex-col gap-6">
        {resumeJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {job.position}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    {job.company}
                    {job.url && (
                        <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors ml-2"
                            title={t.visitWebsite}
                        >
                            <Globe className="w-4 h-4" />
                        </a>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 whitespace-nowrap">
                  {job.period}
                </div>
              </div>

              <div className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-[15px]">
                {job.description}
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                  <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide text-xs">
                      {t.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded text-sm border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTimeline;
