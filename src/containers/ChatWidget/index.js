import React from 'react'
// import App from '../../components/App'
import ChatHeader from '../ChatHeader';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';

function Widget() {
  return (
    <div>
      <ChatHeader/>
      <ChatBody/>
      <ChatFooter/>
      {/* <App/> */}
    </div>
  )
}

export default Widget
