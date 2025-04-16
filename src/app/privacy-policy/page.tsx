// app/privacy-policy.tsx

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>
        At Explain It, we respect your privacy and are committed to protecting
        your personal information. This Privacy Policy explains how we collect,
        use, and safeguard your data when you use our website.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li>
          We collect data like your IP address, browser type, and device
          information when you visit our website.
        </li>
        <li>
          We also collect data on your usage, like which pages you visit and how
          long you stay.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-4">
        How We Use Your Information
      </h2>
      <ul className="list-disc ml-6">
        <li>To improve the user experience.</li>
        <li>
          To track and analyze usage for website performance (using tools like
          Plausible Analytics).
        </li>
        <li>To serve relevant ads (through Google AdSense).</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-4">Cookies</h2>
      <p>
        We use cookies to enhance your experience on our website. You can choose
        to disable cookies through your browser settings.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Third-Party Services</h2>
      <p>
        We use third-party services, including Google Analytics and Google
        AdSense, to provide our services. These services may collect data like
        usage information.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
      <p>
        You have the right to access, update, or delete any personal data we
        store. You can also disable cookies from your browser settings.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a href="mailto:nordstromjimmy@gmail.com" className="text-blue-500">
          nordstromjimmy@gmail.com
        </a>
        .
      </p>
      <p>Effective Date: [2025-04-16]</p>
    </div>
  );
};

export default PrivacyPolicy;
