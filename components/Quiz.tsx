'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type {
  Category,
  VanillaType,
  Difficulty,
  TimeRange,
  Occasion,
} from '@/data/recipes';
import { Flourish } from './Flourish';

export type QuizAnswers = {
  category: Category;
  vanilla: VanillaType | 'niciuna';
  difficulty: Difficulty | 'oricare';
  time: TimeRange | 'oricare';
  occasion: Occasion;
};

type Step = {
  key: keyof QuizAnswers;
  question: string;
  subtitle?: string;
  options: { value: string; label: string; note?: string }[];
};

const steps: Step[] = [
  {
    key: 'category',
    question: 'Ce ai vrea să prepari?',
    subtitle: 'Alege direcția — restul îți arătăm noi.',
    options: [
      { value: 'desert', label: 'Desert', note: 'Creme, torturi, înghețate' },
      { value: 'bautura', label: 'Băutură', note: 'Calde sau răcoritoare' },
      { value: 'sos', label: 'Sos dulce', note: 'Pentru fructe, clătite, pandișpan' },
      { value: 'principal', label: 'Fel principal', note: 'Arome subtile de vanilie în gastronomie' },
    ],
  },
  {
    key: 'vanilla',
    question: 'Ce vanilie Maero ai în bucătărie?',
    subtitle: 'Dacă nu ai încă, îți arătăm unde se găsește.',
    options: [
      { value: 'pastai', label: 'Păstăi întregi', note: 'Bourbon sau Imperială — aroma profundă' },
      { value: 'pudra', label: 'Pudră Gourmet', note: 'Se dizolvă instant, 100% naturală' },
      { value: 'oricare', label: 'Am ambele', note: 'Alege libertatea' },
      { value: 'niciuna', label: 'Nu am încă', note: 'Îți recomandăm ce se potrivește rețetei' },
    ],
  },
  {
    key: 'difficulty',
    question: 'Ce nivel de dificultate cauți?',
    options: [
      { value: 'usor', label: 'Ușor', note: 'Pași simpli, rezultat sigur' },
      { value: 'mediu', label: 'Mediu', note: 'Un pic de tehnică, multă satisfacție' },
      { value: 'avansat', label: 'Avansat', note: 'Pentru zile când ai timp și chef' },
      { value: 'oricare', label: 'Surprinde-mă', note: 'Oricare nivel e bun' },
    ],
  },
  {
    key: 'time',
    question: 'Cât timp ai la dispoziție?',
    options: [
      { value: 'sub30', label: 'Sub 30 de minute', note: 'Rapid și bun' },
      { value: '30la60', label: '30 – 60 de minute', note: 'Relaxat' },
      { value: 'peste60', label: 'Peste o oră', note: 'Îmi iau timpul' },
      { value: 'oricare', label: 'Nu contează', note: 'Arată-mi orice' },
    ],
  },
  {
    key: 'occasion',
    question: 'Pentru ce ocazie?',
    subtitle: 'Gust pentru tine sau pentru lume?',
    options: [
      { value: 'obisnuit', label: 'O zi obișnuită', note: 'Plăcerea de zi cu zi' },
      { value: 'musafiri', label: 'Am musafiri', note: 'Ceva frumos de pus pe masă' },
      { value: 'sarbatoare', label: 'Sărbătoare', note: 'Rețeta care se ține minte' },
    ],
  },
];

export function Quiz({ onComplete }: { onComplete: (a: QuizAnswers) => void }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  const step = steps[current];
  const progress = ((current + 1) / steps.length) * 100;

  const choose = (value: string) => {
    const next = { ...answers, [step.key]: value } as Partial<QuizAnswers>;
    setAnswers(next);
    setTimeout(() => {
      if (current < steps.length - 1) {
        setCurrent(current + 1);
      } else {
        onComplete(next as QuizAnswers);
      }
    }, 280);
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-10">
      {/* Progres */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3 text-xs tracking-[0.3em] uppercase text-cocoa/70 font-mark">
          <span>Pasul {current + 1} din {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-[2px] w-full bg-cream-dark relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-8">
            <Flourish className="w-40 h-4 mx-auto mb-5 opacity-80" />
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 leading-tight">
              {step.question}
            </h2>
            {step.subtitle && (
              <p className="text-cocoa/80 italic text-lg">{step.subtitle}</p>
            )}
          </div>

          <div className="grid gap-3">
            {step.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => choose(opt.value)}
                className={`quiz-option ${answers[step.key] === opt.value ? 'selected' : ''}`}
              >
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-xl text-ink">{opt.label}</span>
                  {opt.note && (
                    <span className="text-sm text-cocoa/70 italic text-right">{opt.note}</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {current > 0 && (
            <div className="mt-8 text-center">
              <button onClick={back} className="text-cocoa/60 hover:text-gold text-sm tracking-widest uppercase font-mark transition-colors">
                ← Înapoi
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
