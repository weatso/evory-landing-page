import type { Metadata } from "next";
import { Manrope, Lora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";

// Konfigurasi Sans-Serif (Manrope)
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"]
});

// Konfigurasi Serif (Lora)
const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Evory | Illuminating Your Best Moments",
  description: "A luxury wedding and digital invitation agency.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased font-sans bg-[#F9F8F4] text-zinc-800">
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}