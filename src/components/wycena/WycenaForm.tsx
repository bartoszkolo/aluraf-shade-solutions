
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Upload } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  szerokość: z.string().min(1, { message: "Szerokość jest wymagana" }),
  głębokość: z.string().min(1, { message: "Głębokość jest wymagana" }),
  wysokość: z.string().min(1, { message: "Wysokość jest wymagana" }),
  zadaszenie: z.enum(["poliwęglan mleczny", "poliwęglan transparentny", "szyba laminowana 442"]),
  kolor: z.enum(["antracyt RAL 7016ST", "szary RAL 9007ST", "biały RAL 9016", "czarny RAL 9005"]),
  oświetlenieLED: z.enum(["tak", "nie"]),
  ścianyTarasu: z.enum(["bez zabudowy", "szyby przesuwne"]),
  lokalizacja: z.string().min(1, { message: "Lokalizacja jest wymagana" }),
  uwagi: z.string().optional(),
  email: z.string().email({ message: "Nieprawidłowy adres email" }),
  telefon: z.string().min(9, { message: "Numer telefonu musi mieć minimum 9 cyfr" }),
});

type FormValues = z.infer<typeof formSchema>;

const WycenaForm = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      szerokość: "",
      głębokość: "",
      wysokość: "",
      zadaszenie: "poliwęglan mleczny",
      kolor: "antracyt RAL 7016ST",
      oświetlenieLED: "nie",
      ścianyTarasu: "bez zabudowy",
      lokalizacja: "",
      uwagi: "",
      email: "",
      telefon: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Here you would typically send the data to your backend
    console.log(data);
    console.log("Uploaded images:", uploadedImages);
    
    toast({
      title: "Formularz wysłany!",
      description: "Dziękujemy za wypełnienie formularza. Skontaktujemy się wkrótce.",
    });
    
    // Reset form after submission
    form.reset();
    setUploadedImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setUploadedImages([...uploadedImages, ...newFiles]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-aluraf-red mb-6">Formularz wyceny</h2>
      <p className="text-gray-600 mb-8">
        Wypełnij poniższy formularz, aby otrzymać bezpłatną wycenę. Nasz zespół skontaktuje się z Tobą najszybciej jak to możliwe.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="szerokość"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Szerokość (cm)</FormLabel>
                  <FormControl>
                    <Input placeholder="np. 300" {...field} />
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
                  <FormLabel>Głębokość (cm)</FormLabel>
                  <FormControl>
                    <Input placeholder="np. 400" {...field} />
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
                  <FormLabel>Wysokość (cm)</FormLabel>
                  <FormControl>
                    <Input placeholder="np. 250" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Materiał zadaszenia</h3>
            <FormField
              control={form.control}
              name="zadaszenie"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poliwęglan mleczny" id="z1" />
                        <FormLabel htmlFor="z1" className="font-normal">Poliwęglan mleczny</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poliwęglan transparentny" id="z2" />
                        <FormLabel htmlFor="z2" className="font-normal">Poliwęglan transparentny</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="szyba laminowana 442" id="z3" />
                        <FormLabel htmlFor="z3" className="font-normal">Szyba laminowana 442</FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Kolor konstrukcji</h3>
            <FormField
              control={form.control}
              name="kolor"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz kolor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="antracyt RAL 7016ST">Antracyt RAL 7016ST</SelectItem>
                        <SelectItem value="szary RAL 9007ST">Szary RAL 9007ST</SelectItem>
                        <SelectItem value="biały RAL 9016">Biały RAL 9016</SelectItem>
                        <SelectItem value="czarny RAL 9005">Czarny RAL 9005</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Opcje dodatkowe</h3>
            <FormField
              control={form.control}
              name="oświetlenieLED"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Oświetlenie LED</FormLabel>
                  <FormControl>
                    <RadioGroup 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tak" id="led-tak" />
                        <FormLabel htmlFor="led-tak" className="font-normal">Tak</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nie" id="led-nie" />
                        <FormLabel htmlFor="led-nie" className="font-normal">Nie</FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Ściany tarasu</h3>
            <FormField
              control={form.control}
              name="ścianyTarasu"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bez zabudowy" id="s1" />
                        <FormLabel htmlFor="s1" className="font-normal">Bez zabudowy</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="szyby przesuwne" id="s2" />
                        <FormLabel htmlFor="s2" className="font-normal">Szyby przesuwne (szkło hartowane 10mm)</FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-6">
            <FormField
              control={form.control}
              name="lokalizacja"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokalizacja inwestycji</FormLabel>
                  <FormControl>
                    <Input placeholder="Miasto, województwo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Załącz zdjęcia miejsca</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Kliknij lub przeciągnij pliki tutaj</p>
                </div>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </label>
              
              {uploadedImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={URL.createObjectURL(image)} 
                        alt={`Uploaded ${index}`} 
                        className="w-full h-24 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t pt-6">
            <FormField
              control={form.control}
              name="uwagi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Uwagi i pytania</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Dodatkowe informacje, które chcesz nam przekazać" 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Dane kontaktowe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="twoj@email.pl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="telefon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="123 456 789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-aluraf-red text-white py-4 px-6 rounded-md hover:bg-red-700 transition-colors text-lg font-medium"
          >
            Wyślij formularz wyceny
          </button>
        </form>
      </Form>
    </div>
  );
};

export default WycenaForm;
