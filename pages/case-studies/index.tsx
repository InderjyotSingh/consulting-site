import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies – Inderjyot Singh</title>
        <meta name="description" content="Explore our case studies showcasing successful projects and outcomes." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen px-6 py-20 bg-brand-accent text-brand-dark max-w-3xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-brand-primary">Case Studies</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-brand-dark rounded-lg p-6 hover:shadow-md transition hover:bg-brand-secondary hover:text-white">
            <h2 className="text-xl font-semibold mb-2">CRM Triage & Optum CRM Migration</h2>
            <p className="text-sm text-gray-700 mb-4">NTT Data | ServiceNow | Health Insurance</p>
            <Link href="/case-studies/crm-triage-transition" className="text-brand-primary underline">
              View Case Study →
            </Link>
          </div>

          <div className="border border-brand-dark rounded-lg p-6 hover:shadow-md transition hover:bg-brand-secondary hover:text-white">
            <h2 className="text-xl font-semibold mb-2">Perioperative Scheduling Workflow</h2>
            <p className="text-sm text-gray-700 mb-4">NSHA | Cerner | OR Coordination</p>
            <Link href="/case-studies/periop" className="text-brand-primary underline">
              View Case Study →
            </Link>
          </div>

          <div className="border border-brand-dark rounded-lg p-6 hover:shadow-md transition hover:bg-brand-secondary hover:text-white">
            <h2 className="text-xl font-semibold mb-2">ICU Dashboard & Patient Flow Optimization</h2>
            <p className="text-sm text-gray-700 mb-4">NSHA | SAP BO & Power BI | Critical Care</p>
            <Link href="/case-studies/icu-dashboard-performance" className="text-brand-primary underline">
              View Case Study →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}