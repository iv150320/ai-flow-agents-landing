import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Bot, Cpu } from "lucide-react";

const projects = [
  {
    title: "ИИ-инвестиции",
    description: "Автономные ИИ-агенты для инвестиционной аналитики, анализа рисков и портфельного управления на рынке РФ",
    href: "/ai-investment/",
    status: "available" as const,
    tags: ["MOEX", "ЦБ РФ", "Портфельный анализ"],
    icon: TrendingUp,
  },
  {
    title: "ИИ-автоматизация",
    description: "Интеллектуальная автоматизация бизнес-процессов с помощью многоагентных систем",
    href: null,
    status: "soon" as const,
    tags: ["Workflows", "N8N", "Интеграции"],
    icon: Bot,
  },
  {
    title: "ИИ-инфраструктура",
    description: "Проектирование и развёртывание ИИ-систем: от моделей до продакшена",
    href: null,
    status: "soon" as const,
    tags: ["MLOps", "Fine-tuning", "Деплой"],
    icon: Cpu,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            Проекты
          </h2>
          <p className="text-neutral-500 text-lg">
            Направления нашей работы
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {project.href ? (
                <a
                  href={project.href}
                  className="group block h-full p-8 bg-white rounded-2xl border border-neutral-200 hover:border-accent-400/40 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-accent-500 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-accent-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-500 bg-neutral-100 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Доступно
                  </div>
                </a>
              ) : (
                <div className="block h-full p-8 bg-white/60 rounded-2xl border border-neutral-200/60">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-neutral-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-400 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-400 bg-neutral-100 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    Скоро
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
