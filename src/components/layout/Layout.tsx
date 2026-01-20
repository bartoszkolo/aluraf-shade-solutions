
import React from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import MessengerChat from '../ui/MessengerChat';
import CookieConsentBanner from '../CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <MessengerChat />
      <CookieConsentBanner />
    </div>
  );
};

export default Layout;
