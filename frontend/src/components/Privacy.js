// PrivacyPolicy.js

import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy for Lampros Home Solutions App</h1>
      <p className="privacy-policy-updated"><strong>Last Updated:</strong> 10/19/2024</p>
      
      <section className="privacy-policy-section">
        <p>
          Lampros Virtual Build Mart (“we,” “us,” or “our”) is committed to protecting the privacy 
          and personal data of all users who access or use the Lampros Home Solutions App ("the App").
          This Privacy Policy outlines how we collect, use, disclose, safeguard, and provide control 
          over your personal data when interacting with the App. By continuing to use the App, you accept 
          the practices outlined below.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>1. Information We Collect</h2>

        <h3>a. Personal Information</h3>
        <p>We collect personal information that you voluntarily provide, including but not limited to:</p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Billing and Shipping Address</li>
          <li>Payment Information (via secure third-party gateways)</li>
          <li>Account Details (Username and encrypted password)</li>
        </ul>

        <h3>b. Non-Personal Information</h3>
        <p>
          We may collect non-personal information automatically to improve the App, such as:
        </p>
        <ul>
          <li>Device Information (type, OS, browser version)</li>
          <li>App Usage Data (pages visited, interaction patterns, errors)</li>
          <li>Location Data (with consent, for personalized services)</li>
        </ul>

        <h3>c. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking tools to enhance the App’s performance and offer 
          personalized content. You can manage cookies through your browser settings.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Process and fulfill orders</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Personalize content and recommendations</li>
          <li>Send notifications about updates or promotions (you can opt out)</li>
          <li>Ensure legal compliance and prevent fraud</li>
          <li>Analyze usage for app improvement</li>
        </ul>
      </section>

      <section className="privacy-policy-section">
        <h2>3. Sharing Your Information</h2>
        <p>We share your information only in the following circumstances:</p>

        <h3>a. Service Providers and Partners</h3>
        <p>We may share data with:</p>
        <ul>
          <li>Payment processors</li>
          <li>Shipping and delivery partners</li>
          <li>Cloud storage and hosting providers</li>
          <li>Analytics platforms</li>
        </ul>

        <h3>b. Business Transfers</h3>
        <p>
          In case of a merger or acquisition, your information may be transferred. You will be notified 
          of any such changes.
        </p>

        <h3>c. Legal Requirements</h3>
        <p>We may disclose data if required by law, court orders, or investigations.</p>
        <p><strong>Note:</strong> We do not sell personal information to third parties.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>4. Data Security</h2>
        <p>
          We use industry-standard measures to protect your data but cannot guarantee absolute security. 
          In case of a breach, users and authorities will be notified as required by law.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>5. Your Rights and Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we store about you</li>
          <li>Request corrections or updates</li>
          <li>Delete your data (subject to legal obligations)</li>
          <li>Opt-out of promotional communications</li>
        </ul>
      </section>

      <section className="privacy-policy-section">
        <h2>6. Children’s Privacy</h2>
        <p>
          The App is not intended for users under 13. We do not knowingly collect data from children. 
          If we become aware of such data, we will delete it promptly.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>7. Data Retention</h2>
        <p>
          We retain personal data as long as necessary for business or legal purposes. You can request 
          data deletion, and we will comply unless we need to keep it for legal reasons.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>8. International Data Transfers</h2>
        <p>
          If you use the App from outside India, your data may be transferred to and processed in India. 
          By using the App, you consent to this transfer.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy periodically. Users will be notified of significant changes via email 
          or in-app notifications. The updated policy will be available on this page.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>10. Contact Us</h2>
        <p>If you have any questions or concerns, contact us at:</p>
        <address>
          <strong>Lampros Virtual Build Mart</strong><br />
          Email: <a href="mailto:support@lamprosindia.com">support@lamprosindia.com</a><br />
          Address: Customer Support Manager, Lampros Virtual Build Mart Pvt. Ltd.,<br />
          Koduvally, Kozhikode, Kerala - 673572, India
        </address>
      </section>

      <p className="privacy-policy-thankyou">
        Thank you for trusting Lampros Virtual Build Mart with your information.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
