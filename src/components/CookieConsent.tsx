import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { X } from 'lucide-react';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akceptuję wszystkie"
      declineButtonText="Tylko niezbędne"
      enableDeclineButton
      flipButtons
      cookieName="aluraf-cookie-consent"
      style={{
        background: '#1a1a1a',
        color: '#ffffff',
        borderTop: '2px solid #e30613',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
      }}
      buttonStyle={{
        backgroundColor: '#e30613',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '600',
        padding: '12px 24px',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
      }}
      buttonClasses="hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5"
      declineButtonStyle={{
        backgroundColor: 'transparent',
        color: '#ffffff',
        border: '2px solid #ffffff',
        fontSize: '14px',
        fontWeight: '500',
        padding: '12px 24px',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
      }}
      declineButtonClasses="hover:bg-white hover:text-black"
      expires={150}
      onDecline={() => {
        // Zapisz tylko niezbędne cookies
        Cookies.set('aluraf-cookie-consent', 'false');
      }}
    >
      <div className="flex items-start gap-4 py-2">
        <div className="flex-1">
          <p className="text-white text-sm leading-relaxed mb-2">
            <strong className="text-aluraf-red">Ta strona używa cookies</strong>, aby zapewnić
            najlepszą jakość usług. Korzystając z naszej strony, wyrażasz zgodę na używanie cookies
            zgodnie z naszą{' '}
            <a
              href="/polityka-prywatnosci"
              className="text-aluraf-red hover:text-red-400 underline underline-offset-2 transition-colors"
            >
              Polityką Prywatności
            </a>
            .
          </p>
          <p className="text-gray-400 text-xs">
            Niezbędne cookies są wymagane do prawidłowego funkcjonowania strony.
          </p>
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
