import React from 'react';
import PropTypes from 'prop-types';
import ChatWidget from '../ChatWidget';
import './style.css';

function ChatButtonCommonent({
  widget
}) {
  if (widget === 'chatWidget')
    return (
      <div className="wpcwv-chatWidget">
        <ChatWidget/>
      </div>
    );
  else
    return (
      <div className="wpcwv-chatDashboard">
       <p>Chat Dashboard</p>
      </div>
    );
}

ChatButtonCommonent.propTypes = {
  widget: PropTypes.string.isRequired,
};

export default ChatButtonCommonent;
