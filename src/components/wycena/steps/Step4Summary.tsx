import React from 'react';
import { Check, MapPin, Mail, Phone, Ruler } from 'lucide-react';
import { Partial } from '@types/react';

interface FormValues {
  szerokość?: string;
  głębokość?: string;
  wysokość?: string;
  zadaszenie?: string;
  kolor?: string;
  oświetlenieLED?: string;
  ścianyTarasu?: string;
  lokalizacja?: string;
  email?: string;
  telefon?: string;
  uwagi?: string;
}

interface Step4SummaryProps {
  data: Partial<FormValues>;
}

const Step4Summary: React.FC<Step4SummaryProps> = ({ data }) => {
  const displayColors: Record<string, string> = {
    'antracyt RAL 7016ST #353942': '#353942',
    'szary RAL 9007ST #909090': '#909090',
    'biały RAL 9016 #f9f9f9': '#f9f9f9',
    'czarny RAL 9005 #030303': '#030303',
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-aluraf-red mb-6">Podsumowanie</h3>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-800">
          <strong>👀 Sprawdź dane:</strong> Przed wysłaniem formularza, upewnij się, że wszystkie informacje są poprawne.
        </p>
      </div>

      {/* Wymiary */}
      <div className="border rounded-lg p-6 space-y-4">
        <h4 className="font-semibold text-lg flex items-center gap-2">
          <Ruler className="w-5 h-5 text-aluraf-red" />
          Wymiary zadaszenia
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <span className="text-sm text-gray-500">Szerokość</span>
            <p className="font-semibold text-lg">{data.szerokość} m</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Głębokość</span>
            <p className="font-semibold text-lg">{data.głębokość} m</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Wysokość</span>
            <p className="font-semibold text-lg">{data.wysokość} m</p>
          </div>
        </div>
      </div>

      {/* Opcje */}
      <div className="border rounded-lg p-6 space-y-4">
        <h4 className="font-semibold text-lg flex items-center gap-2">
          <Check className="w-5 h-5 text-aluraf-red" />
          Wybrane opcje
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-sm text-gray-500">Zadaszenie</span>
            <p className="font-semibold">{data.zadaszenie}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Kolor</span>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded border-2 border-gray-300"
                style={{ backgroundColor: displayColors[data.kolor || ''] }}
              />
              <p className="font-semibold">{data.kolor?.split('#')[0]}</p>
            </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Oświetlenie LED</span>
            <p className="font-semibold flex items-center gap-2">
              {data.oświetlenieLED === 'tak' ? (
                <><Check className="w-4 h-4 text-green-600" /> Tak</>
              ) : (
                <><span className="text-gray-400">✗</span> Nie</>
              )}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Ściany boczne</span>
            <p className="font-semibold">{data.ścianyTarasu}</p>
          </div>
        </div>
      </div>

      {/* Dane kontaktowe */}
      <div className="border rounded-lg p-6 space-y-4">
        <h4 className="font-semibold text-lg flex items-center gap-2">
          <Mail className="w-5 h-5 text-aluraf-red" />
          Dane kontaktowe
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <div>
              <span className="text-sm text-gray-500">Email</span>
              <p className="font-semibold">{data.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400" />
            <div>
              <span className="text-sm text-gray-500">Telefon</span>
              <p className="font-semibold">{data.telefon}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-400" />
            <div>
              <span className="text-sm text-gray-500">Lokalizacja</span>
              <p className="font-semibold">{data.lokalizacja}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uwagi */}
      {data.uwagi && (
        <div className="border rounded-lg p-6 space-y-4">
          <h4 className="font-semibold text-lg">Dodatkowe uwagi</h4>
          <p className="text-gray-700">{data.uwagi}</p>
        </div>
      )}

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>✓ Gotowe!</strong> Po kliknięciu "Wyślij formularz", nasz specjalista skontaktuje się z Tobą
          telefonicznie lub mailowo w ciągu 24 godzin roboczych.
        </p>
      </div>
    </div>
  );
};

export default Step4Summary;
