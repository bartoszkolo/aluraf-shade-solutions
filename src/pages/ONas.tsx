
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Clock, Check } from 'lucide-react';

const ONas = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-800">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80')] bg-cover bg-center"></div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-6xl font-bold mb-4 font-display">O Nas</h1>
          <p className="text-white text-xl">Poznaj naszą historię i wartości</p>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-aluraf-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Indywidualność</h3>
              <p className="text-gray-600">Poznajemy Twoje potrzeby, a następnie proponujemy rozwiązanie, które idealnie wpisze się w Twoje oczekiwania.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-aluraf-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Realizacja</h3>
              <p className="text-gray-600">Wybrany model przenosimy z projektu do rzeczywistości, montując go na Twoim tarasie lub w ogrodzie, z pełną dbałością o detale.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-aluraf-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Relaks</h3>
              <p className="text-gray-600">Pozostaje Ci tylko jedno – delektować się chwilami relaksu pod Twoją wymarzoną pergolą w towarzystwie najbliższych!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 font-display">Bezpośredni dystrybutor profili aluminiowych</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Współpracujemy z producentami profili aluminiowych. Jako bezpośredni dystrybutor, oferujemy produkty wykonane z trwałych i estetycznych materiałów, które spełniają najwyższe standardy jakości. Dzięki tej współpracy dostarczamy innowacyjne rozwiązania pozwalające tworzyć pergole idealnie dopasowane do Państwa potrzeb.
            </p>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-display">PERGOLE, KTÓRE ŁĄCZĄ NOWOCZESNY STYL I NIEZAWODNĄ FUNKCJONALNOŚĆ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">
                Nasze pergole to doskonałe połączenie estetyki i praktyczności, które podnoszą komfort każdej przestrzeni. Dzięki bogatej ofercie produktowej możemy zaproponować pergolę idealnie dopasowaną do Twojego domu – jako przedłużenie jego bryły – lub taką, która harmonijnie wypełni przestrzeń w ogrodzie, tworząc stylowe i spójne otoczenie.
              </p>
              <p className="text-gray-600">
                Produkty wykonujemy z najwyższej jakości ekstrudowanego aluminium, które wyróżnia się trwałością, eleganckim wyglądem i precyzyjnym wykończeniem. Dzięki temu nasze pergole zachowują swój design i niezawodność przez wiele lat, stając się inwestycją w styl i wygodę na lata.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Nowoczesne Zadaszenia</h3>
                <p className="text-gray-600">Innowacyjne rozwiązania dla Twojej przestrzeni</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Pergole Lamelowe</h3>
                <p className="text-gray-600">Elegancja i funkcjonalność w jednym</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Carporty</h3>
                <p className="text-gray-600">Stylowa ochrona dla Twojego pojazdu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-display">Gotowy na stworzenie swojej wymarzonej przestrzeni?</h2>
          <p className="text-xl mb-8">Skontaktuj się z nami i rozpocznij swoją podróż do idealnego zadaszenia.</p>
          <Link to="/kontakt" className="inline-block bg-aluraf-red text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-red-700 transition-colors">
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ONas;
