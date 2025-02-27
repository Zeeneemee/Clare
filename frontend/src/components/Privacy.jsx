import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-[150px]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Clare Project Privacy Policy
      </h1>
      <p className="text-center text-gray-500 mb-8">
        <strong>Effective Date:</strong> 5 May 2025
      </p>

      <p className="text-gray-700 mb-6">
        This Privacy Policy outlines how Clare (referred to as "Clare," "we,"
        "us," or "our") collects, uses, and protects your personal information
        in connection with the services provided through the Clare platform,
        including but not limited to our mobile apps, websites, and related
        services ("Services"). By using our Services, you agree to the
        collection and use of your information as outlined in this policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1. Information We Collect
      </h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        A. Information You Provide to Us
      </h3>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>
          <strong>Personal Identification Information:</strong> When you
          interact with Clare, you may provide us with personal details such as
          your name, email address, phone number, mailing address, payment
          information, and any other information that helps us provide services
          to you.
        </li>
        <li>
          <strong>Transaction Data:</strong> We collect information when you
          make purchases or engage with our Services. This includes payment
          information, shipping details, and billing information.
        </li>
        <li>
          <strong>Customer Support Data:</strong> If you reach out to our
          support team, we collect information related to your request, such as
          email address, request details, and any information provided for
          resolving the issue.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        B. Automatic Data Collection
      </h3>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>
          <strong>Device Information:</strong> We collect information about the
          devices you use to access our Services, including your IP address,
          browser type, operating system, device identifiers, and related
          technical information.
        </li>
        <li>
          <strong>Usage Data:</strong> We track how you interact with our
          Services, including the pages you visit, the features you use, and the
          duration of your sessions.
        </li>
        <li>
          <strong>Location Data:</strong> If you use our Services on mobile
          devices, we may collect location data to provide location-based
          services or personalized experiences.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We use cookies to
          enhance user experience and gather data about usage trends. You can
          adjust your browser settings to control cookies.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        C. Biometric Data (if applicable)
      </h3>
      <p className="text-gray-700 mb-6">
        In certain cases, Clare may collect biometric data, such as facial scans
        or body measurements, to personalize your experience with our Services.
        This data will only be used for the intended purposes and will not be
        shared or sold to third parties without your consent.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="text-gray-700 mb-6">
        We use the information we collect for several purposes, including but
        not limited to:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>To provide, operate, and maintain our Services.</li>
        <li>To process transactions and manage your account.</li>
        <li>To improve, personalize, and develop new products and features.</li>
        <li>
          To communicate with you about our Services, offers, and other updates.
        </li>
        <li>
          To monitor and analyze the use of our Services to enhance user
          experience.
        </li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3. How We Share Your Information
      </h2>
      <p className="text-gray-700 mb-6">
        We may share your information with the following parties in certain
        circumstances:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>
          <strong>Service Providers:</strong> We work with third-party providers
          to process payments, provide customer support, host our websites, and
          perform other necessary services.
        </li>
        <li>
          <strong>Affiliates and Partners:</strong> We may share your
          information with our affiliates and business partners for the purposes
          described in this policy.
        </li>
        <li>
          <strong>Legal Compliance:</strong> We may disclose your information to
          comply with legal requirements, protect our rights, or investigate
          illegal activities.
        </li>
        <li>
          <strong>Aggregated Data:</strong> We may share anonymized and
          aggregated data with third parties for research or analysis purposes.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4. Data Security
      </h2>
      <p className="text-gray-700 mb-6">
        We implement reasonable security measures to protect your information
        from unauthorized access, disclosure, alteration, or destruction.
        However, no data transmission over the internet is 100% secure, and we
        cannot guarantee the security of information transmitted to or from our
        Services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        5. Your Rights and Choices
      </h2>
      <p className="text-gray-700 mb-6">
        Depending on your jurisdiction, you may have the following rights
        regarding your personal data:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>
          <strong>Access and Correction:</strong> You can access, update, or
          correct your personal information by contacting us.
        </li>
        <li>
          <strong>Deletion:</strong> You can request the deletion of your data
          where permitted by law.
        </li>
        <li>
          <strong>Opt-Out:</strong> You may opt out of receiving promotional
          communications from us.
        </li>
        <li>
          <strong>Data Portability:</strong> You may request a copy of your data
          in a structured, machine-readable format.
        </li>
        <li>
          <strong>Right to Object:</strong> You can object to the processing of
          your personal data in certain circumstances.
        </li>
      </ul>

      <p className="text-gray-700 mb-6">
        For any of the above requests or other inquiries related to your data,
        please contact us at <strong>[email address]</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        6. Cookies and Tracking Technologies
      </h2>
      <p className="text-gray-700 mb-6">
        Clare uses cookies and similar technologies to enhance the user
        experience and gather information about how our Services are used. You
        can manage your cookie preferences through your browser settings. Please
        note that disabling cookies may affect the functionality of certain
        parts of our Services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        7. Third-Party Links
      </h2>
      <p className="text-gray-700 mb-6">
        Our Services may contain links to third-party websites or services that
        are not operated by Clare. We are not responsible for the privacy
        practices or content of these third-party sites. We encourage you to
        review their privacy policies before providing any personal information.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        8. International Transfers
      </h2>
      <p className="text-gray-700 mb-6">
        If you are located outside of the jurisdiction where Clare operates,
        your information may be transferred to and processed in a country where
        our servers are located. By using our Services, you consent to the
        transfer of your information as outlined in this policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        9. Changes to This Privacy Policy
      </h2>
      <p className="text-gray-700 mb-6">
        We may update this Privacy Policy from time to time. When we make
        significant changes, we will notify you by updating the "Effective Date"
        at the top of the policy. We encourage you to review this policy
        periodically for any updates or changes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        10. Contact Us
      </h2>
      <p className="text-gray-700 mb-6">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Email:</strong> [email address]
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Address:</strong> [physical address]
      </p>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
