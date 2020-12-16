import firebase from 'firebase';
import 'firebase/firebase-firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCBlnHuixdBiyIIMt-P1oiwql341a59A8M",
    authDomain: "test-1526b.firebaseapp.com",
    databaseURL: "https://test-1526b.firebaseio.com",
    projectId: "test-1526b",
    storageBucket: "test-1526b.appspot.com",
    messagingSenderId: "295360685294",
    appId: "1:295360685294:web:0f6ff4bd82d82922f73fff"
  };

const app = firebase.initializeApp(firebaseConfig);

export default app;