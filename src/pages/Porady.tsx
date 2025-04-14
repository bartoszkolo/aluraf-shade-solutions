
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    category: 'TRENDY 2024',
    title: 'Pergole Bioklimatyczne - Przyszłość Architektury Ogrodowej',
    excerpt: 'Odkryj, dlaczego pergole bioklimatyczne stają się nieodzownym elementem nowoczesnych domów i ogrodów. Poznaj ich innowacyjne funkcje i zalety.',
    image: 'https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80',
    date: '15 Marca 2024',
    readTime: '5 min'
  },
  {
    id: '2',
    category: 'TECHNOLOGIA',
    title: 'Inteligentne Sterowanie Zadaszeniem - Komfort na Wyciągnięcie Ręki',
    excerpt: 'Zaawansowane systemy sterowania, integracja z smart home i automatyka pogodowa - wszystko, co musisz wiedzieć o nowoczesnych rozwiązaniach.',
    image: 'https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80',
    date: '10 Marca 2024',
    readTime: '4 min'
  },
  {
    id: '3',
    category: 'DESIGN',
    title: 'Magia Światła - Oświetlenie LED w Pergolach',
    excerpt: 'Jak stworzyć magiczną atmosferę na tarasie dzięki odpowiedniemu oświetleniu? Poznaj najnowsze trendy w oświetleniu pergoli.',
    image: 'https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80',
    date: '5 Marca 2024',
    readTime: '3 min'
  },
  {
    id: '4',
    category: 'PORADY',
    title: 'Przeszklenia w Pergolach - Jak Wybrać Odpowiednie Rozwiązanie?',
    excerpt: 'Kompleksowy przewodnik po systemach przeszkleń do pergoli. Od szkła hartowanego po systemy przesuwne - poznaj wszystkie opcje.',
    image: 'https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80',
    date: '28 Lutego 2024',
    readTime: '6 min'
  },
  {
    id: '5',
    category: 'PORADNIK',
    title: 'Konserwacja Pergoli Aluminiowej - Praktyczny Poradnik',
    excerpt: 'Jak dbać o pergolę aluminiową, aby służyła przez lata? Sprawdzone metody czyszczenia i konserwacji konstrukcji aluminiowych.',
    image: 'https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80',
    date: '20 Lutego 2024',
    readTime: '5 min'
  },
  {
    id: '6',
    category: 'SEZONOWE',
    title: 'Pergola Przez Cały Rok - Przygotowanie na Zimę',
    excerpt: 'Jak wykorzystać pergolę w sezonie zimowym? Praktyczne wskazówki dotyczące przygotowania zadaszenia na trudne warunki atmosferyczne.',
    image: 'https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80',
    date: '15 Lutego 2024',
    readTime: '4 min'
  }
];

const Porady = () => {
  return (
    <Layout>
      {/* Blog Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Poznaj najnowsze trendy w zadaszeniach tarasowych, inspirujące realizacje i praktyczne porady dotyczące pergoli aluminiowych.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="text-red-600 text-sm font-semibold mb-2">{post.category}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/porady/${post.id}`} className="text-red-600 font-medium hover:text-red-700">
                  Czytaj więcej →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Porady;
