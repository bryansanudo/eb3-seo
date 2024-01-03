import "./globals.css";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";

import Providers from "@/store/provider";

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
        </body>
      </Providers>
    </html>
  );
}
