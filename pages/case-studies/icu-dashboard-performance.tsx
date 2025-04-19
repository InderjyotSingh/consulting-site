import Head from 'next/head';

export default function CaseStudyICUDashboardPerformance() {
  return (
    <>
      <Head>
        <title>ICU Dashboard & Patient Flow Optimization – Inderjyot Singh</title>
        <meta name="description" content="How Inderjyot Singh supported ICU capacity planning and patient flow optimization at Nova Scotia Health using SAP BO, Power BI, and stakeholder-aligned metrics." />
        <meta name="keywords" content="ICU dashboard healthcare, SAP BusinessObjects, patient flow optimization, clinical informatics Nova Scotia Health, ICU analytics, bed allocation software" />
        <meta property="og:title" content="ICU Dashboard & Patient Flow Optimization – Inderjyot Singh" />
        <meta property="og:description" content="Improved ICU utilization and ED throughput using dashboards and visual analytics built on SAP BO and Power BI at NS Health." />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-4xl mx-auto space-y-10">
        <article>
          <h1 className="text-3xl font-bold mb-2">ICU Dashboard & Patient Flow Optimization</h1>
          <p className="text-sm text-gray-500">Nova Scotia Health | SAP BusinessObjects | Power BI | ICU & ED Steering Committee | 2019–2021</p>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">🩺 Problem</h2>
            <p>
              The Critical Care Committee at NSH lacked real-time visibility into ICU bed availability, ED congestion, and patient flow bottlenecks. Clinical leaders needed a centralized dashboard that would support decision-making on staffing and bed assignment under daily operational pressures.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">⚙️ Solution</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Built real-time dashboards in SAP BO and Power BI to monitor ICU occupancy, LOS, ALC status, and daily bed movements</li>
              <li>Mapped workflows from ED triage to ICU transfer to identify delays in throughput</li>
              <li>Collaborated with data leads and clinicians to align metrics with care priorities</li>
              <li>Created visual scoring models to inform site-level staffing and resource decisions</li>
            </ul>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">📈 Results</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Improved ICU occupancy visibility across 4 sites</li>
              <li>Helped reduce ED-to-ICU transfer time by 18%</li>
              <li>Supported ICU admission/discharge planning through visual cues for ALC and delayed discharges</li>
              <li>Created template and knowledge base adopted by Patient Flow teams post-project</li>
            </ul>
          </section>

          <footer className="mt-10 text-sm text-gray-500 italic">
            Project led under the Critical Care Steering Committee at Nova Scotia Health. Technical stack included SAP BO, Power BI, and Excel-based validation from nursing leads.
          </footer>
        </article>
      </main>
    </>
  );
}