import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white text-gray-900 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold mb-8">All Case Studies</h1>

      <ul className="space-y-4">
        <li>
          <Link href="/case-studies/crm-triage-transition" className="text-blue-600 underline">
            CRM Triage & Optum CRM Migration
          </Link>
        </li>
        <li>
          <Link href="/case-studies/icu-dashboard-performance" className="text-blue-600 underline">
            ICU Dashboard & Bed Management
          </Link>
        </li>
        <li>
          <Link href="/case-studies/periop-scheduling-workflow" className="text-blue-600 underline">
            Perioperative Scheduling Workflow
          </Link>
        </li>
      </ul>
    </main>
  );
}