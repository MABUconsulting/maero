'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Recipe } from '@/data/recipes';
import { ProductCTA } from './ProductCTA';
import { Flourish } from './Flourish';

const difficultyLabel: Record<Recipe['difficulty'], string> = {
  usor: 'Ușor',
  mediu: 'Mediu',
  avansat: 'Avansat',
};

export function RecipeCard({ recipe, defaultOpen = false }: { recipe: Recipe; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <article className="recipe-card">
      <div className="relative w-full h-64 md:h-80">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute top-4 right-4 bg-cream/95 px-3 py-1 text-xs tracking-[0.2em] uppercase font-mark text-cocoa border border-gold/30">
          {recipe.origin}
        </div>
      </div>

      <div className="p-6 md:p-10">
        <div className="text-center mb-5">
          <p className="text-xs tracking-[0.35em] uppercase text-gold font-mark mb-2">
            {difficultyLabel[recipe.difficulty]} · {recipe.timeMinutes} min · {recipe.servings}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-2 leading-tight">
            {recipe.title}
          </h2>
          <p className="italic text-cocoa/80 text-lg">{recipe.subtitle}</p>
          <Flourish className="w-40 h-4 mx-auto mt-4 opacity-80" />
        </div>

        <p className="text-ink/85 leading-relaxed italic text-center max-w-xl mx-auto">
          {recipe.story}
        </p>

        <div className="text-center mt-6">
          <button onClick={() => setOpen(!open)} className="btn-outline">
            {open ? 'Ascunde rețeta' : 'Vezi rețeta completă'}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="pt-8 grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-display text-xl text-gold-dark mb-4 tracking-wide">
                    Ingrediente
                  </h3>
                  <ul className="space-y-2 text-ink/90">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-gold mt-2 flex-shrink-0">◆</span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl text-gold-dark mb-4 tracking-wide">
                    Pași de preparare
                  </h3>
                  <ol className="space-y-4 text-ink/90">
                    {recipe.steps.map((st, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-gold font-display text-xl flex-shrink-0 w-7">{i + 1}.</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-8 p-5 bg-cream border-l-2 border-gold italic text-cocoa">
                <span className="text-xs tracking-[0.3em] uppercase font-mark text-gold not-italic block mb-2">
                  Sfat Maero
                </span>
                {recipe.tip}
              </div>

              {recipe.youtubeId && (
                <div className="mt-10">
                  <h3 className="font-display text-xl text-gold-dark mb-4 tracking-wide text-center">
                    Vezi cum se prepară
                  </h3>
                  <div className="aspect-video rounded-sm overflow-hidden bg-black shadow-soft border border-gold/20">
                    <iframe
                      src={`https://www.youtube.com/embed/${recipe.youtubeId}?rel=0`}
                      title={`Video rețetă: ${recipe.title}`}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              <ProductCTA productId={recipe.vanillaRecommended} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
