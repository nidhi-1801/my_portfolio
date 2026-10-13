import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ["400"]});

export const metadata: Metadata = {
  title: "Nidhi Siri | Supply Chain Analyst",
  description: "Portfolio of Nidhi Siri — Supply Chain Analyst with 4 years of experience in SQL, Power BI, forecasting, and performance analytics across FedEx, PWC, and Accenture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )}>
        {children}
      </body>
    </html>
  );
}
