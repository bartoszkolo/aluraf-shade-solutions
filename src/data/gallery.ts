export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
  location?: string;
}

// Category options based on the Oferta dropdown
export const CATEGORIES = [
  { id: 'all', name: 'Wszystkie' },
  { id: 'zadaszenia-tarasu', name: 'Zadaszenia tarasu' },
  { id: 'przeszklenia', name: 'Przeszklenia' },
  { id: 'carporty', name: 'Wiaty samochodowe/Carporty' },
  { id: 'wiatrolapy', name: 'Wiatrołapy' },
  { id: 'pergole-lamelowe', name: 'Pergole lamelowe' },
  { id: 'ruchome-lamele', name: 'Ruchome lamele' },
  { id: 'rolety-zip', name: 'Rolety zip' },
  { id: 'markizy', name: 'Markizy' },
];

// Sample gallery items for each category
export const GALLERY_ITEMS: GalleryItem[] = [
  // Zadaszenia tarasu
  {
    id: 'zadaszenie-1',
    title: 'Zadaszenie tarasu - Projekt Modern',
    description: 'Nowoczesne zadaszenie tarasu wykonane z aluminium i szkła hartowanego.',
    image: '/images/gallery/zadaszenie-1.jpg',
    category: 'zadaszenia-tarasu',
    date: '2024-03-15',
    featured: true,
    location: 'Poznań'
  },
  {
    id: 'zadaszenie-2',
    title: 'Zadaszenie tarasu - Projekt Classic',
    description: 'Klasyczne zadaszenie tarasu z poliwęglanu dającego ochronę przed promieniami UV.',
    image: '/images/gallery/zadaszenie-2.jpg',
    category: 'zadaszenia-tarasu',
    date: '2024-02-20',
    location: 'Warszawa'
  },
  
  // Przeszklenia
  {
    id: 'przeszklenie-1',
    title: 'System przesuwny HST',
    description: 'System przesuwny HST umożliwiający całkowite otwarcie przestrzeni mieszkalnej na taras.',
    image: '/images/gallery/przeszklenie-1.jpg',
    category: 'przeszklenia',
    date: '2024-01-10',
    featured: true,
    location: 'Kraków'
  },
  {
    id: 'przeszklenie-2',
    title: 'Przeszklenie tarasu w apartamencie',
    description: 'Przeszklenie tarasu z bezprogowym przejściem i szybami panoramicznymi.',
    image: '/images/gallery/przeszklenie-2.jpg',
    category: 'przeszklenia',
    date: '2023-12-05',
    location: 'Gdańsk'
  },
  
  // Carporty
  {
    id: 'carport-1',
    title: 'Carport Premium podwójny',
    description: 'Nowoczesna wiata garażowa na dwa samochody z zadaszeniem z poliwęglanu.',
    image: '/images/gallery/carport-1.jpg',
    category: 'carporty',
    date: '2024-02-28',
    featured: true,
    location: 'Wrocław'
  },
  {
    id: 'carport-2',
    title: 'Carport ze schowkiem',
    description: 'Wiata garażowa z dobudowanym schowkiem na narzędzia ogrodowe.',
    image: '/images/gallery/carport-2.jpg',
    category: 'carporty',
    date: '2023-11-15',
    location: 'Łódź'
  },
  
  // Wiatrołapy
  {
    id: 'wiatrolap-1',
    title: 'Wiatrołap szklany Modern',
    description: 'Elegancki wiatrołap z całoszklanymi drzwiami i bocznymi szybami.',
    image: '/images/gallery/wiatrolap-1.jpg',
    category: 'wiatrolapy',
    date: '2024-01-20',
    location: 'Katowice'
  },
  {
    id: 'wiatrolap-2',
    title: 'Wiatrołap aluminiowy',
    description: 'Wiatrołap w konstrukcji aluminiowej z wypełnieniem szklanym.',
    image: '/images/gallery/wiatrolap-2.jpg',
    category: 'wiatrolapy',
    date: '2023-10-12',
    featured: true,
    location: 'Szczecin'
  },
  
  // Pergole lamelowe
  {
    id: 'pergola-1',
    title: 'Pergola bioklimatyczna Prestige',
    description: 'Pergola bioklimatyczna z obracanymi lamelami i zintegrowanym oświetleniem LED.',
    image: '/images/gallery/pergola-1.jpg',
    category: 'pergole-lamelowe',
    date: '2024-03-05',
    featured: true,
    location: 'Warszawa'
  },
  {
    id: 'pergola-2',
    title: 'Pergola lamelowa z przeszkleniem',
    description: 'Pergola bioklimatyczna z systemem przesuwnych szyb i ogrzewaniem.',
    image: '/images/gallery/pergola-2.jpg',
    category: 'pergole-lamelowe',
    date: '2023-09-18',
    location: 'Kraków'
  },
  
  // Ruchome lamele
  {
    id: 'lamele-1',
    title: 'System lamelowy drewniany',
    description: 'Ruchome lamele drewniane zapewniające prywatność i regulację światła.',
    image: '/images/gallery/lamele-1.jpg',
    category: 'ruchome-lamele',
    date: '2023-08-15',
    location: 'Poznań'
  },
  {
    id: 'lamele-2',
    title: 'Lamele aluminiowe ścienne',
    description: 'System lamelowy aluminiowy z możliwością regulacji kąta nachylenia.',
    image: '/images/gallery/lamele-2.jpg',
    category: 'ruchome-lamele',
    date: '2024-02-10',
    featured: true,
    location: 'Wrocław'
  },
  
  // Rolety ZIP
  {
    id: 'roleta-1',
    title: 'Rolety ZIP z napędem elektrycznym',
    description: 'System rolet ZIP z napędem elektrycznym i sterowaniem smartfon.',
    image: '/images/gallery/roleta-1.jpg',
    category: 'rolety-zip',
    date: '2024-01-25',
    featured: true,
    location: 'Gdańsk'
  },
  {
    id: 'roleta-2',
    title: 'Rolety ZIP zaciemniające',
    description: 'System rolet ZIP całkowicie zaciemniających pomieszczenie.',
    image: '/images/gallery/roleta-2.jpg',
    category: 'rolety-zip',
    date: '2023-07-20',
    location: 'Białystok'
  },
  
  // Markizy
  {
    id: 'markiza-1',
    title: 'Markiza tarasowa Sunlight',
    description: 'Markiza tarasowa z napędem elektrycznym i czujnikiem wiatru.',
    image: '/images/gallery/markiza-1.jpg',
    category: 'markizy',
    date: '2023-06-15',
    featured: true,
    location: 'Lublin'
  },
  {
    id: 'markiza-2',
    title: 'Markiza balkonowa',
    description: 'Kompaktowa markiza balkonowa z manualnym sterowaniem.',
    image: '/images/gallery/markiza-2.jpg',
    category: 'markizy',
    date: '2023-05-10',
    location: 'Bydgoszcz'
  },
]; 