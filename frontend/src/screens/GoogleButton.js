import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

// const clientId = "681667204808-3oi01jc425li2pjov3k8vufsaiknrg1b.apps.googleusercontent.com";
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
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleButton;
