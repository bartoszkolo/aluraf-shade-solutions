
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-aluraf-red text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-end space-x-8">
        <a href="tel:+48606852706" className="hover:text-gray-200 flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          606 852 706
        </a>
        <a href="mailto:biuro@aluraf.pl" className="hover:text-gray-200 flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          biuro@aluraf.pl
        </a>
      </div>
    </div>
  );
};

export default TopBar;
