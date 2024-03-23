import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";


// app/layout.tsx
import { Providers } from './providers'
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>   
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
        </Providers>
      </body>
    </html>
  )
}
