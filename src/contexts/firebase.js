import app from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

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
 
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
 
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
 
    doSignOut = () => this.auth.signOut();
 
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***
 
  user = uid => this.db.collection(`users/${uid}`);
 
  users = () => this.db.collection('users');
  messages = () => this.db.collection('messages');
}
 
export default Firebase;