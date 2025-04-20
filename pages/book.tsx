import Head from 'next/head';

export default function BookPage() {
  return (
    <>
      <Head>
        <title>Book a Consultation – ClinoPilot</title>
        <meta name="description" content="Start your clinic's digital workflow transformation with a 1-hour paid consult. Ideal for clinical managers, private practices, and solo providers." />
        <meta property="og:title" content="Book a 1-Hour Consultation – ClinoPilot" />
        <meta property="og:description" content="Kickstart your digital transformation with a personalized workflow and systems consultation." />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-3xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold">Book a 1-Hour Consult</h1>
        <p className="text-lg">
          This 60-minute session is perfect for:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Clinic managers seeking help with EMR, scheduling, or documentation tools</li>
          <li>Solo or small practice owners exploring digital upgrades</li>
          <li>Health teams undergoing transitions or needing workflow clarity</li>
        </ul>
        <p className="text-md text-gray-800 pt-2">
          You&rsquo;ll receive tailored advice and a prioritized roadmap with system suggestions, tool integrations, or automation options — aligned to your clinic&apos;s exact goals.
        </p>
        <p className="text-sm text-gray-600">
          Secure checkout via PayPal. Once payment is complete, you&apos;ll receive a private link to schedule your time.
        </p>
        <a
          href="https://www.paypal.com/paypalme/inderjyotsingh/45"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded hover:bg-brand-secondary"
        >
          Pay $45 USD & Book Now
        </a>
        <p className="text-sm text-gray-500 italic mt-4">
          * Be sure to book within 7 days of payment. All consultations are non-refundable.
        </p>
      </main>
    </>
  );
}