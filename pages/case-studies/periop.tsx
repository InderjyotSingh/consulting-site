import Head from 'next/head';

export default function PeriopCaseStudy() {
  return (
    <>
      <Head>
        <title>Perioperative Scheduling & Surgical Workflow - Inderjyot Singh</title>
        <meta name="description" content="Streamlined perioperative workflows and surgical coordination using Cerner scheduling tools." />
        <meta name="keywords" content="perioperative scheduling, surgical workflow, Cerner case study, OR readiness, Inderjyot Singh informatics" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold">Perioperative Scheduling & Surgical Workflow</h1>
        <p className="text-sm text-gray-500">NSHA | Cerner Scheduling | Surgical Team Coordination | 2020–2021</p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">🩺 Problem</h2>
          <p>
            Surgical teams were experiencing delays in OR scheduling, case readiness, and communication across clinical and operations staff. Workflows were fragmented between paper, EMR templates, and manual follow-up.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">⚙️ Solution</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Audited perioperative scheduling workflows with nursing leads and OR managers</li>
            <li>Mapped delays across case chart prep, checklist documentation, and post-op recovery handoff</li>
            <li>Worked with clinical informatics to implement Cerner scheduling templates</li>
            <li>Embedded checklists and readiness flags into pre-op documentation flows</li>
            <li>Documented and trained teams on updated flow including edge-case and downtime scenarios</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">📈 Results</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Improved on start-time compliance across the surgical unit</li>
            <li>Standardized pre-op readiness communication and flags</li>
            <li>Reduced patient preparation time by 20–30% depending on complexity</li>
            <li>Established a repeatable EMR-based model for surgical workflow optimization</li>
          </ul>
        </section>
      </main>
    </>
  );
}