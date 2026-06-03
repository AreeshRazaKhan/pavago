import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import Footer from "./components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "./components/layout/Navbar";
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { getCanonicalUrl, SITE_URL } from "@/utils/site";


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Offshore Staffing & Remote Teams | Prismolix",
  description:
    "Scale your business with Prismolix's elite offshore staffing solutions. Save costs, boost productivity, and hire your global team today!",
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: {
    type: "website",
    url: getCanonicalUrl(),
    title: "Offshore Staffing & Remote Teams | Prismolix",
    description:
      "Scale your business with Prismolix's elite offshore staffing solutions. Save costs, boost productivity, and hire your global team today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offshore Staffing & Remote Teams | Prismolix",
    description:
      "Scale your business with Prismolix's elite offshore staffing solutions. Save costs, boost productivity, and hire your global team today!",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MMWN2PNF" />
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        <Toaster />
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>

        <GoogleAnalytics gaId="G-VTDWGDH90L" />
      </body>
    </html>
  );
}
