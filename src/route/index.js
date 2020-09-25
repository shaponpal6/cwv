import React, { Component } from 'react'
import StartChatButton from './StartChatButton';
import WelcomePage from './WelcomePage';
// import ChatDashboard from './ChatDashboard';
// import ChatWidget from './ChatWidget';
import localState from '../store/state';
import './style.css';


export class Route extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { ...localState, hasError: false };
  }




onChatButtonClick  = (e) => {
  console.log(e);
  this.setState({
    ...this.state, showWidget: !this.state.showWidget
  })
  console.log(this.state);
}



  componentDidMount(){ 
    console.log(this.state);
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(this.state);
    console.log('@@@@ ',prevProps, prevState, snapshot);
    
  }
  componentWillUnmount(){}

  //componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
  // Use it when connection off

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.error('@error: >> ',error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="wpcwv-container">
      {/* <ChatWidget /> */}
      {/* <ChatDashboard /> */}
      {this.state.showWidget && <WelcomePage />}
      {this.state.showWidget && <WelcomePage />}
      <StartChatButton onClick={this.onChatButtonClick}  title={this.state.locales.startChat}/>
    </div>
    )
  }
}

export default Route
