// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

import firebase from '@firebase/app';
import '@firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBQ1olf124Vp4ylrrc3eZCvfQUoc2oNBBM",
    authDomain: "live-support-bot.firebaseapp.com",
    databaseURL: "https://live-support-bot.firebaseio.com",
    projectId: "live-support-bot",
    storageBucket: "live-support-bot.appspot.com",
    messagingSenderId: "1074224122035",
    appId: "1:1074224122035:web:0040c4ea47b4d5d710c8c6"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// export default firebase.firestore();
export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();
