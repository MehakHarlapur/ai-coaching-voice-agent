import { Geist, Geist_Mono } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";
import HeaderC from './_components/HeaderC';
import Footer from './_components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "AI Educational Coaching Voice Agent",
  description: "AI Educational Coaching Voice Agent – Transform the way you learn with an advanced AI-powered voice assistant. Get real-time coaching, personalized guidance, and interactive learning experiences. Perfect for students, educators, and professionals seeking smart, AI-driven tutoring. Explore the future of education today!",
};

export default async function RootLayout({ children }) {
  const user = await stackServerApp.getUser();
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAuthPage = pathname.includes('/handler/');
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      ><StackProvider app={stackServerApp}><StackTheme>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <div className="flex flex-col min-h-screen">
              {!isAuthPage && <HeaderC />}
              <main className="flex-grow">
                {children}
              </main>
              {!isAuthPage && <Footer />}
            </div>
            <Toaster position="top-center" richColors />
          </Provider>
        </ThemeProvider>
      </StackTheme></StackProvider></body>
    </html>
  );
}
