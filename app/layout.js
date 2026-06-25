import { Geist } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Script from 'next/script'; // 🚀 Importamos el componente de Next para scripts externos

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kevin Barnasthpol | Dev",
  description: "Mi CV Online y Portafolio de proyectos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>

    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const theme = localStorage.getItem('theme');

            if (
              theme === 'dark' ||
              (!theme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            }
          })();
        `,
      }}
    />

    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}