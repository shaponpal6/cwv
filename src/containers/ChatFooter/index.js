import React, { useState, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
import { AppContext } from '../../store';

import './style.css';

const Form = () => {
  const [message, setMessage] = useState('');
  const [state, dispatch] = useContext(AppContext);
  // const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  // Chat Start Button
  const onSend = (e) => {
    e.preventDefault();
    if (!message) return;
    const messageText = message;
    setMessage('');
    console.log('message>>', message);
    // let data = { id: Math.random(), text: message + Math.random() };
    // setMessages((ownState) => [...ownState, data]);
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { id: Math.random(), text: messageText },
    });
  };
  
  const handleInput = (e) => {
    const { value } = e.target;
    setMessage(value);
  };
  return (
    <div className="wpcwv-FooterWraper">
      <div className="wpcwv-widgetFooter">
        <form className="wpcwv-messageForm" onSubmit={onSend}>
          {/* <input onChange={handleInput} value={message} /> */}
          <textarea
            className="wpcwv-textarea"
            onChange={handleInput}
            spellCheck="false"
            data-gramm="false"
            value={message}
            placeholder="This is a description."
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

// Form.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

export default Form;
