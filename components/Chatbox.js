// Chatbox.js
import React, { useState } from 'react';
import styles from '../styles/Chatbox.module.css'; // Import Chatbox styles

const Chatbox = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    setOutputText(inputText);
    setInputText(''); // Clear input after sending message
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">Chatbox</div>
      <div className="chatbox-content">
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        {outputText && (
          <div className="message-container">
            <div className="user-message">{inputText}</div>
            <div className="bot-message">{outputText}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
