export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-darkblue px-6 py-12">
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-fanwood font-light mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-700 mb-4">
          Welcome to our Clare Analysis Model. By accessing and using this
          service, you agree to the following terms:
        </p>

        <h2 className="text-xl font-semibold mt-4">1. User Consent</h2>
        <p className="text-sm text-gray-700 mb-2">
          By using our AI-powered analysis tool, you consent to the processing
          of your facial image data for skin assessment purposes.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Data Usage</h2>
        <p className="text-sm text-gray-700 mb-2">
          We do not store or share your uploaded images. All processing happens
          in real-time and is not saved beyond your session.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. No Medical Advice</h2>
        <p className="text-sm text-gray-700 mb-2">
          The analysis provided is for informational purposes only and should
          not be considered medical advice. Please consult a dermatologist for
          professional guidance.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Service Limitations</h2>
        <p className="text-sm text-gray-700 mb-2">
          We reserve the right to modify or discontinue this service at any time
          without notice.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Acceptance of Terms</h2>
        <p className="text-sm text-gray-700 mb-2">
          Your continued use of the service indicates your acceptance of these
          terms. If you do not agree, please discontinue use.
        </p>

        <p className="text-sm text-gray-700 mt-6 text-center">
          If you have any questions, please contact our support team.
        </p>
      </div>
    </div>
  );
}
