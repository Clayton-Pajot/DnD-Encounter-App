// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_eK7VD8Kv6GvFrpU9Mr9o6Nj9CvAj9OM",
  authDomain: "cpajot-lab7.firebaseapp.com",
  projectId: "cpajot-lab7",
  storageBucket: "cpajot-lab7.appspot.com",
  messagingSenderId: "432294683611",
  appId: "1:432294683611:web:0991a81ac863fc8eccbdfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// export default app;
// let app;
// if(firebase.getApps.length === 0){
//     app = firebase.initializeApp(firebaseConfig);
// }else{
//     app = firebase.app()
// }

// const auth = firebase.auth()

// export {auth};