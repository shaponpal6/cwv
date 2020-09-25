// import React from 'react';
// import ChatButton from '../../components/ChatButton';
// import { chatStartButton } from '../actions';

import React from 'react';
import PropTypes from 'prop-types';

function ChatButtonCommonent({chatStartButton, chatWelcomePage}) {
  return (
    <div>
      <button
        onClick={() => {
          chatWelcomePage();
        }}
      >
        Close Me
      </button>
      <h2> This is Welcome Text</h2>
      <button
        onClick={() => {
          chatStartButton();
          chatWelcomePage();
        }}
      >
        Start Chat
      </button>
    </div>
  );
}


ChatButtonCommonent.propTypes = {
    chatStartButton: PropTypes.func.isRequired,
    chatWelcomePage: PropTypes.func.isRequired,
};

export default ChatButtonCommonent;

