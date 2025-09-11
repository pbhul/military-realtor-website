import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DocumentTextIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function TermsOfService() {
  return (
    <>
      <Header />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <ScaleIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional standards and service terms for military families in Northern Virginia.
            </p>
          </div>
          
          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                Agreement to Terms
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  By accessing and using our military real estate services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                  from using or accessing our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎖️ Military-Specific Services</h2>
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                <p className="text-gray-700 mb-4">
                  <strong>Our specialized military real estate services include:</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• MRP Certified Military Relocation Professional guidance</li>
                  <li>• PCS timeline coordination and deployment-sensitive scheduling</li>
                  <li>• VA loan expertise and lender connections</li>
                  <li>• Military housing allowance (BAH) optimization</li>
                  <li>• Base proximity analysis for Fort Belvoir, Pentagon, and Quantico</li>
                  <li>• Military spouse employment and dual-career support</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Licensing</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  We are licensed real estate professionals in the Commonwealth of Virginia, operating under all applicable 
                  real estate laws and regulations. Our Military Relocation Professional (MRP) certification provides 
                  additional specialized training for military family needs.
                </p>
                <ul>
                  <li>Virginia Real Estate License: [License Number]</li>
                  <li>Military Relocation Professional (MRP) Certification</li>
                  <li>Member of National Association of Realtors (NAR)</li>
                  <li>Member of Northern Virginia Association of Realtors (NVAR)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Limitations</h2>
              <div className="prose prose-lg text-gray-600">
                <p>Our services are subject to the following limitations:</p>
                <ul>
                  <li>Real estate services are provided in Northern Virginia only</li>
                  <li>Market conditions and property availability may affect service outcomes</li>
                  <li>Military deployment schedules may require service adjustments</li>
                  <li>VA loan eligibility is determined by the Department of Veterans Affairs</li>
                  <li>PCS timeline changes may require contract modifications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                Military Security & OPSEC
              </h2>
              <div className="bg-red-50 p-8 rounded-lg border border-red-200">
                <p className="text-gray-700 mb-4">
                  <strong>🔒 Security Commitment:</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• We maintain strict confidentiality of deployment schedules and PCS orders</li>
                  <li>• Security clearance information is never disclosed</li>
                  <li>• We follow OPSEC guidelines in all communications and marketing</li>
                  <li>• Base access information remains confidential</li>
                  <li>• Military family locations are protected from public disclosure</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Responsibilities</h2>
              <div className="prose prose-lg text-gray-600">
                <p>As our client, you agree to:</p>
                <ul>
                  <li>Provide accurate information about your military status and housing needs</li>
                  <li>Communicate PCS timeline changes promptly</li>
                  <li>Comply with all real estate contract terms and deadlines</li>
                  <li>Provide necessary documentation for VA loan processing</li>
                  <li>Respect property showing appointments and guidelines</li>
                  <li>Honor exclusive representation agreements when signed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compensation</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Real estate commissions are typically paid by sellers and are outlined in listing agreements. 
                  Buyer representation is usually provided at no direct cost to military families, with compensation 
                  coming from the transaction. All fees and compensation structures are disclosed in writing before 
                  service agreements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Our liability is limited to the extent permitted by law. We are not responsible for market conditions, 
                  military order changes, VA loan approval decisions, or property condition issues not disclosed during 
                  inspections. Our maximum liability shall not exceed the commission received on any transaction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Any disputes arising from our services shall be resolved through binding arbitration in accordance 
                  with the rules of the American Arbitration Association. This agreement is governed by Virginia state law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Modification of Terms</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with 
                  an updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Questions about these terms or our military real estate services?
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> parjinder@pbrealtynova.com</p>
                  <p><strong>Phone:</strong> (703) 477-2606</p>
                  <p><strong>Office:</strong> 123 Military Drive, Fairfax, VA 22030</p>
                  <p><strong>License:</strong> Virginia Real Estate License #[Number]</p>
                </div>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-500 border-t pt-8">
                Last updated: September 8, 2024. These terms are effective immediately upon posting. 
                Equal Housing Opportunity. Licensed Real Estate Professional.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}