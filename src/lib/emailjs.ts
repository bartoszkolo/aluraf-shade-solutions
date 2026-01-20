// EmailJS Configuration
// TODO: Set up your EmailJS account at https://www.emailjs.com/
// After setup, replace these values with your actual credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID_WIZARD: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_WIZARD || 'YOUR_TEMPLATE_ID_WIZARD',
  TEMPLATE_ID_CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || 'YOUR_TEMPLATE_ID_CONTACT',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  if (typeof window !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    import('@emailjs/browser').then((emailjs) => {
      emailjs.default.init(EMAILJS_CONFIG.PUBLIC_KEY);
    });
  }
};
