import React from 'react';
import { useForm } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check } from 'lucide-react';

interface Step2OptionsProps {
  form: ReturnType<typeof useForm>;
}

const Step2Options: React.FC<Step2OptionsProps> = ({ form }) => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-aluraf-red mb-6">Opcje zadaszenia</h3>

      {/* Typ zadaszenia */}
      <FormField
        control={form.control}
        name="zadaszenie"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base font-semibold">Rodzaj zadaszenia</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="poliwęglan mleczny" id="mleczny" />
                  <label htmlFor="mleczny" className="flex-1 cursor-pointer">
                    <span className="font-medium">Poliwęglan mleczny</span>
                  </label>
                </div>
                <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="poliwęglan transparentny" id="transparentny" />
                  <label htmlFor="transparentny" className="flex-1 cursor-pointer">
                    <span className="font-medium">Poliwęglan transparentny</span>
                  </label>
                </div>
                <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="szyba laminowana 442" id="szyba" />
                  <label htmlFor="szyba" className="flex-1 cursor-pointer">
                    <span className="font-medium">Szyba laminowana 44.2</span>
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Kolor */}
      <FormField
        control={form.control}
        name="kolor"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base font-semibold">Kolor konstrukcji</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="antracyt RAL 7016ST #353942" id="antracyt" />
                  <label htmlFor="antracyt" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-[#353942] border-2 border-gray-300"></div>
                    <span className="font-medium">Antracyt RAL 7016</span>
                  </label>
                </div>
                <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="szary RAL 9007ST #909090" id="szary" />
                  <label htmlFor="szary" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-[#909090] border-2 border-gray-300"></div>
                    <span className="font-medium">Szary RAL 9007</span>
                  </label>
                </div>
                <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="biały RAL 9016 #f9f9f9" id="bialy" />
                  <label htmlFor="bialy" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-[#f9f9f9] border-2 border-gray-300"></div>
                    <span className="font-medium">Biały RAL 9016</span>
                  </label>
                </div>
                <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="czarny RAL 9005 #030303" id="czarny" />
                  <label htmlFor="czarny" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-[#030303] border-2 border-gray-300"></div>
                    <span className="font-medium">Czarny RAL 9005</span>
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Oświetlenie LED */}
      <FormField
        control={form.control}
        name="oświetlenieLED"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base font-semibold">Oświetlenie LED</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2 border-2 rounded-lg px-6 py-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="tak" id="led-tak" />
                  <label htmlFor="led-tak" className="cursor-pointer font-medium">
                    Tak, chcę oświetlenie
                  </label>
                </div>
                <div className="flex items-center space-x-2 border-2 rounded-lg px-6 py-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="nie" id="led-nie" />
                  <label htmlFor="led-nie" className="cursor-pointer font-medium">
                    Nie, dziękuję
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Ściany tarasu */}
      <FormField
        control={form.control}
        name="ścianyTarasu"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base font-semibold">Ściany boczne</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2 border-2 rounded-lg px-6 py-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="bez zabudowy" id="bez-zabudowy" />
                  <label htmlFor="bez-zabudowy" className="cursor-pointer font-medium">
                    Bez zabudowy
                  </label>
                </div>
                <div className="flex items-center space-x-2 border-2 rounded-lg px-6 py-4 hover:border-aluraf-red transition-colors cursor-pointer">
                  <RadioGroupItem value="szyby przesuwne" id="szyby" />
                  <label htmlFor="szyby" className="cursor-pointer font-medium">
                    Szyby przesuwne
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Step2Options;
