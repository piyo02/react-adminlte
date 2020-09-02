import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/database';

const config = {
    apiKey: "AIzaSyB0rd7GOOPSwOCJeTUG6Y2ZrViTV4819zg",
    authDomain: "reactjs-6c477.firebaseapp.com",
    databaseURL: "https://reactjs-6c477.firebaseio.com",
    projectId: "reactjs-6c477",
    storageBucket: "reactjs-6c477.appspot.com",
    messagingSenderId: "567566413818",
    appId: "1:567566413818:web:992a5073e3283bb0547e43"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;