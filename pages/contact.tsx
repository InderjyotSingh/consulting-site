import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – ClinoPilot</title>
        <meta name="description" content="ClinoPilot contact details are shared following a paid consultation. Book now to get started." />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-3xl mx-auto space-y-10 text-center">
        <h1 className="text-3xl font-bold">Contact ClinoPilot</h1>
        <p className="text-lg">
          To preserve time and quality for serious clients, contact access is provided only after booking a paid consultation.
        </p>
        <p className="text-md text-gray-600 max-w-xl mx-auto">
          Once payment is complete, you will receive access to email, scheduling, and optional Slack support.
        </p>
        <a
          href="/book"
          className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded hover:bg-brand-secondary mt-4"
        >
          Book a 1-Hour Consult ($45 USD)
        </a>
        <p className="text-sm text-gray-500 italic mt-4">
          * All consultations are non-refundable. Global clients welcome.
        </p>
        <div className="mt-8 text-sm text-gray-600">
          <p>Need credibility? You can verify my past work via LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/inderjyot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            linkedin.com/in/inderjyot
          </a>
        </div>
      </main>
    </>
  );
}