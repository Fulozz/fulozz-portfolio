import localFont from "next/font/local";
import Providers from "../../context/Provider";
import { Toaster } from 'react-hot-toast'
import { dir } from "i18next"
import { languages } from "@/app/i18n/settings";
import "@/styles/globals.css"



export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio",
  description: "Portifolio de Thiago Silva Andrade",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} suppressHydrationWarning={true} dir={dir(lng)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}   
      >
        <Providers>
          <Toaster position='top-center' reverseOrder={true}/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
