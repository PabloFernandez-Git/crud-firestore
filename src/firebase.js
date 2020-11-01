import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKGzBxv-5aePrvlB2lnPpB1aWSv6D6ikc",
    authDomain: "crud-udemy-react-f3b8b.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-f3b8b.firebaseio.com",
    projectId: "crud-udemy-react-f3b8b",
    storageBucket: "crud-udemy-react-f3b8b.appspot.com",
    messagingSenderId: "958790372594",
    appId: "1:958790372594:web:fefcb964f205f66ec2946b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export {firebase}