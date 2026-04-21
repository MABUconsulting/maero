import type { Recipe } from '@/data/recipes';
import { recipeTranslations } from '@/data/recipes-i18n';
import type { Locale } from './i18n';

export function localizeRecipe(recipe: Recipe, locale: Locale): Recipe {
  if (locale === 'ro') return recipe;
  const t = recipeTranslations[locale]?.[recipe.id];
  if (!t) return recipe;
  return {
    ...recipe,
    title: t.title ?? recipe.title,
    subtitle: t.subtitle ?? recipe.subtitle,
    story: t.story ?? recipe.story,
    origin: t.origin ?? recipe.origin,
    servings: t.servings ?? recipe.servings,
    ingredients: t.ingredients ?? recipe.ingredients,
    steps: t.steps ?? recipe.steps,
    tip: t.tip ?? recipe.tip,
  };
}
