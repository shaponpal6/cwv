import React, { Component } from 'react';

import mitt from 'mitt';

import db from '../firebase/firestore';

// const emitter = mitt()

export default class Experiment extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      messages: [
        {
          id: 0,
          text: 'Thsi is one',
        },
        {
          id: 1,
          text: 'Thsi is two',
        },
      ],
      count: 3,
      query: '',
    };

    this.updateMessage.bind(this);

    this.emitter = mitt();
  }

  updateMessage = (ownState) => {
    console.log('call of duty', ownState);
    console.log('state22>>>', this.state.messages);
  };

  // Chat Start Button
  onSend = (e) => {
    let data = { id: Math.random(), text: 'This is ' + Math.random() };

    this.emitter.emit('foo', { a: 'b' })

    db.collection('messages2')
      .add(data)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  };

  componentDidMount() {
    // listen to an event
    this.emitter.on('foo', (e) => console.log('Mitt  foo', e));

    // listen to all events
    // this.emitter.on('*', (type, e) => console.log('Mitt * ', type, e));

    console.log(this.state);
    var query = db
      .collection('messages2')
      // .orderBy("timestamp", "desc")
      .limit(12);

    // Start listening to the query.
    query.onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        var message = change.doc.data();
        console.log(message);
        // console.log('state11>>>', this.state.messages);
        //var data = this.state.messages.data.filter((x) => x.id !== message.id);
        
        // this.updateMessage(message);
      });
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //   if(prevProps === prevState) return;
    // console.log(this.state);
    // console.log('##### ', prevProps, prevState, snapshot);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="exx">
        {this.state.messages.map((message) => {
          console.log(message);
          return <p key={message.id}>ss {message.text}</p>;
        })}
        {console.log(this.state.messages)}

        <input onChange={(node) => this.setState({ query: node })} />
        <button
          type="button"
          onClick={(e) => {
            this.onSend(this.state.query.input);
          }}
        >
          Save22222
        </button>
      </div>
    );
  }
}
