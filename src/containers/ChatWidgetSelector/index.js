import React from 'react';
import PropTypes from 'prop-types';

function ChatButtonCommonent({
  widget
}) {
  if (widget === 'chatWidget')
    return (
      <div>
        <h2> Chat Widget</h2>
      </div>
    );
  else
    return (
      <div>
       <p>Chat Dashboard</p>
      </div>
    );
}

ChatButtonCommonent.propTypes = {
  widget: PropTypes.string.isRequired,
};

export default ChatButtonCommonent;
