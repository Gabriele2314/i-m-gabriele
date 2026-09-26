import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I'm Gabriele",
  description:
    "Sviluppo app, creo siti, monto video e gestisco canali YouTube. Il resto lo scopri scorrendo.",
  openGraph: {
    title: "I'm Gabriele",
    description: "App, siti e video. Ma c'è una cosa che non ti ho ancora detto…",
    type: "website",
    locale: "it_IT",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`dark ${archivo.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
