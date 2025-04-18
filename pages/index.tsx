import Head from 'next/head';

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
            <a href="#book" className="text-gray-700 hover:text-blue-600">Book</a>
            <a href="#retainer" className="text-gray-700 hover:text-blue-600">Retainer</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </nav>
        <main id="home" className="min-h-screen bg-white text-gray-900 px-6 py-32 text-center space-y-8">
          <h1 className="text-4xl font-bold">Inderjyot Singh – Clinical Digital Consultant</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Helping healthcare teams transform workflows with clinical informatics, CRM migrations, and digital tool adoption.
          </p>
          <p className="mt-6 text-sm italic text-gray-700">
            Begin your engagement by booking a 1-hour consultation below.
          </p>

          <section id="book" className="mt-20 text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Your 1-Hour Consultation</h2>
            <p className="max-w-xl mx-auto mb-6 text-base sm:text-lg">
              Ready to get started? Book a consultation for just <strong>$45 CAD</strong>. Secure your slot and begin your journey with a strategic deep dive.
            </p>
            <div className="mb-4">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="inderjyotsingh9@gmail.com" />
                <input type="hidden" name="item_name" value="1-Hour Clinical Consultation" />
                <input type="hidden" name="currency_code" value="CAD" />
                <input type="hidden" name="amount" value="45.00" />
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold w-full sm:w-auto">
                  Pay & Book via PayPal
                </button>
              </form>
            </div>
            <p className="text-sm italic text-gray-500">
              * This consultation fee is non-refundable. You will be redirected to schedule after payment.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}