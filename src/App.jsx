import { useState } from 'react';
import HeroSection from './components/HeroSection';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <HeroSection lang={lang} setLang={setLang} />
    </main>
  );
}