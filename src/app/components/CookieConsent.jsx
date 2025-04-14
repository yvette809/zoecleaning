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
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-gray-900 text-white p-6 w-80 h-80 flex flex-col justify-center items-center rounded-lg shadow-lg transition-all transform scale-100 sm:scale-100">
          <p className="text-center text-sm sm:text-base">
            Vi använder cookies för att förbättra din upplevelse på vår
            webbplats.
          </p>
          <div className="flex gap-4 mt-6">
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
