import React, { useState, useEffect } from 'react';
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
import { initEmailJS, EMAILJS_CONFIG } from '@/lib/emailjs';
import emailjs from '@emailjs/browser';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('wizardProgress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setFormData(parsed);
        // Restore form values
        Object.keys(parsed).forEach(key => {
          if (key in formSchema.shape) {
            form.setValue(key as any, parsed[key]);
          }
        });
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever formData changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('wizardProgress', JSON.stringify(formData));
    }
  }, [formData]);

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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
        console.warn('EmailJS not configured. Form data:', data);
        toast({
          title: "Tryb demonstracyjny",
          description: "Formularz zapisany (EmailJS nie jest skonfigurowany). Skonfiguruj .env z wartościami z EmailJS.",
        });
      } else {
        // Send email using EmailJS
        const templateParams = {
          to_email: 'kontakt@aluraf.pl',
          from_name: data.email,
          from_email: data.email,
          phone: data.telefon,
          location: data.lokalizacja,
          dimensions: `${data.szerokość}m x ${data.głębokość}m x ${data.wysokość}m`,
          roofing: data.zadaszenie,
          color: data.kolor,
          led_lighting: data.oświetlenieLED,
          side_walls: data.ścianyTarasu,
          notes: data.uwagi || 'Brak uwag',
          subject: 'Nowa wycena z formularza na stronie',
        };

        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_WIZARD,
          templateParams
        );

        toast({
          title: "Formularz wysłany!",
          description: "Dziękujemy za wypełnienie formularza. Skontaktujemy się wkrótce.",
        });
      }

      // Clear saved progress and reset form
      localStorage.removeItem('wizardProgress');
      form.reset();
      setFormData({});
      setCurrentStep(1);

    } catch (error) {
      console.error('Error sending email:', error);

      toast({
        variant: "destructive",
        title: "Błąd wysyłania",
        description: "Nie udało się wysłać formularza. Spróbuj ponownie lub zadzwoń do nas.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 bg-aluraf-red text-white rounded-md hover:bg-red-700 hover:shadow-lg transition-all duration-300 font-medium disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </>
                ) : (
                  'Wyślij formularz'
                )}
              </button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WizardForm;
