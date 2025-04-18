export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20 text-center space-y-8">
      <h1 className="text-3xl font-bold">Thank You for Your Payment</h1>
      <p className="max-w-2xl mx-auto text-lg">
        Your transaction has been completed, and a receipt for your purchase has been emailed to you. You may log into your PayPal account to view transaction details.
      </p>
      <p className="max-w-xl mx-auto text-base text-gray-700">
        You’re now ready to schedule your 1-on-1 consultation. Please use the link below to choose a time that works best for you.
      </p>
      <a
        href="https://calendly.com/inderhealthtechconsulting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Book Your Session
      </a>
      <p className="text-sm text-gray-500 italic mt-4">
        * Be sure to book within 7 days of purchase. Bookings are non-refundable.
      </p>
    </main>
  );
}