import Link from 'next/link';
import Head from 'next/head';

export default function CaseStudiesIndex() {
  return (
    <>
      <Head>
        <title>Case Studies – Inderjyot Singh</title>
        <meta name="description" content="Explore real-world healthcare technology case studies led by Inderjyot Singh – from CRM triage redesign to EHR optimization and workflow transformation." />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-5xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-2">Clinical & IT Case Studies</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            These projects demonstrate measurable impact on clinical workflows, digital adoption, and system performance – grounded in real healthcare orgs and systems.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/case-studies/crm-triage-transition" className="block bg-blue-50 border border-blue-200 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-900">CRM Triage & Optum Transition</h2>
            <p className="text-sm text-gray-700 mt-2">
              Migrated a CRM to Optum, redesigned incident triage workflows, and resolved 9,000+ cases in 90 days using ServiceNow and stakeholder-aligned SOPs.
            </p>
            <p className="text-xs mt-4 text-blue-600">View case study →</p>
          </Link>
        </section>
      </main>
    </>
  );
}