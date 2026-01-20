import React from 'react';
import { useForm } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

interface Step3ContactProps {
  form: ReturnType<typeof useForm>;
}

const Step3Contact: React.FC<Step3ContactProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-aluraf-red mb-6">Dane kontaktowe</h3>

      {/* Email */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Adres email
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="twoj@email.com"
                className="text-lg"
                {...field}
              />
            </FormControl>
            <FormMessage />
            <p className="text-sm text-gray-500">
              Na ten adres prześlemy wycenę i dodatkowe informacje
            </p>
          </FormItem>
        )}
      />

      {/* Telefon */}
      <FormField
        control={form.control}
        name="telefon"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Numer telefonu
            </FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="np. 123 456 789"
                className="text-lg"
                {...field}
              />
            </FormControl>
            <FormMessage />
            <p className="text-sm text-gray-500">
              Numer telefonu pomoże nam szybciej skontaktować się z Tobą
            </p>
          </FormItem>
        )}
      />

      {/* Lokalizacja */}
      <FormField
        control={form.control}
        name="lokalizacja"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Lokalizacja inwestycji
            </FormLabel>
            <FormControl>
              <Input
                placeholder="np. Gniezno, ul. Przykładowa 1"
                className="text-lg"
                {...field}
              />
            </FormControl>
            <FormMessage />
            <p className="text-sm text-gray-500">
              Podaj miasto i ewentualnie adres montażu
            </p>
          </FormItem>
        )}
      />

      {/* Uwagi */}
      <FormField
        control={form.control}
        name="uwagi"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">Dodatkowe uwagi (opcjonalne)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Opisz szczegóły projektu, pytania lub oczekiwania..."
                className="text-lg min-h-[120px] resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
            <p className="text-sm text-gray-500">
              Tutaj możesz dodać informacje o szczególnych wymaganiach lub pytaniach
            </p>
          </FormItem>
        )}
      />

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-green-800">
          <strong>✓ Bezpieczeństwo danych:</strong> Twoje dane są bezpieczne i będą użyte wyłącznie
          do celów kontaktowych związanych z Twoim zapytaniem. Nie udostępniamy ich osobom trzecim.
        </p>
      </div>
    </div>
  );
};

export default Step3Contact;
