import React, { useEffect, useContext } from 'react';
import { AppContext } from './store';
import WelcomePage from './containers/WelcomeToChat';
// import ChatWidgetSelector from './containers/ChatWidgetSelector';
import ChatWidget from './containers/ChatWidget';
// import localState from './store/state';
import './styles/widget.css';

const ChatApp = () => {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  // Chat Button Open / Close
  const onChatButtonClick = (e) => {
    console.log(e);
    onChatStartClick()
    dispatch({
      type: 'ON_OFF',
      payload: 'chatWidget',
    });
  };

  // Chat Welcome Open / Close
  const onChatWelcomeBoxClose = () => {
    dispatch({
      type: 'ON_OFF',
      payload: 'welcomeBox',
    });
  };

  // Chat Start Button
  const onChatStartClick = () => {
    dispatch({
      type: 'SET_ROUTE',
      payload: 'chatWidget',
    });
  };


  return (
    <div className="wpcwv-container">
      <h2>jddddddddd</h2>
      {/* {this.setRoute('chatWidget')} */}

      {(state.chatRoute === "chatWidget" && state.chatWidget) && <ChatWidget />}
      {(state.chatRoute === "chatDashboard" && state.chatWidget) && <h2>Dashboard</h2>}
      {(state.chatRoute === "chatIntro" && state.welcomeBox) && <WelcomePage text="welcome!!" onClose={onChatWelcomeBoxClose} onChat={onChatButtonClick}/>}

      {/* {this.state.welcomeBox && (
          <WelcomePage
            onClose={this.onChatWelcomeBoxClose}
            onChat={this.onChatStartClick}
            text={this.state.locales.startChat}
          />
        )} */}
      <div className="wpcwv-startButton">
        <button
          className="wpcwv-button wpcwv-widgetButton wpcwv-theme"
          onClick={onChatButtonClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
