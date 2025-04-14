
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link, useParams } from 'react-router-dom';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  content: React.ReactNode;
  image: string;
  date: string;
  readTime: string;
}

const blogPosts: Record<string, BlogPost> = {
  '1': {
    id: '1',
    category: 'TRENDY 2024',
    title: 'Pergole Bioklimatyczne - Przyszłość Architektury Ogrodowej',
    content: (
      <>
        <p className="text-xl text-gray-600 mb-8">
          Pergole bioklimatyczne to innowacyjne rozwiązanie, które rewolucjonizuje sposób, w jaki korzystamy z przestrzeni ogrodowej. W tym artykule przyjrzymy się najnowszym trendom i rozwiązaniom technicznym, które sprawiają, że pergole stają się nieodzownym elementem nowoczesnej architektury.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Co to jest pergola bioklimatyczna?</h2>
        <p className="text-gray-600 mb-8">
          Pergola bioklimatyczna to zaawansowane technologicznie zadaszenie tarasu, które pozwala na pełną kontrolę nad warunkami atmosferycznymi w strefie wypoczynkowej. Głównym elementem są obrotowe lamele, które można dostosować do aktualnych potrzeb i warunków pogodowych.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kluczowe zalety pergoli bioklimatycznych</h2>
        <ul className="list-disc list-inside text-gray-600 mb-8 space-y-4">
          <li>Regulacja nasłonecznienia i wentylacji</li>
          <li>Ochrona przed deszczem i wiatrem</li>
          <li>Możliwość integracji z systemami smart home</li>
          <li>Energooszczędność i ekologiczne rozwiązania</li>
          <li>Elegancki, nowoczesny design</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Innowacyjne funkcje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Automatyka pogodowa</h3>
            <p className="text-gray-600">
              Czujniki deszczu, wiatru i temperatury automatycznie dostosowują ustawienia pergoli do warunków atmosferycznych.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Oświetlenie LED</h3>
            <p className="text-gray-600">
              Zintegrowane oświetlenie LED tworzy nastrojową atmosferę i umożliwia korzystanie z tarasu po zmroku.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Podsumowanie</h2>
        <p className="text-gray-600 mb-12">
          Pergole bioklimatyczne to przyszłość architektury ogrodowej. Łączą w sobie nowoczesny design, zaawansowaną technologię i praktyczne rozwiązania, które sprawiają, że taras staje się dodatkowym, funkcjonalnym pomieszczeniem domu.
        </p>
      </>
    ),
    image: 'https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80',
    date: '15 Marca 2024',
    readTime: '5 min'
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPosts[id] : undefined;

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Post nie znaleziony</h1>
          <p className="text-xl text-gray-600 mb-8">
            Przepraszamy, nie mogliśmy znaleźć żądanego artykułu.
          </p>
          <Link to="/porady" className="text-red-600 font-medium hover:text-red-700">
            Wróć do bloga →
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Article Header */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-red-600 text-sm font-semibold mb-4">{post.category}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <span className="mr-4">{post.date}</span>
            <span className="mr-4">•</span>
            <span>Czas czytania: {post.readTime}</span>
          </div>
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg shadow-lg mb-8" />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose lg:prose-xl">
          {post.content}

          {/* Call to Action */}
          <div className="bg-gray-900 text-white p-8 rounded-lg text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Zainteresowany pergolą bioklimatyczną?</h3>
            <p className="mb-6">Skontaktuj się z nami, aby otrzymać bezpłatną wycenę i konsultację</p>
            <Link to="/wycena" className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-lg font-medium">
              Otrzymaj wycenę
            </Link>
          </div>
        </article>

        {/* Share Buttons */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Udostępnij artykuł</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Podobne artykuły</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80" alt="Oświetlenie LED" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-red-600 text-sm font-semibold mb-2">DESIGN</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Magia Światła - Oświetlenie LED w Pergolach</h3>
                <Link to="/porady/3" className="text-red-600 font-medium hover:text-red-700">Czytaj więcej →</Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80" alt="Inteligentne Sterowanie" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-red-600 text-sm font-semibold mb-2">TECHNOLOGIA</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inteligentne Sterowanie Zadaszeniem</h3>
                <Link to="/porady/2" className="text-red-600 font-medium hover:text-red-700">Czytaj więcej →</Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80" alt="Przeszklenia" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-red-600 text-sm font-semibold mb-2">PORADY</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Przeszklenia w Pergolach</h3>
                <Link to="/porady/4" className="text-red-600 font-medium hover:text-red-700">Czytaj więcej →</Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
