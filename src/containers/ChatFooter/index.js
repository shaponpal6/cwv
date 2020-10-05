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
    console.log('message>>', message);
    // let data = { id: Math.random(), text: message + Math.random() };
    // setMessages((ownState) => [...ownState, data]);
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { id: Math.random(), text: message },
    });
    setMessage('');
    
  };
  const handleInput = (e) => {
    const { value } = e.target; 
    setMessage(value);
  };
  return (
    <div className="inputForm">
      <form className="wpcwv-messageForm" onSubmit={onSend}>
        {/* <input onChange={handleInput} value={message} /> */}
        <textarea className="wpcwv-textarea" onChange={handleInput} spellcheck="false" data-gramm="false">{message}</textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

// Form.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

export default Form;
