
import React from 'react';
import { Users, ThumbsUp, SquareStack, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <Users className="w-12 h-12" />,
      title: "Wieloletnie Doświadczenie",
      description: "Ponad dekada specjalistycznej wiedzy w branży zadaszeń aluminiowych"
    },
    {
      id: 2,
      icon: <ThumbsUp className="w-12 h-12" />,
      title: "Zadowoleni Klienci",
      description: "Setki pozytywnych opinii od zadowolonych klientów w całej Polsce"
    },
    {
      id: 3,
      icon: <SquareStack className="w-12 h-12" />,
      title: "Zrealizowane Projekty",
      description: "Tysiące udanych realizacji w różnych warunkach i lokalizacjach"
    },
    {
      id: 4,
      icon: <Star className="w-12 h-12" />,
      title: "Najwyższe Oceny",
      description: "5.0 gwiazdek na Facebook - najwyższa ocena od naszych klientów"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Dlaczego My?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Jesteśmy liderem w branży zadaszeń aluminiowych, oferując najwyższą jakość i profesjonalną obsługę</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-aluraf-red mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
