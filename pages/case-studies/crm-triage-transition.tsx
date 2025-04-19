import Head from 'next/head';

export default function CRMTriageTransition() {
  return (
    <>
      <Head>
        <title>CRM Triage System & Optum Transition – Inderjyot Singh</title>
        <meta name="description" content="Case study: How Inderjyot Singh designed a triage system post-CRM migration for a Canadian health insurer. Resolved 9,000+ tickets and aligned workflows with Optum platform." />
        <meta name="keywords" content="CRM migration healthcare, Optum CRM transition, clinical informatics case study, triage system design, Inderjyot Singh, service management in health insurance, clinical digital consultant" />
        <meta property="og:title" content="CRM Triage System & Optum Transition – Inderjyot Singh" />
        <meta property="og:description" content="Post-merger CRM triage system redesign for a major health insurer. Managed 9,000+ incidents in 90 days using ServiceNow." />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-4xl mx-auto space-y-10">
        <article>
          <h1 className="text-3xl font-bold mb-2">CRM Triage System & Optum Transition</h1>
          <p className="text-sm text-gray-500">Health Insurance Sector | NTT Data | ServiceNow | Optum CRM | 2021–2023</p>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">🩺 Problem</h2>
            <p>
              Following a merger, the client needed to unify its CRM and service systems into the Optum platform. Thousands of support cases had to be triaged, categorized, and responded to within a short timeline to avoid SLA penalties and internal service delays.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">⚙️ Solution</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Mapped out all incident types and tagged routing logic based on system dependencies</li>
              <li>Worked cross-functionally with claims processing, IT service desk, and clinical documentation teams</li>
              <li>Built triage workflows using ServiceNow linked to key forms in the Optum system</li>
              <li>Created client-facing SOPs and UAT scenarios to onboard support agents post-go-live</li>
              <li>Benchmarked routing logic against PHIPA/HIPAA standards and audit criteria</li>
            </ul>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">📈 Results</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Over 9,000 incidents triaged within 90 days</li>
              <li>Reduced ticket handling time by 25%</li>
              <li>Improved service alignment across CRM, claims, and system vendors</li>
              <li>Enabled faster turnaround on digital enhancements requested by client teams</li>
            </ul>
          </section>

          <section className="mt-10 text-sm text-gray-500 italic">
            SEO keywords: CRM migration in healthcare, triage design, Optum CRM transition, PHIPA compliant triage, ServiceNow case study, Inderjyot Singh CRM expert
          </section>
        </article>
      </main>
    </>
  );
}