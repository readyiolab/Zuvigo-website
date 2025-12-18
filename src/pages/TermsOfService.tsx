import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
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
      <div className="container mx-auto px-6 pb-20">
        <div className=" p-12 ">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-600 mb-12">Last updated: December 18, 2025</p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            {/* Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the Zuvigo website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Zuvigo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                The materials on Zuvigo's website are provided on an 'as is' basis. Zuvigo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, Zuvigo does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
              <p>
                In no event shall Zuvigo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zuvigo's website, even if Zuvigo or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Zuvigo's website could include technical, typographical, or photographic errors. Zuvigo does not warrant that any of the materials on its website are accurate, complete, or current. Zuvigo may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            {/* Materials License */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Materials License</h2>
              <p>
                The materials on Zuvigo's website are licensed and provided "as-is". License holders are subject to the following restrictions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cannot revoke these restrictions or the license granted</li>
                <li>Content may be stopped at any time</li>
                <li>Must comply with any additional terms or requirements that Zuvigo may impose</li>
              </ul>
            </section>

            {/* Limitations of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitations of Liability</h2>
              <p>
                Zuvigo will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, any linked website. Your use of any linked website is at the sole risk of the user and Zuvigo accepts no liability for any such use.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Modifications</h2>
              <p>
                Zuvigo may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Zuvigo operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* User-Generated Content */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. User-Generated Content</h2>
              <p className="mb-4">
                If you submit, post, or display content on Zuvigo, you grant Zuvigo a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute the content. You represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You own or have the necessary rights to the content</li>
                <li>The content does not infringe any third-party rights</li>
                <li>The content is accurate and not misleading</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="font-semibold text-slate-900">Zuvigo</p>
                <p className="text-slate-700">Email: legal@zuvigo.com</p>
                <p className="text-slate-700">Website: www.zuvigo.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
