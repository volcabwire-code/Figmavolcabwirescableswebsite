import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ContactPage } from './pages/ContactPage';
import ScrollToTop from './utils/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<HomePage />} /> {/* Reuse Home for now as per minimal requirements */}
          <Route path="/blog" element={<HomePage />} /> {/* Reuse Home for now */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
