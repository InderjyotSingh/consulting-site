import Head from 'next/head';

export default function Retainer() {
  return (
    <>
      <Head>
        <title>Retainer – ClinoPilot</title>
        <meta name="description" content="Explore ClinoPilot's premium retainer plan – full-service clinical systems support for $1500 USD/month." />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold">Retainer Service – $1500 USD/month</h1>
        <p className="text-lg">Our premium monthly package includes:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Unlimited async support via email or shared doc</li>
          <li>Bi-weekly live sessions to iterate clinic workflows and tools</li>
          <li>Ongoing vendor coordination and EMR optimization</li>
          <li>FHIR, HL7, and practice management integration support</li>
        </ul>
        <p>We bill monthly in advance. Service can be paused or updated at any time.</p>
      </main>
    </>
  );
}