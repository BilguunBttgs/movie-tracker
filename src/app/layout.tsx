import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <main className="flex-center-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
