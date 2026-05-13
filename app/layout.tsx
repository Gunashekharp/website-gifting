import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D'CreativEdge Gifting Solutions | Handcrafted Gift Hampers",
  description:
    "Premium custom gift hampers and personalized gifts, handcrafted in Bangalore. From birthdays to corporate gifting, D'CreativEdge creates bespoke hampers that feel personal, elegant, and unforgettable.",
  other: {
    "theme-color": "#080808",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="bg-warm-white text-neutral-900 font-body min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[100px] md:pt-[144px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
