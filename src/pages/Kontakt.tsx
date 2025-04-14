import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin, Clock, Send, Check, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { animations } from '@/lib/animations';
import { BackToTop } from '@/components/ui/back-to-top';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Imię jest wymagane" }),
  email: z.string().email({ message: "Niepoprawny adres email" }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Temat jest wymagany" }),
  message: z.string().min(10, { message: "Wiadomość musi mieć co najmniej 10 znaków" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Email would be sent here in a real implementation
      console.log('Form data submitted:', data);
      
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
      });
      
      setFormStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      
      toast({
        title: "Wystąpił błąd",
        description: "Nie udało się wysłać wiadomości. Prosimy spróbować ponownie.",
        variant: "destructive",
      });
      
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/kontakt-hero.jpg)', 
              backgroundPosition: 'center' 
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 text-white ${animations.fadeIn}`}>
            Kontakt
          </h1>
          <p className={`text-xl md:text-2xl text-white max-w-2xl ${animations.slideUp}`}>
            Skontaktuj się z nami i stwórz swoją wymarzoną przestrzeń
          </p>
        </div>
      </div>

      {/* Contact Details Banner */}
      <div className="bg-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <a 
              href="tel:+48698368994" 
              className={`flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors ${animations.card}`}
            >
              <div className="p-3 rounded-full bg-red-100 mb-3">
                <Phone className="text-aluraf-red h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">Zadzwoń do nas</h3>
              <p className="text-gray-600">+48 698 368 994</p>
            </a>
            
            <a 
              href="mailto:kontakt@aluraf.pl"
              className={`flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors ${animations.card}`}
            >
              <div className="p-3 rounded-full bg-red-100 mb-3">
                <Mail className="text-aluraf-red h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">Napisz e-mail</h3>
              <p className="text-gray-600">kontakt@aluraf.pl</p>
            </a>
            
            <div className={`flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors ${animations.card}`}>
              <div className="p-3 rounded-full bg-red-100 mb-3">
                <Clock className="text-aluraf-red h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">Godziny otwarcia</h3>
              <p className="text-gray-600">Pon-Pt: 8:00-16:30 | Sob: 9:00-13:30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className={`bg-white rounded-lg shadow-lg p-8 ${animations.card}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Skontaktuj się z nami
              </h2>
              <p className="text-gray-600 mb-8">
                Masz pytania dotyczące naszych produktów? Potrzebujesz wyceny? Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Imię i nazwisko *
                    </label>
                    <input 
                      id="name"
                      type="text" 
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red transition-colors
                        ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Jan Kowalski"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Adres email *
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red transition-colors
                        ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="jan.kowalski@example.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefon
                    </label>
                    <input 
                      id="phone"
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red"
                      placeholder="+48 123 456 789"
                      {...register('phone')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Temat *
                    </label>
                    <input 
                      id="subject"
                      type="text" 
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red transition-colors
                        ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Pytanie o ofertę"
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">{errors.subject.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Wiadomość *
                  </label>
                  <textarea 
                    id="message"
                    rows={6} 
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red transition-colors
                      ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Twoja wiadomość..."
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-aluraf-red text-white py-4 px-6 rounded-md hover:bg-red-700 
                    transition-colors text-lg font-medium flex items-center justify-center gap-2
                    ${animations.button} ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wysyłanie...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <Check className="w-5 h-5" />
                      Wiadomość wysłana
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Wyślij wiadomość
                    </>
                  )}
                </button>
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800">Wystąpił błąd</h4>
                      <p className="text-red-700 text-sm">Nie udało się wysłać wiadomości. Prosimy spróbować ponownie lub skontaktować się telefonicznie.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info and Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className={`bg-white rounded-lg shadow-lg p-8 ${animations.card}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Dane kontaktowe
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-red-100 h-fit">
                    <MapPin className="text-aluraf-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adres</h4>
                    <p className="text-gray-600">Goślinowo, 62-200 Gniezno</p>
                    <p className="text-gray-600">woj. wielkopolskie</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-red-100 h-fit">
                    <Phone className="text-aluraf-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">
                      <a href="tel:+48698368994" className="hover:text-aluraf-red transition-colors">
                        +48 698 368 994
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-red-100 h-fit">
                    <Mail className="text-aluraf-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:kontakt@aluraf.pl" className="hover:text-aluraf-red transition-colors">
                        kontakt@aluraf.pl
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-red-100 h-fit">
                    <Clock className="text-aluraf-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Godziny otwarcia</h4>
                    <div>
                      <div className="flex justify-between text-gray-600">
                        <span>Poniedziałek - Piątek:</span>
                        <span>8:00 - 16:30</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Sobota:</span>
                        <span>9:00 - 13:30</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Niedziela:</span>
                        <span>Zamknięte</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className={`h-[400px] rounded-lg overflow-hidden shadow-lg ${animations.card}`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.337644797461!2d17.645931676871787!3d52.51824997205923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47037ffa89c52b6d%3A0x5dca93e1e9e9874f!2zR2_Fm2xpbm93bywgNjItMjAwIEdvc2xpbm93bw!5e0!3m2!1spl!2spl!4v1709932450790!5m2!1spl!2spl"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </Layout>
  );
};

export default Kontakt;
