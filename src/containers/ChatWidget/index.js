import React from 'react'
// import App from '../../components/App'
import ChatHeader from '../ChatHeader';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';
import Experiment from '../Experiment';

function Widget() {
  return (
    <div>
      <ChatHeader/>
      <ChatBody/>
      <Experiment/>
      <ChatFooter/>
      {/* <App/> */}
    </div>
  )
}

export default Widget
