import React from 'react';

// Basic styling for the privacy policy screen
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#555',
  },
};

const PrivacyPolicyScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        Your privacy is important to us. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
      </p>
      <p style={styles.paragraph}>
        <strong>Information Collection</strong><br />
        We may collect information about you in a variety of ways. The information we may collect via the website depends on the content and materials you use, and includes:
      </p>
      <ul style={styles.paragraph}>
        <li>Personal Data</li>
        <li>Derivative Data</li>
        <li>Financial Data</li>
        <li>Social Network Data</li>
      </ul>
      <p style={styles.paragraph}>
        <strong>Use of Your Information</strong><br />
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
      </p>
      <ul style={styles.paragraph}>
        <li>Assist law enforcement and respond to subpoenas</li>
        <li>Compile anonymous statistical data and analysis for use internally or with third parties</li>
        <li>Create and manage your account</li>
        <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the website to you</li>
        <li>Email you regarding your account or order</li>
      </ul>
      <p style={styles.paragraph}>
        <strong>Disclosure of Your Information</strong><br />
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </p>
      <ul style={styles.paragraph}>
        <li>By Law or to Protect Rights</li>
        <li>Business Transfers</li>
        <li>Third-Party Service Providers</li>
      </ul>
      <p style={styles.paragraph}>
        <strong>Security of Your Information</strong><br />
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </p>
      <p style={styles.paragraph}>
        <strong>Changes to This Privacy Policy</strong><br />
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
      </p>
      <p style={styles.footer}>
        Last updated: August 14, 2024
      </p>
    </div>
  );
};

export default PrivacyPolicyScreen;
