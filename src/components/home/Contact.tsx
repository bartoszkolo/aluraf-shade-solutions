
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display">
          Skontaktuj Się z Nami
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Chcesz dowiedzieć się więcej o naszych produktach lub otrzymać bezpłatną wycenę? Skontaktuj się z nami!
        </p>
        <div className="flex flex-col items-center space-y-8">
          <a href="tel:+48698368994" className="contact-number">
            +48 698 368 994
          </a>
          <a href="tel:+48698732854" className="contact-number">
            +48 698 732 854
          </a>
          <Link to="/wycena" className="cta-button">
            BEZPŁATNA WYCENA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
