import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClockIcon, CheckCircleIcon, ExclamationTriangleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PCSTimeline() {
  const timeline = [
    {
      phase: "6-12 Months Before PCS",
      timeframe: "As Soon as Orders Received",
      critical: true,
      tasks: [
        "Contact your military real estate agent immediately",
        "Start researching your new duty station area",
        "Begin financial planning and budgeting",
        "If selling: Get home market analysis and pricing strategy",
        "If buying: Start VA loan pre-approval process"
      ]
    },
    {
      phase: "4-6 Months Before PCS",
      timeframe: "Peak Planning Period", 
      critical: true,
      tasks: [
        "List your current home if selling (prime marketing time)",
        "Finalize VA loan pre-approval for new purchase",
        "Schedule virtual home tours in new location",
        "Coordinate with spouse's employer if applicable",
        "Research schools and neighborhoods in detail"
      ]
    },
    {
      phase: "2-4 Months Before PCS",
      timeframe: "Active Transaction Period",
      critical: true,
      tasks: [
        "Home should be under contract if selling",
        "Begin serious house hunting at new location",
        "Coordinate closing dates with PCS timeline",
        "Arrange temporary lodging if needed",
        "Submit housing allowance paperwork"
      ]
    },
    {
      phase: "30-60 Days Before PCS",
      timeframe: "Final Preparations",
      critical: false,
      tasks: [
        "Finalize both sale and purchase transactions",
        "Coordinate moving company and household goods",
        "Transfer utilities and update addresses",
        "Complete final walk-throughs",
        "Prepare for dual closings if necessary"
      ]
    },
    {
      phase: "PCS Week",
      timeframe: "Execution Phase",
      critical: false,
      tasks: [
        "Complete final closings",
        "Do final property inspections",
        "Hand over keys and complete transactions",
        "Begin travel to new duty station",
        "Check into new base housing office if needed"
      ]
    }
  ];

  const challenges = [
    {
      title: "Dual Market Coordination",
      description: "Managing both selling and buying in different markets with different timelines",
      solution: "Work with agents who specialize in military relocations and have networks nationwide"
    },
    {
      title: "Compressed Timeline",
      description: "Military orders often provide shorter notice than ideal for real estate transactions", 
      solution: "Start immediately upon receiving orders - even preliminary ones"
    },
    {
      title: "Remote Transactions",
      description: "Difficulty viewing and purchasing homes from a distance",
      solution: "Use virtual tours, FaceTime walk-throughs, and trusted local military realtors"
    },
    {
      title: "Funding Gaps",
      description: "Cash flow challenges between selling old home and buying new one",
      solution: "Bridge loans, VA loan assumptions, or temporary lodging allowances"
    }
  ];

  const documents = [
    "Copy of PCS orders",
    "VA Certificate of Eligibility (COE)",
    "Recent pay stubs and LES statements", 
    "Bank statements (2-3 months)",
    "Previous tax returns (2 years)",
    "Debt verification letters",
    "Current home appraisal (if selling)",
    "Homeowners insurance info",
    "Power of attorney (if spouse handling transactions)"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Military family moving boxes"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              PCS Real Estate Timeline Guide
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Master your PCS move with this comprehensive real estate timeline from an MRP Certified military specialist. From orders to closing, 
              navigate both selling and buying with military precision and expert guidance.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Personalized PCS Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your PCS Real Estate Timeline
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Follow this proven timeline to coordinate your real estate transactions with your military move.
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <div className={`rounded-lg border-2 p-8 ${
                  phase.critical 
                    ? 'border-red-200 bg-red-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center gap-4 mb-6">
                    {phase.critical ? (
                      <ExclamationTriangleIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
                    ) : (
                      <ClockIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                      <p className="text-sm font-medium text-gray-600">{phase.timeframe}</p>
                      {phase.critical && (
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 mt-1">
                          Critical Phase
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common PCS Challenges */}
      <section className="py-24 bg-gray-50">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common PCS Real Estate Challenges & Solutions
            </h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-blue-600 mb-2">Solution:</p>
                  <p className="text-sm text-gray-700">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                PCS Real Estate Document Checklist
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Gather these documents early to streamline your real estate transactions during PCS.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <DocumentTextIcon className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Required Documents</h3>
              </div>
              
              <div className="grid gap-3 sm:grid-cols-2">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Start gathering these documents as soon as you receive orders. 
                  Having everything ready accelerates your pre-approval and closing process significantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCS Timing Strategies */}
      <section className="py-24 bg-gray-50">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Strategic Timing Considerations
              </h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Summer PCS (Peak Season)</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• More inventory available</li>
                  <li>• Higher competition</li>
                  <li>• Premium moving costs</li>
                  <li>• School year considerations</li>
                  <li>• Start process early</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Winter PCS (Off-Season)</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Limited inventory</li>
                  <li>• Less competition</li>
                  <li>• Lower moving costs</li>
                  <li>• Weather challenges</li>
                  <li>• Act quickly on options</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency PCS</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Expedited timelines</li>
                  <li>• Limited options</li>
                  <li>• Higher stress levels</li>
                  <li>• Consider rentals first</li>
                  <li>• Military relocation specialists essential</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Execute Your PCS Real Estate Plan?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Don&apos;t navigate your PCS alone. Get expert guidance from an MRP Certified military real estate specialist 
              who understands the unique challenges of military relocations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Your PCS Real Estate Plan
              </Link>
              <a
                href="tel:+1-555-MILITARY"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (555) MILITARY
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}