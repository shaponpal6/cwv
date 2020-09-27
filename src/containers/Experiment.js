import React, { useState, useEffect, useContext } from 'react';

import { FirebaseContext } from '../contexts/firebaseContext';

const Experiment2 = () => {
  



  const db = useContext(FirebaseContext);
  const messagesDB = db.messages();


  // Declare a new state variable, which we'll call "count"
   // Declare multiple state variables!
  //  const [age, setAge] = useState(42);
   const [message, setMessage] = useState('');
   const [messages, setMessages] = useState([]);

   // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // this.state = INITIAL;
    console.log(messages)
  }, [messages]);

  // const updateMessage = (ownState) => {
  //   console.log('call of duty', ownState);
  //   console.log('state22>>>', this.state.messages);
  // };

  // Chat Start Button
  const onSend = () => {
    let data = { id: Math.random(), text: 'This is ' + Math.random() };
    setMessages(ownState => [...ownState, data])

    // db.collection('messages2')
    messagesDB
      .add(data)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  };


  useEffect(() => {
    console.log(db);
     // listen to an event
    // listen to all events
    // var query = db
    //   .collection('messages2')
    //   // .orderBy("timestamp", "desc")
    //   .limit(12);
      messagesDB.limit(12).onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        var message = change.doc.data();
        console.log('Data on change.........');
        console.log(message);
        let data = { id: Math.random(), text: 'Firestore >> ' + Math.random() };
        setMessages(ownState => [...ownState, data])
        // console.log('state11>>>', this.state.messages);
        //var data = this.state.messages.data.filter((x) => x.id !== message.id);
        // this.updateMessage(message);
      });
    });


    // Get a document, forcing the SDK to fetch from the offline cache.
    messagesDB.get({source: 'cache'}).then(function(doc) {
      // Document was found in the cache. If no cached document exists,
      // an error will be returned to the 'catch' block below.
      console.log("Cached document data:", doc);
      console.log("Cached document data:", doc.docs());
      // console.log("Cached document data:", doc.data());
    }).catch(function(error) {
      console.log("Error getting cached document:", error);
    });


  }, []);

  
  return ( 
    <div className="exx">
    {/* <FirebaseContext.Consumer>
      {(firebase) => {
        console.log(firebase);
        return <div>I've access to Firebase and render something.</div>;
      }}
    </FirebaseContext.Consumer> */}

    {messages.map((message) => {
      console.log(message);
      return <p key={message.id}> {message.text}</p>;
    })}
    {console.log(message)}

    <input onChange={(node) => setMessage(node)} />
    <button
      type="button"
      onClick={() => {
        onSend(message);
      }}
    >
      Save22222
    </button>
  </div>
   );
}
 
export default Experiment2;
