import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { Providers } from "@/redux/provider";
import { Toaster } from "@/components/ui/sonner";
const montserrat = Montserrat({ subsets: ["latin", "cyrillic", "vietnamese"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`max-w-screen-[1439px] min-h-screen mx-auto w-full ${montserrat.className}`}
      >
        <main>
          <Providers>
            <HeaderComponent />
            {children}
            <Toaster />
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
