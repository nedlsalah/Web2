import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Globe, MapPin, Sparkles } from 'lucide-react';
import { heroContent } from '../data/heroContent';

export default function HeroSection({ lang, setLang }) {
  const t = heroContent[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className="relative overflow-hidden bg-[#09090b]">
      {/* إضاءة خلفية متدرجة */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 -right-32 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* القائمة العلوية الزجاجية */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-xl font-extrabold tracking-tight text-white">
            NEDL<span className="text-emerald-400">SALAH</span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {t.nav.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                <span className="font-mono text-xs text-emerald-400/80 group-hover:text-emerald-400">
                  {item.num}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-emerald-400/50 hover:bg-white/10"
            >
              <Globe className="h-3.5 w-3.5 text-emerald-400" />
              <span>{t.toggleLabel}</span>
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold text-zinc-950 transition hover:bg-emerald-400 sm:inline-flex"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      {/* قسم الواجهة الرئيسي */}
      <section id="hero" className="relative mx-auto max-w-7xl px-6 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* العمود النصي */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {t.badge}
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                {t.location}
              </span>
            </div>

            <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.headlineTop}{' '}
              <span className="mt-1 block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {t.headlineAccent}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/10"
              >
                <span>{t.ctaSecondary}</span>
              </a>
            </div>

            {/* شريط الإحصائيات */}
            <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              {t.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <dd className="text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-zinc-400">
                    {stat.label}
                  </dt>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* عمود الصورة الشخصية */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-teal-500/10 to-cyan-500/30 blur-xl"
              />
              <figure className="relative overflow-hidden rounded-3xl border border-white/15 bg-zinc-900/80 p-2 shadow-2xl backdrop-blur-md">
                <picture>
                  <source
                    sizes="(min-width: 1024px) 36vw, 90vw"
                    srcSet="./img/me-640.webp 640w, ./img/me-1100.webp 1100w"
                    type="image/webp"
                  />
                  <img
                    src="./img/me.jpg"
                    alt="NEDLSALAH — Digital Marketing Specialist"
                    width={1613}
                    height={1613}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </picture>

                <figcaption className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-xs">
                  <span className="font-bold tracking-wide text-white">NEDLSALAH</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    Strategy · Design · Code
                  </span>
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </section>

      {/* الشريط المتحرك اللانهائي */}
      <div className="border-y border-white/10 bg-white/[0.02] py-4">
        <div className="animate-marquee flex items-center gap-8">
          {[...t.marquee, ...t.marquee].map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-sm font-semibold tracking-wide text-zinc-300">
                {item}
              </span>
              <span className="text-emerald-400">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}