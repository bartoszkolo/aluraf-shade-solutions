
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const testimonials = [
    {
      id: 1,
      content: "Zadaszenie zrealizowane! Cieszę się że akurat natrafiłam na p. Rafała, sympatyczny i pomocny przedsiębiorca. Profesjonalne podejście do klienta! Fachowa robota! Solidna konstrukcja! Dobra jakość materiałów! To wszystko przełożyło się na SUPER EFEKT!!! Jesteśmy bardzo zadowoleni z realizacji naszego zadaszenia!!!",
      author: "Iwona",
      location: "Klient indywidualny",
      rating: 5,
      source: "Facebook"
    },
    {
      id: 2,
      content: "Zamówienie i montaż zadaszenia tarasu przebiegły sprawnie i profesjonalnie. Fachowa obsługa, pełna rzetelności i zaangażowania. Efekt końcowy przerósł nasze oczekiwania – wszystko wykonane solidnie i na czas. Zdecydowanie polecam!",
      author: "Arkadiusz",
      location: "Właściciel domu",
      rating: 5,
      source: "Google"
    },
    {
      id: 3,
      content: "Firma Aluraf Tarasy zdecydowanie godna polecenia. Bardzo dobry kontakt z właścicielem, Panem Rafałem od pierwszego kontaktu, przez cały okres realizacji 2-etapowej inwestycji. Terminy realizacji etapów zgodne z wcześniejszymi ustaleniami, szybki i bezproblemowy montaż. Jakość materiałów i wykonania pergoli na najwyższym poziomie.",
      author: "Rafał",
      location: "Inwestor 2-etapowy",
      rating: 5,
      source: "Google"
    },
    {
      id: 4,
      content: "Rewelacyjna robota! Zadaszenie tarasu wykonane perfekcyjnie — świetna jakość, wszystko na czas i super kontakt na każdym etapie. Widać pełen profesjonalizm i zaangażowanie. Z pełnym przekonaniem polecam tę firmę każdemu!",
      author: "Łukasz",
      location: "Właściciel domu",
      rating: 5,
      source: "Google"
    },
    {
      id: 5,
      content: "Polecam firmę! Zadaszenie zrobione bardzo profesjonalnie i solidnie! Pan Rafał świetny specjalista, dokładnie wszystko wytłumaczył i doradził! Jesteśmy bardzo zadowoleni!! Widząc jak to świetnie wygląda zdecydowaliśmy się na zrobienie ogrodu zimowego.",
      author: "Natalia",
      location: "Klientka indywidualna",
      rating: 5,
      source: "Facebook"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  const next = () => {
    sliderRef?.slickNext();
  };

  const previous = () => {
    sliderRef?.slickPrev();
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-aluraf-red mb-4 font-bold">
            OPINIE KLIENTÓW
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
            Zadowolenie Klienta to Nasz Priorytet
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zaufanie ponad 500 zadowolonych klientów potwierdza naszą jakość i profesjonalizm
          </p>
        </div>

        {/* Ratings Badge */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <div className="flex items-center gap-1">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-white font-bold text-lg">5.0</span>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Google</p>
              <p className="text-gray-300 text-xs">Ocena klientów</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <div className="flex items-center gap-1">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-white font-bold text-lg">5.0</span>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Facebook</p>
              <p className="text-gray-300 text-xs">Ocena klientów</p>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Slider ref={setSliderRef} {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-aluraf-red opacity-50" />
                  </div>

                  {/* Rating & Source */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {testimonial.source}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={previous}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-aluraf-red hover:border-aluraf-red transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-aluraf-red hover:border-aluraf-red transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Dołącz do grona naszych zadowolonych klientów
          </p>
          <a
            href="/wycena"
            className="inline-flex items-center gap-2 px-8 py-4 bg-aluraf-red text-white font-display font-bold rounded-md hover:bg-red-700 hover:shadow-xl transition-all duration-300"
          >
            Zamów Bezpłatną Wycenę
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
