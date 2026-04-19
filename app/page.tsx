'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { Flourish } from '@/components/Flourish';
import { Quiz, type QuizAnswers } from '@/components/Quiz';
import { RecipeCard } from '@/components/RecipeCard';
import { ProductCTA } from '@/components/ProductCTA';
import { matchRecipes } from '@/lib/match';
import type { Recipe } from '@/data/recipes';

type View = 'splash' | 'quiz' | 'results';

export default function Home() {
  const [view, setView] = useState<View>('splash');
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);
  const [matches, setMatches] = useState<Recipe[]>([]);

  const handleComplete = (a: QuizAnswers) => {
    setAnswers(a);
    setMatches(matchRecipes(a));
    setView('results');
  };

  const restart = () => {
    setView('splash');
    setAnswers(null);
    setMatches([]);
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {view === 'splash' && (
          <motion.section
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center px-6 py-16"
          >
            <div className="gold-frame bg-cream p-10 md:p-16 max-w-3xl w-full text-center">
              <Logo size="lg" />
              <Flourish className="w-48 h-5 mx-auto mt-6 mb-4" />
              <p className="font-display italic text-xl md:text-2xl text-cocoa mb-3">
                Rețete cu vanilie
              </p>
              <p className="text-xs tracking-[0.4em] uppercase font-mark text-gold-dark mb-8">
                Selecție premium · Madagascar
              </p>

              <p className="max-w-xl mx-auto text-ink/80 leading-relaxed text-lg mb-10">
                Vanilia noastră nu este doar un ingredient — este o experiență.
                Răspunde la câteva întrebări și îți arătăm <em>rețeta care ți se potrivește</em>,
                împreună cu vanilia Maero recomandată pentru ea.
              </p>

              <button onClick={() => setView('quiz')} className="btn-gold">
                Începe călătoria
              </button>

              <div className="mt-10 text-xs text-cocoa/60 tracking-wide">
                5 pași · sub 1 minut · fără înregistrare
              </div>
            </div>
          </motion.section>
        )}

        {view === 'quiz' && (
          <motion.section
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col"
          >
            <header className="pt-10 text-center">
              <Logo size="sm" />
            </header>
            <div className="flex-1 flex items-center">
              <Quiz onComplete={handleComplete} />
            </div>
          </motion.section>
        )}

        {view === 'results' && (
          <motion.section
            key="results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen py-12 px-4"
          >
            <div className="max-w-3xl mx-auto">
              <header className="text-center mb-10">
                <Logo size="sm" />
                <Flourish className="w-40 h-4 mx-auto mt-5 mb-5" />
                <h1 className="font-display text-3xl md:text-5xl text-ink mb-3">
                  {matches.length > 0 ? 'Rețetele tale' : 'Încă explorăm'}
                </h1>
                {matches.length > 0 ? (
                  <p className="italic text-cocoa/80 text-lg">
                    Selectate pentru gustul tău. Alege una și hai la treabă.
                  </p>
                ) : (
                  <p className="italic text-cocoa/80 text-lg">
                    Nu am găsit o potrivire exactă — încearcă alte preferințe.
                  </p>
                )}
              </header>

              {answers?.vanilla === 'niciuna' && (
                <div className="mb-10">
                  <p className="text-center text-cocoa italic mb-4">
                    Începe cu alegerea vaniliei potrivite:
                  </p>
                  <ProductCTA productId="bourbon" />
                </div>
              )}

              <div className="space-y-10">
                {matches.map((r, i) => (
                  <RecipeCard key={r.id} recipe={r} defaultOpen={i === 0} />
                ))}
              </div>

              <div className="text-center mt-16">
                <button onClick={restart} className="btn-outline">
                  ← Caută altă rețetă
                </button>
                <p className="mt-8 text-xs tracking-[0.3em] uppercase font-mark text-cocoa/60">
                  <a
                    href="https://www.maero.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    Vezi toată selecția pe maero.ro →
                  </a>
                </p>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="text-center py-8 text-xs tracking-[0.25em] uppercase font-mark text-cocoa/50">
        <Logo size="sm" />
        <p className="mt-3">Vanilie de Madagascar · 100% naturală</p>
      </footer>
    </main>
  );
}
