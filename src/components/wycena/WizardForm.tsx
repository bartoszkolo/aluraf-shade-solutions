import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Step1Dimensions from './steps/Step1Dimensions';
import Step2Options from './steps/Step2Options';
import Step3Contact from './steps/Step3Contact';
import Step4Summary from './steps/Step4Summary';

const formSchema = z.object({
  szerokość: z.string().min(1, { message: "Szerokość jest wymagana" }),
  głębokość: z.string().min(1, { message: "Głębokość jest wymagana" }),
  wysokość: z.string().min(1, { message: "Wysokość jest wymagana" }),
  zadaszenie: z.enum(["poliwęglan mleczny", "poliwęglan transparentny", "szyba laminowana 442"]),
  kolor: z.enum(["antracyt RAL 7016ST #353942", "szary RAL 9007ST #909090", "biały RAL 9016 #f9f9f9", "czarny RAL 9005 #030303"]),
  oświetlenieLED: z.enum(["tak", "nie"]),
  ścianyTarasu: z.enum(["bez zabudowy", "szyby przesuwne"]),
  lokalizacja: z.string().min(1, { message: "Lokalizacja jest wymagana" }),
  uwagi: z.string().optional(),
  email: z.string().email({ message: "Nieprawidłowy adres email" }),
  telefon: z.string().min(9, { message: "Numer telefonu musi mieć minimum 9 cyfr" }),
});

type FormValues = z.infer<typeof formSchema>;

interface Step {
  id: number;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  { id: 1, title: 'Wymiary', description: 'Podaj wymiary zadaszenia' },
  { id: 2, title: 'Opcje', description: 'Wybierz materiały i dodatki' },
  { id: 3, title: 'Kontakt', description: 'Twoje dane kontaktowe' },
  { id: 4, title: 'Podsumowanie', description: 'Zweryfikuj dane' },
];

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormValues>>({});
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      szerokość: "",
      głębokość: "",
      wysokość: "",
      zadaszenie: "poliwęglan mleczny",
      kolor: "antracyt RAL 7016ST #353942",
      oświetlenieLED: "nie",
      ścianyTarasu: "bez zabudowy",
      lokalizacja: "",
      uwagi: "",
      email: "",
      telefon: "",
    },
  });

  const progress = (currentStep / STEPS.length) * 100;

  const validateCurrentStep = async (): Promise<boolean> => {
    const fieldsToValidate = currentStep === 1
      ? ['szerokość', 'głębokość', 'wysokość']
      : currentStep === 2
      ? ['zadaszenie', 'kolor', 'oświetlenieLED', 'ścianyTarasu']
      : currentStep === 3
      ? ['lokalizacja', 'email', 'telefon']
      : [];

    if (fieldsToValidate.length === 0) return true;

    const result = await form.trigger(fieldsToValidate as any);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();

    if (isValid) {
      setFormData({ ...formData, ...form.getValues() });
      if (currentStep < STEPS.length) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      toast({
        variant: "destructive",
        title: "Błąd walidacji",
        description: "Proszę wypełnić wszystkie wymagane pola.",
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);

    toast({
      title: "Formularz wysłany!",
      description: "Dziękujemy za wypełnienie formularza. Skontaktujemy się wkrótce.",
    });

    // Reset form after submission
    form.reset();
    setFormData({});
    setCurrentStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-3">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={`text-sm font-medium transition-colors ${
                currentStep >= step.id ? 'text-aluraf-red' : 'text-gray-400'
              }`}
            >
              <span className="hidden sm:inline">{step.title}</span>
              <span className="sm:hidden">Krok {step.id}</span>
            </div>
          ))}
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-600 mt-2">
          {STEPS[currentStep - 1].description}
        </p>
      </div>

      {/* Form Steps with Animation */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && <Step1Dimensions form={form} />}
              {currentStep === 2 && <Step2Options form={form} />}
              {currentStep === 3 && <Step3Contact form={form} />}
              {currentStep === 4 && <Step4Summary data={formData} />}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Wstecz
            </button>

            {currentStep < STEPS.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-aluraf-red text-white rounded-md hover:bg-red-700 hover:shadow-lg transition-all duration-300 font-medium"
              >
                Dalej
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-aluraf-red text-white rounded-md hover:bg-red-700 hover:shadow-lg transition-all duration-300 font-medium"
              >
                Wyślij formularz
              </button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WizardForm;
