import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zoe Cleaning AB",
  description:
    "Zoe Cleaning AB är ett professionellt städföretag i Stockholm som är specialiserat på hemstädning och Airbnb-städning. Vi erbjuder pålitliga, flexibla och miljövänliga städtjänster anpassade efter dina behov.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="hIldfd5_FgxEcQoTIBCqURC6PuqpyXHECAx6ZRRVwlE"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Zoe Cleaning AB",
              url: "https://zoecleaning.se",
              address: {
                "@type": "Ragvaldsbo Gårdsväg 14 A,193 37 Sigtuna",
                addressLocality: "Stockholm",
                addressCountry: "SE",
              },
              telephone: "+46-790-061 375",
              openingHours: "Mo-Su 00:00-23:59",
              description:
                "Eco-friendly and reliable cleaning services in Stockholm.",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
