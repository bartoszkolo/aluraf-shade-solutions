
import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

// Define the FB interface to fix TypeScript errors
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (config: { xfbml: boolean; version: string }) => void;
    };
  }
}

const MessengerChat = () => {
  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Cleanup function
    return () => {
      // Optional: Remove the Facebook SDK if needed
      const facebookScript = document.getElementById('facebook-jssdk');
      if (facebookScript) {
        facebookScript.remove();
      }
    };
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      
      {/* Facebook Messenger Plugin */}
      <div 
        className="fb-customerchat" 
        data-attribution="install_email" 
        data-attribution_version="biz_inbox" 
        data-page_id="aluminiowezadaszeniatarasow">
      </div>
      
      {/* Custom Messenger Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://m.me/aluminiowezadaszeniatarasow" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
            <MessageCircle className="w-8 h-8 text-white" />
        </a>
      </div>
    </>
  );
};

export default MessengerChat;
