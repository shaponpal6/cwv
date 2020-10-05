import React, { Component, useEffect, useContext }  from 'react';
import { AppContext } from './store';
// import WelcomePage from './containers/WelcomeToChat';
// import ChatWidgetSelector from './containers/ChatWidgetSelector';
import ChatWidget from './containers/ChatWidget'
import localState from './store/state';
import './styles/widget.css';

export class Route extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { ...localState, hasError: false };
  }

  // Chat Button Open / Close
  onChatButtonClick = (e) => {
    console.log(e);
    this.setState({
      ...this.state,
      showWidget: !this.state.showWidget,
    });
  };

  // Chat Welcome Open / Close
  onChatWelcomeBoxClose = (e) => {
    console.log(e);
    this.setState({
      ...this.state,
      welcomeBox: false,
    });
  };

  // Chat Start Button
  onChatStartClick = (e) => {
    console.log(e);
    this.setState({
      ...this.state,
      showWidget: !this.state.showWidget,
    });
  };

  setRoute (widget) {
    if (widget === 'chatWidget') {
        <div className="wpcwv-chatWidget">
          <ChatWidget />
        </div>
    }else if (widget === 'chatDashboard') {
        <div className="wpcwv-chatWidget">
          <ChatWidget />
        </div>
    } else {
        <div className="wpcwv-chatDashboard">
          <p>Chat Dashboard</p>
        </div>
    }
  }

  componentDidMount() {
    console.log(this.state);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state);
    console.log('@@@@ ', prevProps, prevState, snapshot);
  }
  componentWillUnmount() {}

  static getDerivedStateFromError(error) {
    console.error('@error: >> ', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }


    

    return (
      <div className="wpcwv-container">
        <h2>jddddddddd</h2>
        {/* {this.setRoute('chatWidget')} */}

        {/* {this.state.chatWidget && (
          <ChatWidgetSelector
            widget={this.state.router}
          />
        )}  */}
        

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
            onClick={this.onChatButtonClick}
          >
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default Route;
