
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Perfekcyjna obsługa i produkt najwyższej jakości! Pergola idealnie wpasowała się w mój ogród, a możliwość regulacji lameli to prawdziwy hit. Polecam każdemu!",
      author: "DANUTA, PIASECZNO"
    },
    {
      id: 2,
      content: "Pergola tkaninowa, którą zamontowano u mnie, to połączenie funkcjonalności i stylu. Montaż przebiegł szybko i profesjonalnie!",
      author: "ŁUKASZ, SIEDLCE"
    },
    {
      id: 3,
      content: "Nowoczesny design pergoli lamelowej i możliwość dopasowania światła to coś, czego szukałem. Obsługa klienta na najwyższym poziomie.",
      author: "WIKTOR, OTWOCK"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-300 mb-4 font-medium">OPINIE NASZYCH KLIENTÓW</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Co Mówią o Nas Klienci</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="text-lg mb-6">"{testimonial.content}"</p>
              <p className="font-semibold uppercase tracking-wider">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
