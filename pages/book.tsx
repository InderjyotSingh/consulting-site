import Head from 'next/head';

export default function BookPage() {
  return (
    <>
      <Head>
        <title>Book a Consultation – ClinoPilot</title>
        <meta name="description" content="Start with a 1-hour paid consultation to assess your clinic's digital workflow needs. Global support available." />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-3xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold">Book a 1-Hour Consult</h1>
        <p>
          This consultation is ideal for clinics, solo providers, or clinical managers looking to improve digital workflows. We'll review your goals and outline a path toward optimization and integration.
        </p>
        <p>
          Sessions are billed at $45 USD and conducted virtually. Once payment is complete, you’ll receive a link to schedule your time.
        </p>
        <a
          href="https://www.paypal.com/paypalme/inderjyotsingh/45"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded hover:bg-brand-secondary"
        >
          Pay $45 USD & Book Now
        </a>
      </main>
    </>
  );
}