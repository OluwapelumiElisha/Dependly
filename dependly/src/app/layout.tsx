import type { Metadata } from "next";
import "./globals.css";
import { Source_Sans_3 } from 'next/font/google';

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Ensures all required weights are loaded
  variable: '--font-source-sans',
});


export const metadata: Metadata = {
  title: "Dependly",
  description: "Dependly Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSansPro.variable} >
        {children}
      </body>
    </html>
  );
}
