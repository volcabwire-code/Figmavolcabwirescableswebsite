import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'sonner';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};
