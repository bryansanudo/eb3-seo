import "./globals.css";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Providers from "@/store/provider";
export const metadata = {
  title: "EB-3 | Home",
  description: "description",
  keywords: "keyword-1,keyword-2,keyword-3,keyword-4",
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
