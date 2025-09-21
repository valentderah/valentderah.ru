import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Building2, Calendar, ChevronDown } from "lucide-react";
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
      position: "Software Engineer (Full-stack)",
      period: "February 2023 - Present",
      description:
        'Developed application metrics (internal Google Tag Manager analog for statistics collection), generation of printed "About Document" representation, multiple document signing using Avest avcmxwebp. Refactoring: introduced webpack for the entire frontend application and began integration with React, gradual transition from ES5 to modern standard using Babel. Participated in the development of document chain sending capability, MECP support implementation, and SMDO integration.',
      technologies: ["Python", "JS", "Django", "Redis", "Celery", "React"],
      url: "https://podpis.by/",
    },
    {
      id: "2",
      company: "Invento Labs",
      position: "Software Engineer (Full-stack)",
      period: "February 2022 - February 2023",
      description:
        'Worked on an EDO project. Developed functionalities: tariff plans ("subscriptions" and their limits), folders (ability to organize documents), tags (ability to mark documents). Participated in CI/CD development and GB deployment, covering previously uncovered functionalities with tests, resolving db migration conflicts.',
      technologies: [
        "Python",
        "JS",
        "Django",
        "Docker",
        "Celery",
        "Redis",
        "jQuery",
      ],
      url: "https://invento-labs.by/",
    },
    {
      id: "3",
      company: "IT OVERONE",
      position: "IT Course Teacher",
      period: "November 2021 - April 2022",
      description:
        "Lectured on Python and Django. Explained unknown concepts, checked homework assignments and helped students start their first projects.",
      technologies: ["Python", "Django"],
      url: "https://overone.by",
    },
    {
      id: "4",
      company: "Innotech Solutions",
      position: "Software Engineer (Full-stack)",
      period: "January 2021 - February 2022",
      description:
        "Worked on an EDO project. Implemented functionalities: 2FA (two-factor authentication and manager account access for other users), multi-login (quick switching between accounts), generation of document approval reports. Participated in: writing API tests, updating libraries, large-scale redesign of application personal accounts and landing page.",
      technologies: ["Python", "JS", "Django", "jQuery"],
      url: "https://intechs.by/",
    },
    {
      id: "5",
      company: "Ariteta",
      position: "Web Developer",
      period: "September 2020 - January 2021",
      description:
        "Worked with various projects on WordPress, Joomla, OpenCart. The work involved implementing basic functionalities: authorization, registration, and purchasing. Participated in fixing bugs and internal website information.",
      technologies: ["PHP", "JS"],
      url: "https://ariteta.com/",
    },
  ],
  ru: [
    {
      id: "1",
      company: "Insterra",
      position: "Инженер-программист (full-stack)",
      period: "Февраль 2023 — настоящее время",
      description:
        "Проект-сервис ЭДО. Разработал: метрики приложения (внутренний аналог Google Tag Manager для сбора статистики), генерацию печатного представления «О документе», множественное подписание документов средствами Avest avcmxwebp. Рефакторинг: введение webpack на весь фронтенд приложения и начало интеграции с React, постепенный переход от ES5 к современному стандарту с помощью Babel. Участвовал в разработке возможности отправки документов по цепочке (по очереди), внедрению поддержки МЭЦП, интеграции с СМДО.",
      technologies: ["Python", "JS", "Django", "Redis", "Celery", "React"],
      url: "https://podpis.by/",
    },
    {
      id: "2",
      company: "Invento Labs",
      position: "Инженер-программист (full-stack)",
      period: "Февраль 2022 — Февраль 2023",
      description:
        "Работал на проекте по ЭДО. Разработал функциональности: тарифные планы («подписки» и их лимиты), папки (возможность раскладывать документы), теги (возможность пометок документов). Участвовал в разработке CI/CD и GB deploymentе, покрытии тестами ранее непокрытых функциональностей, улаживании конфликтов миграций db.",
      technologies: [
        "Python",
        "JS",
        "Django",
        "Docker",
        "Celery",
        "Redis",
        "jQuery",
      ],
      url: "https://invento-labs.by/",
    },
    {
      id: "3",
      company: "IT OVERONE",
      position: "Преподаватель IT курсов",
      period: "Ноябрь 2021 — Апрель 2022",
      description:
        "Читал лекции по Python и Django. Пояснял неизвестные моменты, проверял домашние задания и помогал ребятам начать их первые проекты.",
      technologies: ["Python", "Django"],
      url: "https://overone.by",
    },
    {
      id: "4",
      company: "Innotech Solutions",
      position: "Инженер-программист (full-stack)",
      period: "Январь 2021 — Февраль 2022",
      description:
        "Работал на проекте по ЭДО. Реализовал функциональности: 2FA (двухфакторная аутентификация и менеджерский аккаунт доступа других пользователей), мультивхода (быстрый переход между аккаунтами), генерация отчетов согласований по документам. Участвовал в: написании API тестов, обновлении библиотек, масштабном редизайне личных кабинетов приложения и лендинга.",
      technologies: ["Python", "JS", "Django", "jQuery"],
      url: "https://intechs.by/",
    },
    {
      id: "5",
      company: "Ariteta",
      position: "Web-программист",
      period: "Сентябрь 2020 — Январь 2021",
      description:
        "Работал с разными проектами на WordPress, Joomla, OpenCart. Работа заключалась во внедрении базовых функциональностей: авторизации, регистрации и покупки. Участвовал в исправлении багов и внутренней информации сайтов.",
      technologies: ["PHP", "JS"],
      url: "https://ariteta.com/",
    },
  ],
};

const ResumeTimeline: React.FC<ResumeTimelineProps> = ({
  jobs,
  language = "en",
}) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const resumeJobs = jobs || defaultJobs[language];

  const allTechnologies = Array.from(
    new Set(resumeJobs.flatMap((job) => job.technologies)),
  ).sort();

  const filteredJobs = filter
    ? resumeJobs.filter((job) => job.technologies.includes(filter))
    : resumeJobs;

  const translations = {
    en: {
      title: "Resume",
      allTech: "All Technologies",
      experience: "Experience",
      visitWebsite: "Visit Website",
      technologies: "Technologies",
      showMore: "Show more",
      showLess: "Show less",
    },
    ru: {
      title: "Резюме",
      allTech: "Все технологии",
      experience: "Опыт работы",
      visitWebsite: "Посетить сайт",
      technologies: "Технологии",
      showMore: "Показать больше",
      showLess: "Показать меньше",
    },
  };

  const t = translations[language];

  const handleToggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-background p-6 rounded-lg mx-auto w-[1280px] h-[832px]">
      <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
          <TabsTrigger
            value="all"
            onClick={() => setFilter(null)}
            className="px-4 py-2"
          >
            {t.allTech}
          </TabsTrigger>
          {allTechnologies.map((tech) => (
            <TabsTrigger
              key={tech}
              value={tech}
              onClick={() => setFilter(tech)}
              className="px-4 py-2"
            >
              {tech}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">{t.experience}</h3>
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={job.id} className="border-0">
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="text-lg font-semibold">
                                {job.position}
                              </h4>
                              <div className="flex items-center text-muted-foreground mt-1">
                                <Building2 className="h-4 w-4 mr-1" />
                                <span>{job.company}</span>
                                {job.url && (
                                  <a
                                    href={job.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 text-primary hover:underline"
                                  >
                                    {t.visitWebsite}
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{job.period}</span>
                            </div>
                          </div>

                          <AccordionTrigger className="py-2 px-0">
                            <span className="text-sm text-primary">
                              {expanded === job.id ? t.showLess : t.showMore}
                            </span>
                          </AccordionTrigger>

                          <AccordionContent>
                            <p className="text-muted-foreground mb-4">
                              {job.description}
                            </p>
                            <div>
                              <h5 className="text-sm font-medium mb-2">
                                {t.technologies}:
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech) => (
                                  <Badge key={tech} variant="outline">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {allTechnologies.map((tech) => (
          <TabsContent key={tech} value={tech} className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              {tech} {t.experience}
            </h3>
            <div className="space-y-6">
              {resumeJobs
                .filter((job) => job.technologies.includes(tech))
                .map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Accordion type="single" collapsible>
                          <AccordionItem value={job.id} className="border-0">
                            <div className="p-6">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="text-lg font-semibold">
                                    {job.position}
                                  </h4>
                                  <div className="flex items-center text-muted-foreground mt-1">
                                    <Building2 className="h-4 w-4 mr-1" />
                                    <span>{job.company}</span>
                                    {job.url && (
                                      <a
                                        href={job.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 text-primary hover:underline"
                                      >
                                        {t.visitWebsite}
                                      </a>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span>{job.period}</span>
                                </div>
                              </div>

                              <AccordionTrigger className="py-2 px-0">
                                <span className="text-sm text-primary">
                                  {expanded === job.id
                                    ? t.showLess
                                    : t.showMore}
                                </span>
                              </AccordionTrigger>

                              <AccordionContent>
                                <p className="text-muted-foreground mb-4">
                                  {job.description}
                                </p>
                                <div>
                                  <h5 className="text-sm font-medium mb-2">
                                    {t.technologies}:
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech) => (
                                      <Badge key={tech} variant="outline">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </AccordionContent>
                            </div>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ResumeTimeline;
