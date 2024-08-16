import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const clientId = "";
const backendUrl = "http://127.0.0.1:8000";

const GoogleButton = () => {
  const handleSuccess = async (response) => {
    const token = response.credential;

    try {
      const res = await axios.post(
        `${backendUrl}/auth/social-auth/google/login/`,
        { token },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Backend response:', res.data);
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  };

  const handleError = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <div style={styles.container}>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          style={styles.button}
          logo="google"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

// Internal CSS
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f5f5f5', // Light background color
    padding: '20px',
  },
  button: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#4285F4', // Google blue
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for better visibility
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  },
};

export default GoogleButton;
