import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const BeforeInstallPromptContext = React.createContext();

const Root = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };

  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  return (
    <BeforeInstallPromptContext.Provider value={deferredPrompt}>
      <App />
    </BeforeInstallPromptContext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
