import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../store';
import Ava from '../../images/avater.png';

import './style.css';

const ChatBody = () => {
  const [state] = useContext(AppContext);

  useEffect(() => {
    console.log(state.messages);
  }, []);

  const Message = (message) => {
    return (
      <div key={message.id} className="wpcwv-messageWrapper">
        <figure className="wpcwv-avaterWrapper">
          <img src={Ava} alt="s" />
          <figcaption className="font-accent">S</figcaption>
        </figure>
        <div className="wpcwv-messageContainer">
          <div className="wpcwv-messageHeader">
            <span className="wpcwv-messageSender">muhammadroshaan</span>
            <time datetime="Mon Oct 05 2020 13:27:10 GMT+0600 (Bangladesh Standard Time)">
              Oct 05, 1:27 PM
            </time>
          </div>
          <div className="wpcwv-senderMessage">{message.text}</div>
        </div>
        <div className="wpcwv-messageDivider"></div>
      </div>
    );
  };

  return (
    <div className="wpcwv-chatBodyWraper">
      {state.messages.map((message) => {
        return Message(message);
      })}
    </div>
  );
};

export default ChatBody;
