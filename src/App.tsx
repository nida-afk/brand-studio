import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home";
import { CaseStudiesPage } from "./pages/CaseStudies";
import { BlogsPage } from "./pages/Blogs";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { InfluencerJoinPage } from "./pages/InfluencerJoin";
import { ServiceDetailPage } from "./pages/ServiceDetail";
import { PolicyPage } from "./pages/Policy";

import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/influencer-join" element={<InfluencerJoinPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/privacy-policy" element={<PolicyPage type="privacy" />} />
          <Route path="/terms-of-service" element={<PolicyPage type="terms" />} />
          <Route path="/refund-policy" element={<PolicyPage type="refund" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
