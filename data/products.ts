export type Product = {
  id: 'bourbon' | 'imperiala' | 'pudra';
  name: string;
  subtitle: string;
  image: string;
  priceFromLei: number;
  url: string;
  description: string;
};

export const products: Record<Product['id'], Product> = {
  bourbon: {
    id: 'bourbon',
    name: 'Păstăi Bourbon',
    subtitle: 'Madagascar · 17-20 cm · Calitate A',
    image: '/img/pastai-bourbon.jpeg',
    priceFromLei: 89,
    url: 'https://www.maero.ro/vanilie-bourbon/pastai-de-vanilie-gourmet-din-madagascar-bourbon-calitate-a-100-naturala-17-20-cm.html',
    description:
      'Păstăi cărnoase, bogate în semințe, cu note dulci de caramel și ciocolată. Ideale pentru creme, înghețate și deserturi clasice.',
  },
  imperiala: {
    id: 'imperiala',
    name: 'Păstăi Imperială',
    subtitle: 'Madagascar · 24-30 cm · Calitate A',
    image: '/img/pastai-imperiala.jpeg',
    priceFromLei: 99,
    url: 'https://www.maero.ro/vanilie-imperiala/păstăi-de-vanilie-mexic-din-madagascar-calitate-a-100-naturală-14-20-cm-23.html',
    description:
      'Cele mai lungi și mai aromate păstăi din selecția noastră. Pentru momentele când nimic altceva decât excelența nu este destul.',
  },
  pudra: {
    id: 'pudra',
    name: 'Pudră Gourmet',
    subtitle: 'Madagascar · Ediție limitată · 100% naturală',
    image: '/img/pudra.jpeg',
    priceFromLei: 279,
    url: 'https://www.maero.ro/produse-editie-limitata/pudra-de-vanilie-gourmet-din-madagascar-calitate-a-100-naturala.html',
    description:
      'Vanilie măcinată fin, fără aditivi. Perfectă pentru aluaturi, băuturi, sosuri — se dizolvă instant și aromează profund.',
  },
};
