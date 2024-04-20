import React, { useState } from 'react';
import styles from '../styles/Popup.module.css'; // Import styles
import Chatbox from '../components/Chatbox'; // Import the Chatbox component

const Popup = () => {
  const [buttonText, setButtonText] = useState('Enable');
  const [isChatboxOpen, setChatboxOpen] = useState(false);

  const handleButtonClick = () => {
    setButtonText(buttonText === 'Enable' ? 'Disable' : 'Enable');
    if (buttonText === 'Enable') {
      setChatboxOpen(true); // Open chatbox when "Enable" button is clicked
    }
    else{
      setChatboxOpen(false);
    }
  };

  return (
    <div className={styles.popupContainer}>
      <button className={styles.niceButton} onClick={handleButtonClick}>
        {buttonText}
      </button>
      {isChatboxOpen && <Chatbox />}
    </div>
  );
};

export default Popup;