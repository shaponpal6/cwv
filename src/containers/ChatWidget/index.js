import React from 'react';
// import App from '../../components/App'
import ChatHeader from '../ChatHeader';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';
// import ChatWidget, {
//   ChatWidgetContext,
// } from '../../contexts/chatWidgetContext';
// import Experiment from '../Experiment';
// import Firebase, { FirebaseContext } from '../../contexts/firebaseContext';
// import { Store } from '../../store';

function Widget() {
  return (
    <div>
      {/* <Store> */}
        {/* <ChatWidgetContext.Provider value={new ChatWidget()}> */}
          <ChatHeader />
          <ChatBody />
          {/* <FirebaseContext.Provider value={new Firebase()}>
        <Experiment />
      </FirebaseContext.Provider> */}
          <ChatFooter />
        {/* </ChatWidgetContext.Provider> */}
      {/* </Store> */}
      {/* <App/> */}
    </div>
  );
}

export default Widget;
