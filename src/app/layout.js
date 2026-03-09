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
  title: "Prismolix • Elite Offshore Recruitment & Talent Solutions",
  description:
    "Prismolix connects businesses with the top 1% of offshore talent. Specialized recruitment for Engineering, Finance, Sales, and Admin to help you scale while reducing overhead.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Prismolix • Scale Faster with Elite Offshore Talent",
    description:
      "Stop overpaying for local talent. Prismolix sources, vets, and onboards top-tier offshore professionals in just 3 weeks. Expert hiring for growing enterprises.",

  },
  twitter: {
    card: "summary_large_image",
    title: "Prismolix • Your Global Offshore Hiring Partner",
    description:
      "Access the world's top 1% talent pool. From software engineers to finance experts, we handle the recruitment so you can focus on growth.",
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
