import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Új Élet Egy Számítógépnek",
  description: "Az útmutatót Botos Levente készítette",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body
        className={`${inter.className} dark:bg-[#111111] bg-white dark:text-white text-[#111111] text-md md:text-xl`}
      >
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
