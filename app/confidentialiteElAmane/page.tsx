export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-700">
          <strong>Effective Date:</strong> June 30, 2026
        </p>

        <p className="text-gray-700">
          El Amane Driver is a free professional application designed for taxi
          drivers to receive and manage ride requests. This Privacy Policy
          explains how we collect, use, disclose and protect your personal
          information when you use our application.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Information We Collect
        </h2>

        <p className="text-gray-700">
          We may collect the following information:
        </p>

        <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
          <li>Your name</li>
          <li>Your phone number</li>
          <li>Your driver account information</li>
          <li>Ride and trip management information</li>
        </ul>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Location Information
        </h2>

        <p className="text-gray-700">
          El Amane Driver requires access to your device's location, including
          background location, in order to:
        </p>

        <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
          <li>Determine your current position.</li>
          <li>Assign nearby ride requests.</li>
          <li>Allow passengers to track the driver's location.</li>
          <li>Improve dispatch accuracy.</li>
        </ul>

        <p className="mt-2 text-gray-700">
          We only keep the latest location necessary to provide the service.
          Background location permission is required for the application to work
          correctly.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Device Information
        </h2>

        <p className="text-gray-700">
          We may automatically collect technical information including:
        </p>

        <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
          <li>Device model</li>
          <li>Operating system version</li>
          <li>IP address</li>
          <li>Unique device identifiers</li>
          <li>Application usage information</li>
          <li>Crash reports and diagnostics</li>
        </ul>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          How We Use Your Information
        </h2>

        <p className="text-gray-700">
          Your information is used to:
        </p>

        <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
          <li>Provide and maintain our services.</li>
          <li>Connect drivers with passengers.</li>
          <li>Improve application performance.</li>
          <li>Send service notifications.</li>
          <li>Ensure platform security.</li>
          <li>Prevent fraud and abuse.</li>
        </ul>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Third-Party Services
        </h2>

        <p className="text-gray-700">
          We may use trusted third-party services such as cloud hosting, push
          notifications, analytics and mapping services. These providers only
          process the information necessary to perform their services and are
          required to protect your data.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Data Retention
        </h2>

        <p className="text-gray-700">
          We retain your personal information only for as long as necessary to
          provide our services and comply with legal obligations.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Your Rights
        </h2>

        <p className="text-gray-700">
          You have the right to access, update or request the deletion of your
          personal information at any time.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Delete Your Account
        </h2>

        <p className="text-gray-700">
          You may request the deletion of your account and personal data by
          visiting:
          <a
            href="/suppression-donnees"
            className="ml-1 font-medium text-blue-600 underline"
          >
            Account & Data Deletion
          </a>
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Children's Privacy
        </h2>

        <p className="text-gray-700">
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from children.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Security
        </h2>

        <p className="text-gray-700">
          We implement reasonable technical and organizational measures to
          protect your information against unauthorized access, disclosure,
          alteration or destruction.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Changes to This Privacy Policy
        </h2>

        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be published on this page with a new effective date.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Contact Us
        </h2>

        <p className="text-gray-700">
          If you have any questions regarding this Privacy Policy, please
          contact us at:
          <strong> postmaster@elamane.net</strong>
        </p>
      </div>
    </main>
  );
}