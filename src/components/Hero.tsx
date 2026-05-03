import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/50 to-neutral-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-sm font-medium">
            <Zap className="w-4 h-4 text-accent-500" />
            ИИ-агенты нового поколения
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900 mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          AI Flow Agents
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Разрабатываем автономные ИИ-агенты для инвестиционного анализа,
          автоматизации процессов и принятия решений
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 mt-8 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Проекты в разработке
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <span>Наши проекты</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}
