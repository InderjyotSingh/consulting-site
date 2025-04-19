import Head from 'next/head';

export default function CaseStudyPeriopSchedulingWorkflow() {
  return (
    <>
      <Head>
        <title>Perioperative Scheduling & Surgical Workflow – Inderjyot Singh</title>
        <meta name="description" content="Case study: Streamlined perioperative workflows and surgical team coordination using Cerner Scheduling and patient readiness analytics." />
        <meta name="keywords" content="perioperative scheduling, Cerner case study, surgical workflow optimization, EHR template builds, OR coordination, Inderjyot Singh health informatics" />
        <meta property="og:title" content="Perioperative Scheduling & Surgical Workflow – Inderjyot Singh" />
        <meta property="og:description" content="Streamlined surgical workflows and case readiness using Cerner tools and periop analytics." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-4xl mx-auto space-y-10">
        <article>
          <h1 className="text-3xl font-bold mb-2">Perioperative Scheduling & Surgical Workflow</h1>
          <p className="text-sm text-gray-500">NSHA | Cerner Scheduling | Surgical Team Coordination | 2020–2021</p>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">🩺 Problem</h2>
            <p>
              Surgical teams were experiencing delays in OR scheduling, case readiness, and communication across clinical and operations staff. Existing workflows were fragmented between paper, EHR templates, and manual follow-up.
            </p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">⚙️ Solution</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Audited perioperative scheduling workflows with nursing leads and OR managers</li>
              <li>Mapped delays across case cart prep, checklist documentation, and post-op recovery handoff</li>
              <li>Worked with clinical informatics to implement Cerner scheduling templates</li>
              <li>Embedded checklists and readiness flags into pre-op documentation flows</li>
              <li>Documented and trained teams on updated flow including edge-case and downtime scenarios</li>
            </ul>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">📈 Results</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Improved OR start-time compliance across 3 surgical units</li>
              <li>Reduced back-and-forth calls between booking and nursing staff by 40%</li>
              <li>Standardized surgical readiness template across NSHA pilot units</li>
              <li>Enabled Cerner-integrated audit trail for documentation gaps and recovery delays</li>
            </ul>
          </section>

          <footer className="mt-10 text-sm text-gray-500 italic">
            Implementation informed by OR team feedback, surgical resource manuals, and direct Cerner template development with Nova Scotia Health's Clinical Informatics and Patient Flow teams.
          </footer>
        </article>
      </main>
    </>
  );
} 