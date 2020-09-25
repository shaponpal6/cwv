import React, { Component } from 'react';
import StartChatButton from './containers/ChatButtonContainer';
import WelcomePage from './containers/WelcomeToChat';
// import ChatDashboard from './ChatDashboard';
import ChatWidgetSelector from './containers/ChatWidgetSelector';
import localState from './store/state';
import './styles/widget.css';
// import'./styles/widget.css';
// import './styles/widget.module.css';

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

  componentDidMount() {
    console.log(this.state);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state);
    console.log('@@@@ ', prevProps, prevState, snapshot);
  }
  componentWillUnmount() {}

  //componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
  // Use it when connection off

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.error('@error: >> ', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="wpcwv-container">
        
        {this.state.showWidget && (
          <ChatWidgetSelector
            widget={this.state.router}
          />
        )}
        {this.state.welcomeBox && (
          <WelcomePage
            onClose={this.onChatWelcomeBoxClose}
            onChat={this.onChatStartClick}
            text={this.state.locales.startChat}
          />
        )}
        <StartChatButton
          onClick={this.onChatButtonClick}
          title={this.state.locales.startChat}
        />
      </div>
    );
  }
}

export default Route;
