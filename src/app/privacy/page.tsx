import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheckIcon, EyeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your privacy and security matter to us. Learn how we protect your information as a military family.
            </p>
          </div>
          
          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                <EyeIcon className="h-6 w-6 text-blue-600" />
                Information We Collect
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>We collect information you provide directly to us when you:</p>
                <ul>
                  <li>Fill out contact forms or request our military PCS guide</li>
                  <li>Subscribe to our military real estate newsletter</li>
                  <li>Call or email us for real estate services</li>
                  <li>Schedule consultations for home buying/selling</li>
                </ul>
                <p>This may include your name, email address, phone number, military base assignment, and housing preferences.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                How We Use Your Information
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide military-specific real estate services and VA loan guidance</li>
                  <li>Send you requested resources like PCS timeline guides and BAH information</li>
                  <li>Communicate about properties and military housing options</li>
                  <li>Improve our services for military families</li>
                  <li>Comply with legal obligations and professional real estate standards</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Military Family Security</h2>
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                <p className="text-gray-700 mb-4">
                  <strong>🎖️ Special Protections for Military Families:</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• We never share deployment schedules or PCS orders with third parties</li>
                  <li>• Security clearance information is kept strictly confidential</li>
                  <li>• We understand OPSEC requirements and practice information security</li>
                  <li>• Base access information is protected and never publicly disclosed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except:</p>
                <ul>
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in our operations (mortgage lenders, title companies)</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, including:</p>
                <ul>
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure server infrastructure</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security audits and updates</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <div className="prose prose-lg text-gray-600">
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your preferences and improve user experience</li>
                  <li>Analyze website traffic and optimize our military resources</li>
                  <li>Provide personalized content about military housing and VA loans</li>
                </ul>
                <p>You can control cookies through your browser settings.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="prose prose-lg text-gray-600">
                <p>You have the right to:</p>
                <ul>
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Questions about this privacy policy or how we handle your information?
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@militaryrealestatenova.com</p>
                  <p><strong>Phone:</strong> (555) MILITARY</p>
                  <p><strong>Mail:</strong> 123 Military Drive, Fairfax, VA 22030</p>
                </div>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-500 border-t pt-8">
                Last updated: September 8, 2024. We may update this privacy policy from time to time. 
                We will notify you of any changes by posting the new privacy policy on this page.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}