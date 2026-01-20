
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Skontaktuj Się z Nami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chcesz dowiedzieć się więcej o naszych produktach lub otrzymać bezpłatną wycenę?
            Jesteśmy do Twojej dyspozycji!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Card 1 */}
          <a
            href="tel:+48698368994"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-aluraf-red"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-aluraf-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-aluraf-red transition-colors duration-300">
                <Phone className="w-6 h-6 text-aluraf-red group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                Główna Linia
              </p>
              <p className="text-xl font-bold text-gray-900 mb-1">
                +48 698 368 994
              </p>
              <p className="text-sm text-gray-500">
                Pon-Sob 8-17
              </p>
            </div>
          </a>

          {/* Phone Card 2 */}
          <a
            href="tel:+48698732854"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-aluraf-red"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-aluraf-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-aluraf-red transition-colors duration-300">
                <Phone className="w-6 h-6 text-aluraf-red group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                Linia Zapytań
              </p>
              <p className="text-xl font-bold text-gray-900 mb-1">
                +48 698 732 854
              </p>
              <p className="text-sm text-gray-500">
                Pon-Sob 8-17
              </p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:kontakt@aluraf.pl"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-aluraf-red"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-aluraf-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-aluraf-red transition-colors duration-300">
                <Mail className="w-6 h-6 text-aluraf-red group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                Email
              </p>
              <p className="text-lg font-bold text-gray-900 mb-1 break-all">
                kontakt@aluraf.pl
              </p>
              <p className="text-sm text-gray-500">
                Odpowiedź w 24h
              </p>
            </div>
          </a>

          {/* Location Card */}
          <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-aluraf-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-aluraf-red transition-colors duration-300">
                <MapPin className="w-6 h-6 text-aluraf-red group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                Lokalizacja
              </p>
              <p className="text-lg font-bold text-gray-900 mb-1">
                Goślinowo
              </p>
              <p className="text-sm text-gray-500">
                62-200 Gniezno
              </p>
            </div>
          </div>
        </div>

        {/* Working Hours Bar */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Godziny Pracy</p>
                <p className="text-sm text-gray-600">Biuro obsługi klienta</p>
              </div>
            </div>
            <div className="flex-1 text-center md:text-right">
              <p className="text-gray-900 font-medium">
                <span className="font-semibold">Pon-Pt:</span> 8:00 - 16:30
                <span className="mx-3 text-gray-300">|</span>
                <span className="font-semibold">Sob:</span> 9:00 - 13:30
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Zacznij od bezpłatnej wyceny - zobaczysz ile możesz zaoszczędzić!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/wycena"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-aluraf-red text-white font-display font-bold rounded-md hover:bg-red-700 hover:shadow-xl transition-all duration-300"
            >
              BEZPŁATNA WYCENA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-display font-semibold rounded-md border-2 border-gray-300 hover:border-aluraf-red hover:text-aluraf-red transition-all duration-300"
            >
              Formularz Kontaktowy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
