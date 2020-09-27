import React, {  useEffect, useContext } from 'react';
import { AppContext } from '../../store';

const ChatBody = () => {
  const [state] = useContext(AppContext);

  useEffect(() => {
    console.log(state.messages);
  }, []);


  return (
    <div className="wpcwv-chatBodyWraper">
      {state.messages.map((message) => {
        return <p key={message.id}> {message.text}</p>;
      })}
    </div>
  );
};

export default ChatBody;
