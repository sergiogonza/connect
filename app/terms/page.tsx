import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Connect and Close</title>
        <meta
          name="description"
          content="Terms and conditions for the use of the Connect and Close website"
        />
      </Head>
      <main className="bg-gray-50 text-gray-800 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="mb-6">
            Work that inspires loyalty and transforms your business.
          </p>
          <p className="mb-6">
            Below are the terms and conditions for the use of the information
            contained on the Connect and Close website. By accessing and using
            the website, you expressly acknowledge and accept the terms of use
            described here.
          </p>
          <p className="mb-6">
            The purpose of the website is to provide users with easy access to
            information about Connect and Close and its activities, in
            accordance with the principles of transparency and the right of
            access to information.
          </p>

          {/* Considering */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            Considering
          </h2>
          <ol className="list-decimal pl-5 space-y-4 mb-6">
            <li>
              The material contained on the website consists mainly of
              information about Connect and Close and does not address specific
              circumstances related to particular individuals.
            </li>
            <li>
              These terms apply to all information, resources, tools, and forms
              provided through the website. However, the data provided here come
              from multiple sources and are protected by law; therefore, any
              commercialization or exploitation of the website’s content—
              including information, photographs, images, and in general all
              material contained therein—is prohibited.
              <br />
              <br />
              The use of the information for personal, institutional, and
              non-commercial purposes is authorized, provided that the following
              exact citation is made:{" "}
              <em>
                "Source: Connect and Close - www.connectandclose.io"
              </em>
              . Copying or reproducing the data in any electronic medium
              (networks, databases, CDs, external storage devices, etc.) that
              allows the availability of this information to multiple users
              without prior approval from Connect and Close is expressly
              prohibited.
              <br />
              <br />
              The Connect and Close website may contain links to external pages
              over which Connect and Close exercises no control and for which it
              assumes no responsibility. The content of such links is the sole
              responsibility of the respective entities.
            </li>
            <li>
              Connect and Close, through its website, reserves the right to
              modify the contents, materials, products, and services published,
              as well as the terms and conditions for the use of this portal, in
              accordance with new legal requirements, business practices and
              trends, or institutional decisions.
            </li>
            <li>
              The content and information published on the website are the
              property of Connect and Close. Partial reproduction, translation,
              inclusion, transmission, storage, or access through analog,
              digital, or any other systems or technologies is prohibited
              without prior written authorization from Connect and Close.
              Copying, reproducing, modifying, transmitting, licensing, or
              selling any information taken from the website is expressly
              prohibited.
            </li>
            <li>
              By using the website, you accept these terms and conditions. Any
              materials obtained and downloaded are at the user’s own risk, and
              the user will be solely responsible for any computer or device
              damage resulting from downloading and using such materials. Under
              no circumstances shall Connect and Close be liable for damages
              resulting from data loss, software or hardware performance, or the
              use of services or information from the website.
              <br />
              <br />
              Matters relating to privacy, data processing, and copyright can be
              consulted in the relevant policies:
              <ul className="list-disc pl-5 mt-2">
                <li>Information Security and Privacy Policy</li>
                <li>Personal Data Processing Policy</li>
                <li>Copyright Policy</li>
              </ul>
            </li>
          </ol>

          {/* Contact */}
          <p className="mb-6">
            The institutional contact for matters related to these terms and
            conditions is:
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Support@connectandclose.io"
              className="text-blue-600 hover:underline"
            >
              Support@connectandclose.io
            </a>
            <br />
            <strong>Phone:</strong> +57 310 634 4695
          </p>
        </div>
      </main>
    </>
  );
}
