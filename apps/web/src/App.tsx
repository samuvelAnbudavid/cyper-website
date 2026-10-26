import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ArticlePage } from './pages/ArticlePage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminInquiriesPage } from './pages/admin/AdminInquiriesPage';
import { AdminInquiryDetailPage } from './pages/admin/AdminInquiryDetailPage';
import { AdminServicesPage } from './pages/admin/AdminServicesPage';
import { AdminArticlesPage } from './pages/admin/AdminArticlesPage';
import { AdminArticleEditorPage } from './pages/admin/AdminArticleEditorPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { ProtectedAdminRoute } from './components/ProtectedAdminRoute';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>

      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route element={<ProtectedAdminRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/inquiries" element={<AdminInquiriesPage />} />
        <Route path="/admin/inquiries/:id" element={<AdminInquiryDetailPage />} />
        <Route path="/admin/services" element={<AdminServicesPage />} />
        <Route path="/admin/articles" element={<AdminArticlesPage />} />
        <Route path="/admin/articles/new" element={<AdminArticleEditorPage />} />
        <Route path="/admin/articles/:id/edit" element={<AdminArticleEditorPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />
      </Route>

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
