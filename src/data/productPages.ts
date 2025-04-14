export interface ProductPageData {
  id: string; // Matches category ID in gallery.ts
  name: string; // Matches category name in gallery.ts
  title: string; // Page title
  heroImage: string; // Path to hero image for this page
  description: string; // HTML content describing the product
  ctaText?: string;
}

export const productPagesData: ProductPageData[] = [
  {
    id: 'zadaszenia-tarasu',
    name: 'Zadaszenia tarasu',
    title: 'Nowoczesne Zadaszenia Tarasowe',
    heroImage: '/images/oferta/hero-zadaszenia.jpg',
    description: `
      <p class="text-lg mb-6">Nasze zadaszenia tarasowe to idealne rozwiązanie dla osób ceniących komfort i elegancję. Wykonane z najwyższej jakości aluminium, gwarantują trwałość na lata i odporność na warunki atmosferyczne.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Główne zalety:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Ochrona przed słońcem, deszczem i śniegiem</li>
        <li>Nowoczesny design dopasowany do każdej architektury</li>
        <li>Możliwość integracji oświetlenia LED i systemów przesuwnych</li>
        <li>Konstrukcja aluminiowa niewymagająca konserwacji</li>
        <li>Dostępne różne rodzaje pokrycia dachowego (poliwęglan, szkło)</li>
      </ul>
      <p class="text-gray-700">Dzięki zadaszeniu tarasu zyskujesz dodatkową przestrzeń do wypoczynku, niezależnie od pogody. Skontaktuj się z nami, aby dopasować idealne rozwiązanie do Twoich potrzeb.</p>
    `,
    ctaText: 'Zobacz, jak możemy zadaszyć Twój taras'
  },
  {
    id: 'przeszklenia',
    name: 'Przeszklenia',
    title: 'Systemy Przeszkleń Tarasowych i Balkonowych',
    heroImage: '/images/oferta/hero-przeszklenia.jpg',
    description: `
      <p class="text-lg mb-6">Systemy przeszkleń pozwalają na komfortowe korzystanie z tarasu lub balkonu przez cały rok. Oferujemy nowoczesne rozwiązania ramowe i bezramowe, które zapewniają ochronę przed wiatrem i deszczem, nie ograniczając widoku.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Nasze systemy przeszkleń:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Systemy szyb przesuwnych (ramowe i bezramowe)</li>
        <li>Szkło hartowane o grubości 8mm lub 10mm</li>
        <li>Minimalistyczne profile aluminiowe</li>
        <li>Wysoka izolacyjność akustyczna</li>
        <li>Możliwość zastosowania na tarasach, balkonach i w loggiach</li>
      </ul>
      <p class="text-gray-700">Przekształć swój taras w funkcjonalny ogród zimowy lub osłoniętą przestrzeń wypoczynkową dzięki naszym systemom przeszkleń.</p>
    `,
  },
  {
    id: 'carporty',
    name: 'Wiaty samochodowe/Carporty',
    title: 'Nowoczesne Wiaty Garażowe i Carporty',
    heroImage: '/images/oferta/hero-carporty.jpg',
    description: `
      <p class="text-lg mb-6">Carport aluminiowy to stylowa i praktyczna alternatywa dla tradycyjnego garażu. Chroni Twój samochód przed niekorzystnymi warunkami atmosferycznymi, jednocześnie stanowiąc estetyczny element posesji.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Dlaczego warto wybrać carport Aluraf?</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Lekka i wytrzymała konstrukcja aluminiowa</li>
        <li>Odporność na korozję i warunki pogodowe</li>
        <li>Szybki montaż i brak konieczności uzyskiwania pozwoleń (w większości przypadków)</li>
        <li>Możliwość dostosowania wymiarów i kolorystyki</li>
        <li>Opcjonalne zintegrowane oświetlenie LED i schowki</li>
      </ul>
      <p class="text-gray-700">Zapewnij swojemu samochodowi najlepszą ochronę w nowoczesnym stylu. Oferujemy carporty jedno- i wielostanowiskowe.</p>
    `,
  },
  {
    id: 'wiatrolapy',
    name: 'Wiatrołapy',
    title: 'Eleganckie i Funkcjonalne Wiatrołapy',
    heroImage: '/images/oferta/hero-wiatrolapy.jpg',
    description: `
      <p class="text-lg mb-6">Wiatrołap to doskonały sposób na zwiększenie komfortu termicznego w domu i ochronę wejścia przed wiatrem, deszczem oraz śniegiem. Nasze konstrukcje aluminiowo-szklane łączą funkcjonalność z estetyką.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Cechy naszych wiatrołapów:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Indywidualne projekty dopasowane do architektury budynku</li>
        <li>Konstrukcja z profili aluminiowych malowanych proszkowo</li>
        <li>Wypełnienie ze szkła bezpiecznego (hartowanego lub laminowanego)</li>
        <li>Poprawa izolacji termicznej i akustycznej wejścia</li>
        <li>Podniesienie estetyki i wartości nieruchomości</li>
      </ul>
      <p class="text-gray-700">Stwórz eleganckie i praktyczne wejście do swojego domu dzięki nowoczesnym wiatrołapom Aluraf.</p>
    `,
  },
  {
    id: 'pergole-lamelowe',
    name: 'Pergole lamelowe',
    title: 'Innowacyjne Pergole Bioklimatyczne Lamelowe',
    heroImage: '/images/oferta/hero-pergole.jpg',
    description: `
      <p class="text-lg mb-6">Pergole bioklimatyczne z ruchomymi lamelami dachowymi to szczyt nowoczesnej technologii zadaszeń. Pozwalają na pełną kontrolę nad światłem słonecznym i wentylacją, tworząc idealne warunki do wypoczynku na tarasie przez cały rok.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Zalety pergoli lamelowych:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Regulowane lamele dachowe (kąt nachylenia 0-140 stopni)</li>
        <li>Pełna ochrona przed deszczem (po zamknięciu lamel)</li>
        <li>Możliwość integracji z systemami smart home, oświetleniem LED, promiennikami ciepła</li>
        <li>System odprowadzania wody zintegrowany w słupach</li>
        <li>Wytrzymała i stabilna konstrukcja aluminiowa</li>
      </ul>
      <p class="text-gray-700">Zainwestuj w komfort i nowoczesność. Pergola lamelowa Aluraf to luksusowa przestrzeń na świeżym powietrzu.</p>
    `,
  },
  {
    id: 'ruchome-lamele',
    name: 'Ruchome lamele',
    title: 'Systemy Ruchomych Lameli Ściennych',
    heroImage: '/images/oferta/hero-lamele.jpg',
    description: `
      <p class="text-lg mb-6">Ruchome lamele ścienne (żaluzje fasadowe) to nowoczesne rozwiązanie pozwalające na dynamiczną kontrolę nasłonecznienia i prywatności. Stanowią efektowny element architektoniczny elewacji.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Funkcjonalność ruchomych lameli:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Precyzyjna regulacja kąta nachylenia lameli</li>
        <li>Ochrona przed nadmiernym nasłonecznieniem i nagrzewaniem wnętrz</li>
        <li>Zapewnienie prywatności przy jednoczesnym dostępie światła</li>
        <li>Dostępne lamele aluminiowe lub drewnopodobne</li>
        <li>Możliwość sterowania manualnego lub elektrycznego</li>
      </ul>
      <p class="text-gray-700">Podnieś komfort i estetykę swojego budynku dzięki systemom ruchomych lameli Aluraf.</p>
    `,
  },
  {
    id: 'rolety-zip',
    name: 'Rolety zip',
    title: 'Nowoczesne Rolety Zewnętrzne typu ZIP',
    heroImage: '/images/oferta/hero-rolety.jpg',
    description: `
      <p class="text-lg mb-6">Rolety ZIP to innowacyjny system osłon zewnętrznych, który doskonale chroni przed słońcem, wiatrem i insektami. Dzięki specjalnym prowadnicom ZIP, tkanina jest zawsze idealnie napięta.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Kluczowe cechy rolet ZIP:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Wysoka odporność na wiatr (nawet do 140 km/h)</li>
        <li>Doskonała ochrona termiczna - redukcja kosztów klimatyzacji</li>
        <li>Ochrona przed promieniami UV i insektami</li>
        <li>Szeroka gama tkanin (transparentne, zaciemniające)</li>
        <li>Możliwość sterowania ręcznego lub elektrycznego (w tym smart home)</li>
      </ul>
      <p class="text-gray-700">Rolety ZIP to idealne uzupełnienie pergoli, zadaszeń tarasowych oraz okien, zapewniające komfort i prywatność.</p>
    `,
  },
  {
    id: 'markizy',
    name: 'Markizy',
    title: 'Eleganckie Markizy Tarasowe i Balkonowe',
    heroImage: '/images/oferta/hero-markizy.jpg',
    description: `
      <p class="text-lg mb-6">Markizy to klasyczne i sprawdzone rozwiązanie do ochrony przed słońcem na tarasach i balkonach. Oferujemy szeroką gamę markiz w kasecie, półkasecie oraz bez kasety, z bogatym wyborem tkanin.</p>
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Rodzaje i zalety markiz:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
        <li>Markizy tarasowe (w kasecie, półkasecie, bez kasety)</li>
        <li>Markizy balkonowe i okienne</li>
        <li>Wysokiej jakości tkaniny odporne na blaknięcie i warunki atmosferyczne</li>
        <li>Możliwość sterowania manualnego lub elektrycznego (pilot, czujniki pogodowe)</li>
        <li>Regulacja kąta nachylenia</li>
      </ul>
      <p class="text-gray-700">Ciesz się cieniem i komfortem na swoim tarasie dzięki estetycznym i trwałym markizom Aluraf.</p>
    `,
  },
]; 