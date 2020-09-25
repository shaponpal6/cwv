import React from 'react';
import PropTypes from 'prop-types';

function ChatButtonComponent({chatStartButton}) {
  return (
    <div>
      <button
        onClick={() => {
          chatStartButton();
        }}
      >
        Hello Button 
      </button>
    </div>
  );
}


ChatButtonComponent.propTypes = {
    chatStartButton: PropTypes.func.isRequired,
};

export default ChatButtonComponent;

