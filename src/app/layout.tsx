import clsx from "clsx";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "../components/layout/Navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(roboto.className, 'min-h-screen')}>
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 py-4">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
