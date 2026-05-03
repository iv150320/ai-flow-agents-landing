import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Bot, Cpu, Workflow } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    direction: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-8 bg-neutral-50/60 relative">
      <div className="absolute inset-0 dot-pattern" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Контакты</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Расскажите о вашей задаче
          </h2>
          <p className="text-neutral-500 mt-5 text-lg">
            Опишите проект — мы подготовим предложение с оценкой подхода и сроков
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 bg-white rounded-2xl border border-neutral-100">
              <h4 className="text-sm font-bold text-neutral-900 mb-5">С чем мы можем помочь</h4>
              <div className="space-y-4">
                {[
                  {
                    icon: <Bot className="w-5 h-5 text-accent-500" />,
                    title: 'ИИ-агенты',
                    desc: 'Автономные агенты для аналитики, исследований и автоматизации',
                  },
                  {
                    icon: <Workflow className="w-5 h-5 text-emerald-500" />,
                    title: 'Автоматизация процессов',
                    desc: 'Интеллектуальные workflow, интеграции, оркестрация задач',
                  },
                  {
                    icon: <Cpu className="w-5 h-5 text-amber-500" />,
                    title: 'ИИ-инфраструктура',
                    desc: 'Проектирование, MLOps, деплой и масштабирование моделей',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-10 h-10 bg-white border border-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-800">{item.title}</div>
                      <div className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-accent-50/60 rounded-2xl border border-accent-100">
              <h4 className="text-sm font-bold text-neutral-900 mb-2">Как это работает</h4>
              <div className="space-y-3 mt-4">
                {[
                  'Вы описываете задачу в форме',
                  'Мы изучаем и готовим предложение',
                  'Проводим вводный звонок',
                  'Начинаем с PoC на ваших данных',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-accent-700">{i + 1}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">Заявка отправлена!</h3>
                  <p className="text-neutral-500 mt-2 max-w-sm mx-auto">
                    Спасибо за интерес. Мы изучим вашу задачу и свяжемся с вами.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Имя *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300/40 focus:border-neutral-400 transition-all"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300/40 focus:border-neutral-400 transition-all"
                        placeholder="email@company.ru"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Компания</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300/40 focus:border-neutral-400 transition-all"
                        placeholder="Название компании"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Направление</label>
                      <select
                        value={formData.direction}
                        onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300/40 focus:border-neutral-400 transition-all text-neutral-600"
                      >
                        <option value="">Выберите направление</option>
                        <option value="agents">ИИ-агенты для аналитики</option>
                        <option value="automation">Автоматизация процессов</option>
                        <option value="infrastructure">ИИ-инфраструктура</option>
                        <option value="investment">ИИ-инвестиции</option>
                        <option value="consulting">Консалтинг / аудит</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Опишите задачу *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300/40 focus:border-neutral-400 transition-all resize-none"
                      placeholder="Расскажите о вашем проекте, текущих процессах и задачах, которые хотите решить..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Оставить заявку
                  </button>

                  <p className="text-xs text-neutral-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}
