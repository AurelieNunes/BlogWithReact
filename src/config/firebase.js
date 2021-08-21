import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAz6EBIWDMZ0lva-Cy58c0JKuYNfi_lQbY",
    authDomain: "blog-react-6626d.firebaseapp.com",
    databaseURL: "https://blog-react-6626d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-react-6626d",
    storageBucket: "blog-react-6626d.appspot.com",
    messagingSenderId: "277852906494",
    appId: "1:277852906494:web:1d316426baf176cd6416af"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;