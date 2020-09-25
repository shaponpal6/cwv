import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

function ChatButtonCommonent({onClose, onChat, text}) {
  return (
    <div className="wpcwv-welcomeMessage">
      <button
        onClick={() => {
          onClose();
        }}
      >
        Close Me
      </button>
      <h2> {text}</h2>
      <button
        onClick={(e) => {
          onChat(e);
        }}
      >
        Start Chat
      </button>
    </div>
  );
}


ChatButtonCommonent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChat: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChatButtonCommonent;

