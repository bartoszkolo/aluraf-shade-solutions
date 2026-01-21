// Centralized SEO metadata configuration

export const SEO_CONFIG = {
  siteName: 'Aluraf - Pergole i Zadaszenia Aluminiowe',
  siteUrl: 'https://aluraf.pl', // Update with actual domain
  defaultImage: '/lovable-uploads/0748ff93-80ad-4145-a425-eff5345ea9ac.png',
  defaultDescription: 'Producent nowoczesnych pergoli, zadaszeń tarasowych i carportów aluminiowych. Kompleksowa realizacja i montaż na terenie całej Polski.',
  social: {
    facebook: 'https://www.facebook.com/aluminiowezadaszeniatarasow',
    tiktok: 'https://www.tiktok.com/@rafalgrzelak993'
  },
  contact: {
    phone: '+48 698 368 994',
    email: 'kontakt@aluraf.pl',
    address: 'Goślinowo, 62-200 Gniezno, woj. wielkopolskie'
  }
};

// Route-specific metadata
export const ROUTE_METADATA = {
  '/': {
    title: 'Aluraf - Pergole i Zadaszenia Aluminiowe | Producent',
    description: 'Nowoczesne pergole, zadaszenia tarasowe i carporty aluminiowe. Producent z własnym montażem na terenie całej Polski. Jakość i precyzja wykonania.',
    keywords: 'pergole, zadaszenia tarasowe, carporty, aluminium, zadaszenia aluminiowe, pergole lamelowe, markizy, rolety zip'
  },
  '/o-nas': {
    title: 'O Nas - Aluraf | Producent Zadaszeń Aluminiowych',
    description: 'Poznaj Aluraf - producenta pergoli i zadaszeń aluminiowych. 10 lat doświadczenia, ponad 500 zrealizowanych projektów w całej Polsce.',
    keywords: 'aluraf, o nas, producent zadaszeń, pergole aluminium, doświadczenie'
  },
  '/kontakt': {
    title: 'Kontakt - Aluraf | Zadaszenia Tarasowe i Pergole',
    description: 'Skontaktuj się z Aluraf. Bezpłatna wycena, doradztwo i profesjonalny montaż zadaszeń aluminiowych. Zadzwoń: +48 698 368 994.',
    keywords: 'kontakt, wycena, zadaszenia, telefon, email, lokalizacja'
  },
  '/wycena': {
    title: 'Bezpłatna Wycena - Zadaszenia Tarasowe | Aluraf',
    description: 'Zamów bezpłatną wycenę zadaszenia tarasowego, pergoli lub carportu. Wypełnij formularz i otrzymaj indywidualną ofertę w 24h.',
    keywords: 'wycena, bezpłatna wycena, zadaszenie, pergola, carport, formularz wyceny'
  },
  '/realizacje': {
    title: 'Realizacje - Nasze Projekty | Aluraf Galeria',
    description: 'Zobacz nasze realizacje pergoli, zadaszeń tarasowych i carportów. Galeria projektów z całej Polski. Inspiracje i pomysły.',
    keywords: 'realizacje, projekty, galeria, pergole, zadaszenia, portfolio'
  },
  '/blog': {
    title: 'Blog - Porady i Wiedza o Zadaszeniach | Aluraf',
    description: 'Przeczytaj naszego bloga. Porady dotyczące zadaszeń tarasowych, pergoli aluminiowych i ogrodów zimowych. Wiedza z pierwszej ręki.',
    keywords: 'blog, porady, pergole, zadaszenia, wiedza, artykuły'
  },
  '/polityka-prywatnosci': {
    title: 'Polityka Prywatności - Aluraf | Ochrona Danych Osobowych',
    description: 'Polityka prywatności Aluraf. Dowiedz się jak przetwarzamy Twoje dane, jakich plików cookies używamy i jakie masz prawa związane z RODO.',
    keywords: 'polityka prywatności, RODO, ochrona danych, cookies, dane osobowe, GDPR'
  },
};

export interface RouteMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishDate?: string;
  modifiedTime?: string;
}

// Get metadata for a specific route
export const getRouteMetadata = (path: string): RouteMetadata => {
  return ROUTE_METADATA[path as keyof typeof ROUTE_METADATA] || {
    title: SEO_CONFIG.siteName,
    description: SEO_CONFIG.defaultDescription
  };
};

// Generate full title with site name
export const generateTitle = (pageTitle: string): string => {
  return pageTitle.includes(SEO_CONFIG.siteName)
    ? pageTitle
    : `${pageTitle} | ${SEO_CONFIG.siteName}`;
};
