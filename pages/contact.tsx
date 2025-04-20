import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – ClinoPilot</title>
        <meta
          name="description"
          content="Contact ClinoPilot after booking a paid consultation. We work with clinics and healthcare teams to streamline digital workflows."
        />
        <meta property="og:title" content="Contact – ClinoPilot" />
        <meta property="og:description" content="Secure your consult before contact access. Serious inquiries only." />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-3xl mx-auto space-y-10 text-center">
        <h1 className="text-3xl font-bold">Contact ClinoPilot</h1>
        <p className="text-lg">
          To protect time and quality for active clients, contact access is provided after a paid consultation is booked.
        </p>
        <p className="text-md text-gray-600 max-w-xl mx-auto">
          You’ll receive access to our email, scheduling tools, and async support upon confirmation.
        </p>
        <a
          href="/book"
          className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded hover:bg-brand-secondary mt-4"
        >
          Book a 1-Hour Consult ($45 USD)
        </a>
        <p className="text-sm text-gray-500 italic mt-4">
          * Bookings are non-refundable. Global clinical partners welcome.
        </p>
        <div className="mt-8 text-sm text-gray-600">
          <p>Want to verify credibility? Visit my professional background on LinkedIn:</p>
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