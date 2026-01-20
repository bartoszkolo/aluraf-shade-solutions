import React from 'react';
import { useForm } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface Step1DimensionsProps {
  form: ReturnType<typeof useForm>;
}

const Step1Dimensions: React.FC<Step1DimensionsProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-aluraf-red mb-6">Wymiary zadaszenia</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          control={form.control}
          name="szerokość"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Szerokość (m)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="np. 4.5"
                  className="text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="głębokość"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Głębokość (m)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="np. 3.0"
                  className="text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="wysokość"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Wysokość (m)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="np. 2.5"
                  className="text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-blue-800">
          <strong>💡 Wskazówka:</strong> Jeśli nie jesteś pewien wymiarów, możesz podać przybliżone wartości.
          Nasz specjalista skontaktuje się z Tobą, aby je zweryfikować.
        </p>
      </div>
    </div>
  );
};

export default Step1Dimensions;
