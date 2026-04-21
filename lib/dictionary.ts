import type { Locale } from './i18n';

type Dict = {
  // Splash
  tagline: string;
  selectionLabel: string;
  intro: string;
  startBtn: string;
  splashFoot: string;
  // Quiz
  progressStep: string; // "Pasul {n} din {total}"
  back: string;
  // Quiz questions
  qCategory: string;
  qCategorySub: string;
  qVanilla: string;
  qVanillaSub: string;
  qDifficulty: string;
  qTime: string;
  qOccasion: string;
  qOccasionSub: string;
  // Quiz option labels
  optDesert: string;
  optDesertNote: string;
  optBautura: string;
  optBauturaNote: string;
  optSos: string;
  optSosNote: string;
  optPrincipal: string;
  optPrincipalNote: string;
  optPastai: string;
  optPastaiNote: string;
  optPudra: string;
  optPudraNote: string;
  optOricare: string;
  optOricareNote: string;
  optNiciuna: string;
  optNiciunaNote: string;
  optUsor: string;
  optUsorNote: string;
  optMediu: string;
  optMediuNote: string;
  optAvansat: string;
  optAvansatNote: string;
  optSurprise: string;
  optSurpriseNote: string;
  optSub30: string;
  optSub30Note: string;
  opt30la60: string;
  opt30la60Note: string;
  optPeste60: string;
  optPeste60Note: string;
  optAnyTime: string;
  optAnyTimeNote: string;
  optObisnuit: string;
  optObisnuitNote: string;
  optMusafiri: string;
  optMusafiriNote: string;
  optSarbatoare: string;
  optSarbatoareNote: string;
  // Results
  yourRecipes: string;
  stillExploring: string;
  selectedForYou: string;
  noMatch: string;
  startWithVanilla: string;
  backToQuiz: string;
  seeAllMaero: string;
  // Recipe card
  difUsor: string;
  difMediu: string;
  difAvansat: string;
  minutesShort: string; // "min"
  seeRecipe: string;
  hideRecipe: string;
  ingredients: string;
  steps: string;
  tipLabel: string;
  videoTitle: string;
  videoAlt: string;
  // ProductCTA
  recommendedFor: string;
  priceFrom: string;
  priceCurrency: string; // "Lei" / "RON"
  orderOnMaero: string;
  // Footer
  footerTag: string;
  // Language selector
  language: string;
};

export const dict: Record<Locale, Dict> = {
  ro: {
    tagline: 'Rețete cu vanilie',
    selectionLabel: 'Selecție premium · Madagascar',
    intro:
      'Vanilia noastră nu este doar un ingredient — este o experiență. Răspunde la câteva întrebări și îți arătăm <em>rețeta care ți se potrivește</em>, împreună cu vanilia Maero recomandată pentru ea.',
    startBtn: 'Începe călătoria',
    splashFoot: '5 pași · sub 1 minut · fără înregistrare',
    progressStep: 'Pasul {n} din {total}',
    back: '← Înapoi',
    qCategory: 'Ce ai vrea să prepari?',
    qCategorySub: 'Alege direcția — restul îți arătăm noi.',
    qVanilla: 'Ce vanilie Maero ai în bucătărie?',
    qVanillaSub: 'Dacă nu ai încă, îți arătăm unde se găsește.',
    qDifficulty: 'Ce nivel de dificultate cauți?',
    qTime: 'Cât timp ai la dispoziție?',
    qOccasion: 'Pentru ce ocazie?',
    qOccasionSub: 'Gust pentru tine sau pentru lume?',
    optDesert: 'Desert',
    optDesertNote: 'Creme, torturi, înghețate',
    optBautura: 'Băutură',
    optBauturaNote: 'Calde sau răcoritoare',
    optSos: 'Sos dulce',
    optSosNote: 'Pentru fructe, clătite, pandișpan',
    optPrincipal: 'Fel principal',
    optPrincipalNote: 'Arome subtile de vanilie în gastronomie',
    optPastai: 'Păstăi întregi',
    optPastaiNote: 'Bourbon sau Imperială — aroma profundă',
    optPudra: 'Pudră Gourmet',
    optPudraNote: 'Se dizolvă instant, 100% naturală',
    optOricare: 'Am ambele',
    optOricareNote: 'Alege libertatea',
    optNiciuna: 'Nu am încă',
    optNiciunaNote: 'Îți recomandăm ce se potrivește rețetei',
    optUsor: 'Ușor',
    optUsorNote: 'Pași simpli, rezultat sigur',
    optMediu: 'Mediu',
    optMediuNote: 'Un pic de tehnică, multă satisfacție',
    optAvansat: 'Avansat',
    optAvansatNote: 'Pentru zile când ai timp și chef',
    optSurprise: 'Surprinde-mă',
    optSurpriseNote: 'Oricare nivel e bun',
    optSub30: 'Sub 30 de minute',
    optSub30Note: 'Rapid și bun',
    opt30la60: '30 – 60 de minute',
    opt30la60Note: 'Relaxat',
    optPeste60: 'Peste o oră',
    optPeste60Note: 'Îmi iau timpul',
    optAnyTime: 'Nu contează',
    optAnyTimeNote: 'Arată-mi orice',
    optObisnuit: 'O zi obișnuită',
    optObisnuitNote: 'Plăcerea de zi cu zi',
    optMusafiri: 'Am musafiri',
    optMusafiriNote: 'Ceva frumos de pus pe masă',
    optSarbatoare: 'Sărbătoare',
    optSarbatoareNote: 'Rețeta care se ține minte',
    yourRecipes: 'Rețetele tale',
    stillExploring: 'Încă explorăm',
    selectedForYou: 'Selectate pentru gustul tău. Alege una și hai la treabă.',
    noMatch: 'Nu am găsit o potrivire exactă — încearcă alte preferințe.',
    startWithVanilla: 'Începe cu alegerea vaniliei potrivite:',
    backToQuiz: '← Caută altă rețetă',
    seeAllMaero: 'Vezi toată selecția pe maero.ro →',
    difUsor: 'Ușor',
    difMediu: 'Mediu',
    difAvansat: 'Avansat',
    minutesShort: 'min',
    seeRecipe: 'Vezi rețeta completă',
    hideRecipe: 'Ascunde rețeta',
    ingredients: 'Ingrediente',
    steps: 'Pași de preparare',
    tipLabel: 'Sfat Maero',
    videoTitle: 'Vezi cum se prepară',
    videoAlt: 'Video rețetă',
    recommendedFor: 'Recomandat pentru această rețetă',
    priceFrom: 'de la',
    priceCurrency: 'Lei',
    orderOnMaero: 'Comandă pe maero.ro →',
    footerTag: 'Vanilie de Madagascar · 100% naturală',
    language: 'Limbă',
  },
  en: {
    tagline: 'Vanilla recipes',
    selectionLabel: 'Premium selection · Madagascar',
    intro:
      'Our vanilla is not just an ingredient — it is an experience. Answer a few questions and we will show you <em>the recipe that fits you</em>, together with the Maero vanilla recommended for it.',
    startBtn: 'Begin the journey',
    splashFoot: '5 steps · under 1 minute · no signup',
    progressStep: 'Step {n} of {total}',
    back: '← Back',
    qCategory: 'What would you like to prepare?',
    qCategorySub: 'Pick the direction — we will handle the rest.',
    qVanilla: 'Which Maero vanilla do you have in your kitchen?',
    qVanillaSub: 'If you have none yet, we will show you where to find it.',
    qDifficulty: 'What level of difficulty are you after?',
    qTime: 'How much time do you have?',
    qOccasion: 'For what occasion?',
    qOccasionSub: 'A treat for yourself or for guests?',
    optDesert: 'Dessert',
    optDesertNote: 'Creams, cakes, ice creams',
    optBautura: 'Drink',
    optBauturaNote: 'Hot or refreshing',
    optSos: 'Sweet sauce',
    optSosNote: 'For fruit, pancakes, sponge cake',
    optPrincipal: 'Main course',
    optPrincipalNote: 'Subtle vanilla notes in gastronomy',
    optPastai: 'Whole pods',
    optPastaiNote: 'Bourbon or Imperial — deep aroma',
    optPudra: 'Gourmet powder',
    optPudraNote: 'Dissolves instantly, 100% natural',
    optOricare: 'I have both',
    optOricareNote: 'Pick freely',
    optNiciuna: "I don't have any yet",
    optNiciunaNote: 'We recommend what fits the recipe',
    optUsor: 'Easy',
    optUsorNote: 'Simple steps, guaranteed result',
    optMediu: 'Medium',
    optMediuNote: 'A bit of technique, lots of reward',
    optAvansat: 'Advanced',
    optAvansatNote: 'For days with time and mood',
    optSurprise: 'Surprise me',
    optSurpriseNote: 'Any level is fine',
    optSub30: 'Under 30 minutes',
    optSub30Note: 'Quick and good',
    opt30la60: '30 – 60 minutes',
    opt30la60Note: 'Relaxed',
    optPeste60: 'Over an hour',
    optPeste60Note: 'Taking my time',
    optAnyTime: "Doesn't matter",
    optAnyTimeNote: 'Show me anything',
    optObisnuit: 'An ordinary day',
    optObisnuitNote: 'Everyday pleasure',
    optMusafiri: "I'm hosting guests",
    optMusafiriNote: 'Something lovely for the table',
    optSarbatoare: 'Celebration',
    optSarbatoareNote: 'The recipe to remember',
    yourRecipes: 'Your recipes',
    stillExploring: 'Still exploring',
    selectedForYou: 'Selected for your taste. Pick one and get cooking.',
    noMatch: "We didn't find an exact match — try other preferences.",
    startWithVanilla: 'Start by choosing the right vanilla:',
    backToQuiz: '← Look for another recipe',
    seeAllMaero: 'See the whole selection on maero.ro →',
    difUsor: 'Easy',
    difMediu: 'Medium',
    difAvansat: 'Advanced',
    minutesShort: 'min',
    seeRecipe: 'See the full recipe',
    hideRecipe: 'Hide recipe',
    ingredients: 'Ingredients',
    steps: 'Preparation steps',
    tipLabel: 'Maero tip',
    videoTitle: 'Watch how it is made',
    videoAlt: 'Recipe video',
    recommendedFor: 'Recommended for this recipe',
    priceFrom: 'from',
    priceCurrency: 'RON',
    orderOnMaero: 'Order on maero.ro →',
    footerTag: 'Madagascar vanilla · 100% natural',
    language: 'Language',
  },
  it: {
    tagline: 'Ricette alla vaniglia',
    selectionLabel: 'Selezione premium · Madagascar',
    intro:
      'La nostra vaniglia non è solo un ingrediente — è un\'esperienza. Rispondi a qualche domanda e ti mostreremo <em>la ricetta che fa per te</em>, insieme alla vaniglia Maero consigliata.',
    startBtn: 'Inizia il viaggio',
    splashFoot: '5 passi · meno di 1 minuto · senza registrazione',
    progressStep: 'Passo {n} di {total}',
    back: '← Indietro',
    qCategory: 'Cosa vorresti preparare?',
    qCategorySub: 'Scegli la direzione — al resto pensiamo noi.',
    qVanilla: 'Quale vaniglia Maero hai in cucina?',
    qVanillaSub: 'Se non ne hai ancora, ti diciamo dove trovarla.',
    qDifficulty: 'Che livello di difficoltà cerchi?',
    qTime: 'Quanto tempo hai a disposizione?',
    qOccasion: 'Per quale occasione?',
    qOccasionSub: 'Un piacere per te o per gli ospiti?',
    optDesert: 'Dessert',
    optDesertNote: 'Creme, torte, gelati',
    optBautura: 'Bevanda',
    optBauturaNote: 'Calda o rinfrescante',
    optSos: 'Salsa dolce',
    optSosNote: 'Per frutta, crêpe, pan di Spagna',
    optPrincipal: 'Piatto principale',
    optPrincipalNote: 'Note sottili di vaniglia in gastronomia',
    optPastai: 'Bacche intere',
    optPastaiNote: 'Bourbon o Imperiale — aroma profondo',
    optPudra: 'Polvere Gourmet',
    optPudraNote: 'Si scioglie subito, 100% naturale',
    optOricare: 'Ho entrambe',
    optOricareNote: 'Scegli liberamente',
    optNiciuna: 'Non ne ho ancora',
    optNiciunaNote: 'Ti consigliamo ciò che si adatta alla ricetta',
    optUsor: 'Facile',
    optUsorNote: 'Passaggi semplici, risultato sicuro',
    optMediu: 'Medio',
    optMediuNote: 'Un po\' di tecnica, tanta soddisfazione',
    optAvansat: 'Avanzato',
    optAvansatNote: 'Per quando hai tempo e voglia',
    optSurprise: 'Sorprendimi',
    optSurpriseNote: 'Qualsiasi livello va bene',
    optSub30: 'Meno di 30 minuti',
    optSub30Note: 'Veloce e buono',
    opt30la60: '30 – 60 minuti',
    opt30la60Note: 'Rilassato',
    optPeste60: 'Più di un\'ora',
    optPeste60Note: 'Mi prendo il mio tempo',
    optAnyTime: 'Non importa',
    optAnyTimeNote: 'Mostrami tutto',
    optObisnuit: 'Un giorno qualunque',
    optObisnuitNote: 'Il piacere quotidiano',
    optMusafiri: 'Ho ospiti',
    optMusafiriNote: 'Qualcosa di bello da portare in tavola',
    optSarbatoare: 'Festività',
    optSarbatoareNote: 'La ricetta da ricordare',
    yourRecipes: 'Le tue ricette',
    stillExploring: 'Stiamo ancora esplorando',
    selectedForYou: 'Selezionate per il tuo gusto. Scegline una e al lavoro.',
    noMatch: 'Non abbiamo trovato una corrispondenza esatta — prova altre preferenze.',
    startWithVanilla: 'Inizia scegliendo la vaniglia giusta:',
    backToQuiz: '← Cerca un\'altra ricetta',
    seeAllMaero: 'Vedi tutta la selezione su maero.ro →',
    difUsor: 'Facile',
    difMediu: 'Medio',
    difAvansat: 'Avanzato',
    minutesShort: 'min',
    seeRecipe: 'Vedi la ricetta completa',
    hideRecipe: 'Nascondi ricetta',
    ingredients: 'Ingredienti',
    steps: 'Passaggi di preparazione',
    tipLabel: 'Consiglio Maero',
    videoTitle: 'Guarda come si prepara',
    videoAlt: 'Video ricetta',
    recommendedFor: 'Consigliato per questa ricetta',
    priceFrom: 'da',
    priceCurrency: 'RON',
    orderOnMaero: 'Ordina su maero.ro →',
    footerTag: 'Vaniglia del Madagascar · 100% naturale',
    language: 'Lingua',
  },
  fr: {
    tagline: 'Recettes à la vanille',
    selectionLabel: 'Sélection premium · Madagascar',
    intro:
      "Notre vanille n'est pas qu'un ingrédient — c'est une expérience. Réponds à quelques questions et nous te montrerons <em>la recette qui te convient</em>, avec la vanille Maero recommandée.",
    startBtn: 'Commencer le voyage',
    splashFoot: '5 étapes · moins d\'1 minute · sans inscription',
    progressStep: 'Étape {n} sur {total}',
    back: '← Retour',
    qCategory: 'Que voudrais-tu préparer ?',
    qCategorySub: 'Choisis la direction — on s\'occupe du reste.',
    qVanilla: 'Quelle vanille Maero as-tu en cuisine ?',
    qVanillaSub: 'Si tu n\'en as pas encore, on t\'indique où la trouver.',
    qDifficulty: 'Quel niveau de difficulté cherches-tu ?',
    qTime: 'De combien de temps disposes-tu ?',
    qOccasion: 'Pour quelle occasion ?',
    qOccasionSub: 'Un plaisir pour toi ou pour tes invités ?',
    optDesert: 'Dessert',
    optDesertNote: 'Crèmes, gâteaux, glaces',
    optBautura: 'Boisson',
    optBauturaNote: 'Chaude ou rafraîchissante',
    optSos: 'Sauce sucrée',
    optSosNote: 'Pour fruits, crêpes, génoise',
    optPrincipal: 'Plat principal',
    optPrincipalNote: 'Notes subtiles de vanille en gastronomie',
    optPastai: 'Gousses entières',
    optPastaiNote: 'Bourbon ou Impériale — arôme profond',
    optPudra: 'Poudre Gourmet',
    optPudraNote: 'Se dissout instantanément, 100% naturelle',
    optOricare: 'J\'ai les deux',
    optOricareNote: 'Choisis librement',
    optNiciuna: 'Je n\'en ai pas encore',
    optNiciunaNote: 'On te recommande ce qui convient à la recette',
    optUsor: 'Facile',
    optUsorNote: 'Étapes simples, résultat garanti',
    optMediu: 'Moyen',
    optMediuNote: 'Un peu de technique, beaucoup de satisfaction',
    optAvansat: 'Avancé',
    optAvansatNote: 'Pour les jours où tu as le temps et l\'envie',
    optSurprise: 'Surprends-moi',
    optSurpriseNote: 'Peu importe le niveau',
    optSub30: 'Moins de 30 minutes',
    optSub30Note: 'Rapide et bon',
    opt30la60: '30 – 60 minutes',
    opt30la60Note: 'Détendu',
    optPeste60: 'Plus d\'une heure',
    optPeste60Note: 'Je prends mon temps',
    optAnyTime: 'Peu importe',
    optAnyTimeNote: 'Montre-moi tout',
    optObisnuit: 'Un jour ordinaire',
    optObisnuitNote: 'Le plaisir du quotidien',
    optMusafiri: 'J\'ai des invités',
    optMusafiriNote: 'Quelque chose de beau à mettre sur la table',
    optSarbatoare: 'Fête',
    optSarbatoareNote: 'La recette dont on se souvient',
    yourRecipes: 'Tes recettes',
    stillExploring: 'Nous explorons encore',
    selectedForYou: 'Sélectionnées pour ton goût. Choisis-en une et au travail.',
    noMatch: "Nous n'avons pas trouvé de correspondance exacte — essaie d'autres préférences.",
    startWithVanilla: 'Commence par choisir la bonne vanille :',
    backToQuiz: '← Chercher une autre recette',
    seeAllMaero: 'Voir toute la sélection sur maero.ro →',
    difUsor: 'Facile',
    difMediu: 'Moyen',
    difAvansat: 'Avancé',
    minutesShort: 'min',
    seeRecipe: 'Voir la recette complète',
    hideRecipe: 'Masquer la recette',
    ingredients: 'Ingrédients',
    steps: 'Étapes de préparation',
    tipLabel: 'Astuce Maero',
    videoTitle: 'Regarde comment on la prépare',
    videoAlt: 'Vidéo de recette',
    recommendedFor: 'Recommandé pour cette recette',
    priceFrom: 'à partir de',
    priceCurrency: 'RON',
    orderOnMaero: 'Commander sur maero.ro →',
    footerTag: 'Vanille de Madagascar · 100% naturelle',
    language: 'Langue',
  },
};

export function useT(locale: Locale): Dict {
  return dict[locale];
}
