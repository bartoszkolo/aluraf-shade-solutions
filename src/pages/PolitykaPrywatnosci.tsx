import React from 'react';
import Layout from '../components/layout/Layout';
import { Shield, Cookie, Eye, Lock, Settings } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import HelmetWrapper from '../components/seo/HelmetWrapper';
import { getRouteMetadata } from '@/lib/seo';

const PolitykaPrywatnosci = () => {
  const currentDate = new Date().toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const metadata = getRouteMetadata('/polityka-prywatnosci');

  return (
    <Layout>
      <HelmetWrapper
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-aluraf-red/10 rounded-full">
              <Shield className="w-8 h-8 text-aluraf-red" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
              Polityka Prywatności
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Ostatnia aktualizacja: {currentDate}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <ScrollReveal>
            <section className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-aluraf-red" />
                Informacje ogólne
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  <strong>Operatorem Serwisu aluraf.pl</strong> jest Aluraf Rafał Grzelak z siedzibą w Goślinowie, 62-200 Gniezno, woj. wielkopolskie.
                </p>
                <p>
                  Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Poprzez dobrowolnie wprowadzone w formularzach informacje.</li>
                  <li>Poprzez zapisywanie w urządzeniach końcowych pliki cookie (tzw. "ciasteczka").</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <section className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-aluraf-red" />
                Informacje w formularzach
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Serwis zbiera informacje podane dobrowolnie przez użytkownika.</p>
                <p>Serwis może zapisać ponadto informacje o parametrach połączenia (oznaczenie czasu, adres IP).</p>
                <p>Dane w formularzu nie są udostępniane podmiotom trzecim inaczej, niż za zgodą użytkownika.</p>
                <p>
                  Dane podane w formularzach są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>przesłania zapytania przez formularz kontaktowy</li>
                  <li>przesłania bezpłatnej wyceny</li>
                  <li>obsługi zgłoszeń serwisowych</li>
                  <li>kontaktu handlowego</li>
                </ul>
                <p>
                  Dane podane w formularzach mogą być przekazane podmiotom technicznie realizującym niektóre usługi – w szczególności dotyczy to operatorów płatności, dostawców usług hostingowych lub innych podmiotów, z którymi Operator Serwisu w tym zakresie współpracuje.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Cookie className="w-6 h-6 text-aluraf-red" />
                Informacja o plikach cookies
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Serwis korzysta z plików cookies.</p>
                <p>
                  <strong>Pliki cookies</strong> (tzw. „ciasteczka") stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                </p>
                <p>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</p>
                <p>Pliki cookies wykorzystywane są w następujących celach:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;</li>
                  <li>utrzymania sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
                  <li>określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach reklamowych, w szczególności sieci Google.</li>
                </ul>
                <p className="mt-4">
                  W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: <strong>„sesyjne"</strong> (session cookies) oraz <strong>„stałe"</strong> (persistent cookies).
                </p>
                <p>
                  Cookies „sesyjne" są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe" pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
                </p>
                <p className="mt-4">
                  Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies.
                </p>
                <p>
                  Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <section className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-aluraf-red" />
                Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.
                </p>
                <p className="font-semibold text-gray-900 mt-4">W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową/system i postępuj zgodnie z instrukcjami:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647?hl=pl' },
                    { name: 'Firefox', url: 'https://support.mozilla.org/pl/kb/Włączanie+i+wyłączanie+obsługi+ciasteczek' },
                    { name: 'Safari', url: 'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac' },
                    { name: 'Edge', url: 'https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plikow-cookie-i-zarzadzanie-nimi' },
                    { name: 'Opera', url: 'https://help.opera.com/pl/latest/web-preferences/#cookies' },
                  ].map((browser) => (
                    <a
                      key={browser.name}
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-aluraf-red/10 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-aluraf-red rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-900 font-medium group-hover:text-aluraf-red">{browser.name}</span>
                      <span className="ml-auto text-gray-400 group-hover:text-aluraf-red">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <section className="bg-aluraf-red/5 border-l-4 border-aluraf-red rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Masz pytania?</h3>
              <p className="text-gray-700 mb-4">
                W przypadku pytań dotyczących polityki prywatności, prosimy o kontakt przez formularz kontaktowy lub bezpośrednio:
              </p>
              <div className="space-y-2">
                <p className="text-gray-900">
                  <strong>Email:</strong> kontakt@aluraf.pl
                </p>
                <p className="text-gray-900">
                  <strong>Telefon:</strong> +48 698 368 994
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Niniejsza Polityka Prywatności obowiązuje od dnia {currentDate}
                </p>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default PolitykaPrywatnosci;
