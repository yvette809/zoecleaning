import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
    "This is a cleaning company located in Stockholm. We specialise in home and Airbnb cleaning services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
              name: "Zoe Cleaning",
              url: "https://zoecleaning.se",
              address: {
                "@type": "Ragvaldsbo Gårdsväg 14 A,193 37 Sigtuna",
                addressLocality: "Stockholm",
                addressCountry: "SE",
              },
              telephone: "+46-767-115241",
              description:
                "Eco-friendly and reliable cleaning services in Stockholm.",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
