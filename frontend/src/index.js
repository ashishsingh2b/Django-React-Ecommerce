import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import GoogleOAuthProvider from @react-oauth/google
import { GoogleOAuthProvider } from '@react-oauth/google';

// Replace 'your-client-id' with your actual Google Client ID
const clientId = '681667204808-3oi01jc425li2pjov3k8vufsaiknrg1b.apps.googleusercontent.com';

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import store from './store'
// import './index.css';
// import './bootstrap.min.css'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
