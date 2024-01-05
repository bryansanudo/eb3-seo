import "./globals.css";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Providers from "@/store/provider";
export const metadata = {
  title: "Home | Your Key to US Green Card",
  description:
    "Unlock your American Dream with EB-3 Workforce Solutions. Seamless EB3 visa process, expert guidance, and tailored solutions for a brighter future. Start your journey today!",
};

const monte = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={monte.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
