// components/CookieConsent.tsx
"use client";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  // Load Google Analytics only if consent is accepted
  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-8L4WS0PMXB";
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-8L4WS0PMXB");
    };
    document.head.appendChild(script);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleDeny = () => {
    localStorage.setItem("cookie_consent", "denied");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md transition-all ease-in-out duration-500 transform translate-y-full sm:translate-y-0 sm:relative">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base text-center sm:text-left">
            Vi använder cookies för att förbättra din upplevelse på vår
            webbplats.
          </p>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <button
              onClick={handleAccept}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
            >
              Acceptera
            </button>
            <button
              onClick={handleDeny}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Neka
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
