import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import Footer from "./components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "./components/layout/Navbar";
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'


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
  title: "Global Offshore Staffing Solutions | Hire Top Remote Talent - Prismolix",
  description:
    "Scale your business with Prismolix. We provide elite offshore staffing and remote team solutions to save costs and boost productivity. Hire your global team today!",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Global Offshore Staffing Solutions | Hire Top Remote Talent - Prismolix",
    description:
      "Scale your business with Prismolix. We provide elite offshore staffing and remote team solutions to save costs and boost productivity. Hire your global team today!",

  },
  twitter: {
    card: "summary_large_image",
    title: "Global Offshore Staffing Solutions | Hire Top Remote Talent - Prismolix",
    description:
      "Scale your business with Prismolix. We provide elite offshore staffing and remote team solutions to save costs and boost productivity. Hire your global team today!",
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
