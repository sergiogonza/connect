import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Connect and Close</title>
        <meta
          name="description"
          content="Privacy policy of Connect and Close"
        />
      </Head>
      <main className="bg-gray-50 text-gray-800 px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="mb-6">
            <strong>Effective Date:</strong> April 30, 2025
          </p>

          {/* 1. Data Controller */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            1. Data Controller
          </h2>
          <p>
            The data controller for the processing of personal data is{" "}
            <strong>Connect and Close</strong>, an independent venture without
            formal company registration.
          </p>
          <p className="mb-4">
            <strong>Contact email:</strong>{" "}
            <a
              href="mailto:contact@connectandclose.com"
              className="text-blue-600 hover:underline"
            >
              contact@connectandclose.com
            </a>
          </p>

          {/* 2. Information We Collect */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Demographic information (age, location, etc.)</li>
            <li>IP address and browsing data</li>
            <li>Data provided through Facebook Lead Ads forms</li>
            <li>Information collected via cookies</li>
          </ul>

          {/* 3. Facebook Lead Ads */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            3. Data Collection from Facebook Lead Ads
          </h2>
          <p className="mb-4">
            When you interact with Facebook Ads forms (Facebook Lead Ads), we
            may receive your personal information directly from Meta, including
            your name, email address, phone number, and other data you have
            provided.
          </p>
          <p className="mb-4">
            This information is used solely for the purposes described in this
            policy. By submitting your data via a Facebook form, you agree that
            Connect and Close may process it in accordance with this policy and
            the{" "}
            <a
              href="https://www.facebook.com/policy.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook Privacy Policy
            </a>
            .
          </p>

          {/* 4. Purpose of Data Processing */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            4. Purpose of Data Processing
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Send free content, resources, or guides requested by you</li>
            <li>Manage user inquiries and requests</li>
            <li>Send marketing communications if you have given your consent</li>
            <li>
              Analyze website behavior to improve user experience
            </li>
            <li>Comply with legal obligations</li>
          </ul>

          {/* 5. Cookies */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            5. Use of Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            We use cookies and similar technologies to understand how you
            navigate our site. Tools we use include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Google Analytics:</strong> to analyze website traffic.
            </li>
            <li>
              <strong>Facebook Pixel:</strong> to track conversions and segment
              audiences.
            </li>
          </ul>
          <p className="mb-4">
            You can configure your browser to block cookies, although some site
            features may not be available.
          </p>

          {/* 6. Data Sharing */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            6. Data Sharing with Third Parties
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>With service providers who assist us (email, analytics, hosting)</li>
            <li>As required by law</li>
            <li>With your explicit consent</li>
          </ul>

          {/* 7. User Rights */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            7. User Rights
          </h2>
          <p className="mb-4">You may exercise the following rights:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Request restriction of data use</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mb-4">
            To do so, please email us at{" "}
            <a
              href="mailto:contact@connectandclose.com"
              className="text-blue-600 hover:underline"
            >
              contact@connectandclose.com
            </a>{" "}
            and include a copy of your identification document to verify your
            request.
          </p>

          {/* 8. Security Measures */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            8. Security Measures
          </h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            protect your data from loss, misuse, or unauthorized access.
          </p>

          {/* 9. Changes */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            9. Changes to This Policy
          </h2>
          <p className="mb-4">
            We reserve the right to update this Privacy Policy at any time.
            Changes will be posted on this page, and if they are significant, we
            will notify you by email or within the site.
          </p>

          <p className="italic">Last updated: April 30, 2025</p>
        </div>
      </main>
    </>
  );
}
