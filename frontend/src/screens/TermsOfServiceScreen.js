import React from 'react';

// Basic styling for the Terms of Service screen
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
  list: {
    marginBottom: '20px',
    paddingLeft: '20px',
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

const TermsOfServiceScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms of Service</h1>
      <p style={styles.paragraph}>
        Welcome to our website. These Terms of Service outline the rules and regulations for the use of our website. By accessing or using our site, you agree to comply with these terms. If you do not agree with any part of these terms, you must not use our site.
      </p>
      <p style={styles.paragraph}>
        <strong>1. Acceptance of Terms</strong><br />
        By using our site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our site.
      </p>
      <p style={styles.paragraph}>
        <strong>2. Changes to Terms</strong><br />
        We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page and will take effect immediately. Your continued use of the site after any changes constitutes acceptance of the revised terms.
      </p>
      <p style={styles.paragraph}>
        <strong>3. Use of the Site</strong><br />
        You agree to use our site only for lawful purposes and in accordance with these Terms of Service. You are responsible for ensuring that your use of the site complies with all applicable laws and regulations.
      </p>
      <p style={styles.paragraph}>
        <strong>4. Intellectual Property</strong><br />
        All content on our site, including text, images, and logos, is the property of our company or its licensors and is protected by intellectual property laws. You may not use or reproduce any content without our prior written permission.
      </p>
      <p style={styles.paragraph}>
        <strong>5. Disclaimers</strong><br />
        Our site is provided "as is" without any warranties of any kind. We do not guarantee that the site will be available or error-free. We disclaim all liability for any damages arising from the use of the site.
      </p>
      <p style={styles.paragraph}>
        <strong>6. Limitation of Liability</strong><br />
        To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the site.
      </p>
      <p style={styles.paragraph}>
        <strong>7. Governing Law</strong><br />
        These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising out of these terms shall be resolved in the courts of [Your Jurisdiction].
      </p>
      <p style={styles.footer}>
        Last updated: August 14, 2024
      </p>
    </div>
  );
};

export default TermsOfServiceScreen;
