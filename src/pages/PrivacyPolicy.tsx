import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-sky-50">
      {/* Navigation Back */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className=" px-6 pb-20">
        <div className=" p-12 ">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-600 mb-12">Last updated: December 18, 2025</p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                At Zuvigo, we are committed to protecting your privacy and ensuring you have a positive experience on our website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other information you voluntarily provide through contact forms or inquiries.</li>
                <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address, and unique device identifiers.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, and other interaction data.</li>
                <li><strong>Cookies:</strong> Information stored in browser cookies to enhance your experience.</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraudulent activities and enhance security</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
              <p>
                Zuvigo implements appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption protocols, secure servers, and regular security audits to safeguard your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* Third-Party Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who assist us in operating our website and services</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience. Most web browsers allow you to control cookies through settings. You can choose to disable cookies; however, this may affect the functionality of our website.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to opt-out of marketing communications</li>
              </ul>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to This Policy</h2>
              <p>
                Zuvigo may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="font-semibold text-slate-900">Zuvigo</p>
                <p className="text-slate-700">Email: privacy@zuvigo.com</p>
                <p className="text-slate-700">Website: www.zuvigo.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
