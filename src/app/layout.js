import "./globals.css";
import "animate.css";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "SurgiCare | Surgical Instruments & Medical Equipment",
    template: "%s | SurgiCare"
  },
  description:
    "SurgiCare supplies quality surgical instruments, operating room equipment and healthcare solutions for hospitals, clinics and medical professionals.",
  keywords: [
    "surgical instruments",
    "surgical equipment supplier",
    "medical equipment",
    "hospital surgical instruments",
    "operation theatre equipment",
    "surgical instruments India"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "SurgiCare | Surgical Instruments & Medical Equipment",
    description:
      "Reliable surgical instruments and medical equipment for hospitals, clinics and healthcare professionals.",
    url: "https://www.example.com",
    siteName: "SurgiCare",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "SurgiCare",
    description:
      "Supplier of surgical instruments, medical equipment and operating room solutions.",
    url: "https://www.example.com",
    areaServed: "India",
    telephone: "+91-9876543210"
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
