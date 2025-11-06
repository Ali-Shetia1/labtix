import { Outfit } from 'next/font/google';
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs';

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })
export const metadata = {
  title: "Laptix - Egypt best laptops store",
  description: "We sell top laptop brands in Egypt with real warranties, fair prices, and great service—online and in-store.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} suppressHydrationWarning={true}>
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
