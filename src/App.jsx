import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <HeroSection lang={lang} setLang={setLang} />
      <ServicesSection lang={lang} />
      <WorkSection lang={lang} />
    </main>
  );
}
