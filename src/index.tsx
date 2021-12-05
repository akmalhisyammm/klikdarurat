import React from 'react';
import ReactDOM from 'react-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from 'contexts/auth';
import { UserDataProvider } from 'contexts/userData';
import { PersonalContactProvider } from 'contexts/personalContact';
import { EmergencyServiceProvider } from 'contexts/emergencyService';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <EmergencyServiceProvider>
          <PersonalContactProvider>
            <App />
          </PersonalContactProvider>
        </EmergencyServiceProvider>
      </UserDataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);