import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ServicesSection({ lang }) {
  const t = portfolioData[lang];
  const [activeTab, setActiveTab] = useState(0);
  const currentService = t.servicesList[activeTab];

  return (
    <section id="services" className="relative border-t border-white/10 bg-[#09090b] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {العنوان والترويسة}
        <div className="mb-16 max-w-2xl">
          <span className="inline-block font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            {t.servicesSubtitle}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.servicesTitle}
          </h2>
          <p className="mt-4 text-base text-zinc-400">{t.servicesDesc}</p>
        </div>

        {/* التخطيط التفاعلي للخدمات */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* أزرار الخدمات الرقمية */}
          <div className="space-y-3 lg:col-span-5">
            {t.servicesList.map((service, idx) => (
              <button
                key={service.num}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-start flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 ${
                  activeTab === idx
                    ? 'border-emerald-500/50 bg-emerald-500/10 text-white shadow-lg shadow-emerald-500/5'
                    : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:bg-white/[0.04] hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs font-bold ${
                      activeTab === idx ? 'text-emerald-400' : 'text-zinc-500'
                    }`}
                  >
                    {service.num}
                  </span>
                  <span className="font-semibold">{service.title}</span>
                </div>
                <ArrowRight
                  className={`h-4 w-4 transition-transform ${
                    activeTab === idx ? 'translate-x-1 text-emerald-400' : 'opacity-40'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* تفاصيل الخدمة النشطة */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-3xl border border-white/15 bg-zinc-900/80 p-8 backdrop-blur-md sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    SERVICE {currentService.num}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {currentService.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-zinc-300">
                    {currentService.desc}
                  </p>

                  <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                    <h4 className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                      Deliverables & Features:
                    </h4>
                    <ul className="space-y-2.5">
                      {currentService.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">Customized scope per project</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold text-zinc-950 transition hover:bg-emerald-400"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
