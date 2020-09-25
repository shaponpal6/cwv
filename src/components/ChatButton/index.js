// import React from 'react';
// import ChatButton from '../../components/ChatButton';
// import { chatStartButton } from '../actions';

import React from 'react';
import PropTypes from 'prop-types';

function ChatButtonCommonent({chatStartButton}) {
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


ChatButtonCommonent.propTypes = {
    chatStartButton: PropTypes.func.isRequired,
};

export default ChatButtonCommonent;

