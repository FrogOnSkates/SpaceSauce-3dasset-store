// App.jsx
import React, { useState } from 'react';
import ModelCard from './ModelCard';
import ModelPopup from './ModelPopup';
import JadeSword from './Jade_Sword';
import FloatingRock1 from './FloatingRock1';
import { Ship } from './Ship';
import { Beast } from './Beast';
import { OldHammer } from './Old_Hammer';
import SpaceBG from './SpaceBG';
import { Genshin } from './Genshin';
import './index.css';
import { Thor } from './Thor';


function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [modelTitle, setModelTitle] = useState('');

  // Handle card click to open the popup with the selected model
  const handleCardClick = (title, ModelComponent) => {
    setSelectedModel(() => ModelComponent);
    setModelTitle(title);
    setPopupOpen(true);
  };

  // Close the popup and reset the selected model
  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedModel(null);
    setModelTitle('');
  };

  return (
    <div className="container">
      <SpaceBG /> {/* Add the SpaceBG component here */}
      <h1>3D Models Store</h1>
      <div className="cards">
        <ModelCard
          title="Jade Sword"
          ModelComponent={JadeSword}
          onClick={() => handleCardClick('Jade Sword', JadeSword)}
        />
        <ModelCard
          title="Rock"
          ModelComponent={FloatingRock1}
          onClick={() => handleCardClick('Rock', FloatingRock1)}
        />
        <ModelCard
          title="Ship"
          ModelComponent={Ship}
          onClick={() => handleCardClick('Ship', Ship)}
        />
        <ModelCard
          title="Beast"
          ModelComponent={Beast}
          onClick={() => handleCardClick('Beast', Beast)}
        />
        <ModelCard
          title="Old Hammer"
          ModelComponent={OldHammer}
          onClick={() => handleCardClick('Old Hammer', OldHammer)}
        />
            <ModelCard
          title="Genshin Sword"
          ModelComponent={Genshin}
          onClick={() => handleCardClick('Genshin Sword', Genshin)}
        />
          
            <ModelCard
          title="Jade Sword"
          ModelComponent={Thor}
          onClick={() => handleCardClick('Jade Sword', Thor)}
        />
        {/* ... (other ModelCard components) */}
      </div>

      {/* Popup for displaying the selected model */}
      <ModelPopup
        isOpen={popupOpen}
        onClose={handleClosePopup}
        modelTitle={modelTitle}
        ModelComponent={selectedModel}
      />
    </div>
  );
}

export default App;