import { recipes, type Recipe } from '@/data/recipes';
import type { QuizAnswers } from '@/components/Quiz';

export function matchRecipes(a: QuizAnswers): Recipe[] {
  const scored = recipes.map((r) => {
    let score = 0;

    // Categorie (critical)
    if (r.category === a.category) score += 100;
    else return { r, score: -1 };

    // Vanilie
    if (a.vanilla === 'niciuna' || a.vanilla === 'oricare') score += 20;
    else if (r.vanilla === a.vanilla) score += 40;
    else score += 5;

    // Dificultate
    if (a.difficulty === 'oricare') score += 10;
    else if (r.difficulty === a.difficulty) score += 30;
    else score += 5;

    // Timp
    if (a.time === 'oricare') score += 10;
    else if (r.time === a.time) score += 30;
    else score += 5;

    // Ocazie
    if (r.occasions.includes(a.occasion)) score += 25;

    return { r, score };
  });

  return scored
    .filter((s) => s.score >= 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, 3)
    .map((s) => s.r);
}
