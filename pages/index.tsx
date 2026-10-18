import Head from 'next/head';
import Link from 'next/link';
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Inderjyot Singh – Clinical Digital Consultant</title>
        <meta name="description" content="Book healthcare IT consulting sessions focused on workflow transformation, CRM integrations, and digital strategy. Powered by Inderjyot Singh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div>
        <nav className="w-full bg-white shadow-md py-4 fixed top-0 z-50">
          <div className="max-w-5xl mx-auto flex justify-center gap-8 text-sm font-semibold">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <Link href="/workflow-recovery" className="text-gray-700 hover:text-blue-600">Workflow Sprint</Link>
            <Link href="/book" className="text-gray-700 hover:text-blue-600">Book</Link>
            <Link href="/retainer" className="text-gray-700 hover:text-blue-600">Retainer</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </nav>
        <main id="home" className="min-h-screen bg-white text-gray-900 px-6 py-32 text-center space-y-8">
          <h1 className="text-4xl font-bold">Inderjyot Singh – Clinical Digital Consultant</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Helping healthcare teams transform workflows with clinical informatics, CRM migrations, and digital tool adoption.
          </p>
          <p className="mt-6 text-sm italic text-gray-700">
            Need one workflow reviewed and a clear 30-day action plan? Explore the fixed-scope Clinopilot Workflow Recovery Sprint.
          </p>
          <Link href="/workflow-recovery" className="inline-block bg-teal-700 text-white px-7 py-4 rounded-lg font-semibold">Explore the US $1,500 Workflow Recovery Sprint</Link>
        </main>
      </div>
    </>
  );
}