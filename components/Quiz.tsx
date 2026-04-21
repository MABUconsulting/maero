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
import { useLocale } from '@/lib/i18n';
import { useT } from '@/lib/dictionary';

export type QuizAnswers = {
  category: Category;
  vanilla: VanillaType | 'niciuna';
  difficulty: Difficulty | 'oricare';
  time: TimeRange | 'oricare';
  occasion: Occasion;
};

type StepKey = keyof QuizAnswers;

type Step = {
  key: StepKey;
  question: string;
  subtitle?: string;
  options: { value: string; label: string; note?: string }[];
};

export function Quiz({ onComplete }: { onComplete: (a: QuizAnswers) => void }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const { locale } = useLocale();
  const t = useT(locale);

  const steps: Step[] = [
    {
      key: 'category',
      question: t.qCategory,
      subtitle: t.qCategorySub,
      options: [
        { value: 'desert', label: t.optDesert, note: t.optDesertNote },
        { value: 'bautura', label: t.optBautura, note: t.optBauturaNote },
        { value: 'sos', label: t.optSos, note: t.optSosNote },
        { value: 'principal', label: t.optPrincipal, note: t.optPrincipalNote },
      ],
    },
    {
      key: 'vanilla',
      question: t.qVanilla,
      subtitle: t.qVanillaSub,
      options: [
        { value: 'pastai', label: t.optPastai, note: t.optPastaiNote },
        { value: 'pudra', label: t.optPudra, note: t.optPudraNote },
        { value: 'oricare', label: t.optOricare, note: t.optOricareNote },
        { value: 'niciuna', label: t.optNiciuna, note: t.optNiciunaNote },
      ],
    },
    {
      key: 'difficulty',
      question: t.qDifficulty,
      options: [
        { value: 'usor', label: t.optUsor, note: t.optUsorNote },
        { value: 'mediu', label: t.optMediu, note: t.optMediuNote },
        { value: 'avansat', label: t.optAvansat, note: t.optAvansatNote },
        { value: 'oricare', label: t.optSurprise, note: t.optSurpriseNote },
      ],
    },
    {
      key: 'time',
      question: t.qTime,
      options: [
        { value: 'sub30', label: t.optSub30, note: t.optSub30Note },
        { value: '30la60', label: t.opt30la60, note: t.opt30la60Note },
        { value: 'peste60', label: t.optPeste60, note: t.optPeste60Note },
        { value: 'oricare', label: t.optAnyTime, note: t.optAnyTimeNote },
      ],
    },
    {
      key: 'occasion',
      question: t.qOccasion,
      subtitle: t.qOccasionSub,
      options: [
        { value: 'obisnuit', label: t.optObisnuit, note: t.optObisnuitNote },
        { value: 'musafiri', label: t.optMusafiri, note: t.optMusafiriNote },
        { value: 'sarbatoare', label: t.optSarbatoare, note: t.optSarbatoareNote },
      ],
    },
  ];

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

  const progressLabel = t.progressStep
    .replace('{n}', String(current + 1))
    .replace('{total}', String(steps.length));

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-10">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3 text-xs tracking-[0.3em] uppercase text-cocoa/70 font-mark">
          <span>{progressLabel}</span>
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
                {t.back}
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
