import React, { useState, useContext } from 'react';
import './App.css';
import BulletinBoard from './BulletinBoard';
import AddBulletinForm from './AddBulletinForm';
import { BeforeInstallPromptContext } from './index';

function App() {
  const deferredPrompt = useContext(BeforeInstallPromptContext);
  const [bulletins, setBulletins] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleAddBulletin = (newBulletin) => {
    const updatedBulletins = [...bulletins, { ...newBulletin, id: nextId }];
    setBulletins(updatedBulletins);
    setNextId(nextId + 1);
  };

  const handleDeleteBulletin = (id) => {
    const updatedBulletins = bulletins.filter(bulletin => bulletin.id !== id);
    setBulletins(updatedBulletins);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
      });
    }
  };

  return (
    <div className="App">
      <h1>Интерактивная доска объявлений</h1>
      <AddBulletinForm onAdd={handleAddBulletin} />
      <BulletinBoard bulletins={bulletins} onDelete={handleDeleteBulletin} />
      <button onClick={handleInstallClick} className="install-button">Установить приложение</button>
    </div>
  );
}

export default App;
