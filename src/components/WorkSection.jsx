import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WorkSection({ lang }) {
  const t = portfolioData[lang];
  const [selectedFilter, setSelectedFilter] = useState(t.filters[0]);

  // تعيين الفلتر الافتراضي عند تبديل اللغة
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects = t.projects.filter((p) => {
    if (selectedFilter === 'All' || selectedFilter === 'الكل') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="work" className="relative border-t border-white/10 bg-[#09090b] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* الترويسة وأزرار الفلترة */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              {t.workSubtitle}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t.workTitle}
            </h2>
            <p className="mt-3 max-w-xl text-base text-zinc-400">{t.workDesc}</p>
          </div>

          {/* أزرار الفلترة */}
          <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
            {t.filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                    : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة الأعمال */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.a
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-3 backdrop-blur-md transition hover:border-emerald-500/40 hover:bg-zinc-900"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-950">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-zinc-950">
                      <span>Visit Live Site</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-white group-hover:text-emerald-300 transition">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
