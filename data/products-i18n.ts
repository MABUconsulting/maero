import type { Locale } from '@/lib/i18n';
import type { Product } from './products';

type ProductText = Pick<Product, 'name' | 'subtitle' | 'description'>;

export const productTranslations: Record<Locale, Record<Product['id'], ProductText>> = {
  ro: {
    bourbon: {
      name: 'Păstăi Bourbon',
      subtitle: 'Madagascar · 17-20 cm · Calitate A',
      description:
        'Păstăi cărnoase, bogate în semințe, cu note dulci de caramel și ciocolată. Ideale pentru creme, înghețate și deserturi clasice.',
    },
    imperiala: {
      name: 'Păstăi Imperială',
      subtitle: 'Madagascar · 24-30 cm · Calitate A',
      description:
        'Cele mai lungi și mai aromate păstăi din selecția noastră. Pentru momentele când nimic altceva decât excelența nu este destul.',
    },
    pudra: {
      name: 'Pudră Gourmet',
      subtitle: 'Madagascar · Ediție limitată · 100% naturală',
      description:
        'Vanilie măcinată fin, fără aditivi. Perfectă pentru aluaturi, băuturi, sosuri — se dizolvă instant și aromează profund.',
    },
  },
  en: {
    bourbon: {
      name: 'Bourbon Pods',
      subtitle: 'Madagascar · 17-20 cm · Grade A',
      description:
        'Plump, seed-rich pods with sweet notes of caramel and chocolate. Ideal for creams, ice creams and classic desserts.',
    },
    imperiala: {
      name: 'Imperial Pods',
      subtitle: 'Madagascar · 24-30 cm · Grade A',
      description:
        'The longest and most aromatic pods in our selection. For the moments when nothing but excellence will do.',
    },
    pudra: {
      name: 'Gourmet Powder',
      subtitle: 'Madagascar · Limited edition · 100% natural',
      description:
        'Finely ground vanilla, no additives. Perfect for doughs, drinks, sauces — dissolves instantly and flavours deeply.',
    },
  },
  it: {
    bourbon: {
      name: 'Bacche Bourbon',
      subtitle: 'Madagascar · 17-20 cm · Qualità A',
      description:
        'Bacche carnose, ricche di semi, con note dolci di caramello e cioccolato. Ideali per creme, gelati e dessert classici.',
    },
    imperiala: {
      name: 'Bacche Imperiale',
      subtitle: 'Madagascar · 24-30 cm · Qualità A',
      description:
        'Le bacche più lunghe e aromatiche della nostra selezione. Per i momenti in cui solo l\'eccellenza è abbastanza.',
    },
    pudra: {
      name: 'Polvere Gourmet',
      subtitle: 'Madagascar · Edizione limitata · 100% naturale',
      description:
        'Vaniglia macinata fine, senza additivi. Perfetta per impasti, bevande, salse — si scioglie subito e aromatizza in profondità.',
    },
  },
  fr: {
    bourbon: {
      name: 'Gousses Bourbon',
      subtitle: 'Madagascar · 17-20 cm · Qualité A',
      description:
        'Gousses charnues, riches en graines, aux notes douces de caramel et de chocolat. Idéales pour crèmes, glaces et desserts classiques.',
    },
    imperiala: {
      name: 'Gousses Impériale',
      subtitle: 'Madagascar · 24-30 cm · Qualité A',
      description:
        'Les gousses les plus longues et les plus aromatiques de notre sélection. Pour les moments où seule l\'excellence suffit.',
    },
    pudra: {
      name: 'Poudre Gourmet',
      subtitle: 'Madagascar · Édition limitée · 100% naturelle',
      description:
        'Vanille finement moulue, sans additifs. Parfaite pour pâtes, boissons, sauces — se dissout instantanément et parfume profondément.',
    },
  },
};
