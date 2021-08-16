import firebase from "firebase";
/* Will hold all of our component level applications*/ 
/* npm install firebase and import it as a module in order to use it*/

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBLFrz4c-KdUJqfILhIM2HizcAtRIXda4",
    authDomain: "pretty-nails-contact-form.firebaseapp.com",
    projectId: "pretty-nails-contact-form",
    storageBucket: "pretty-nails-contact-form.appspot.com",
    messagingSenderId: "279946790256",
    appId: "1:279946790256:web:285e63cf3ae6bb2feafbb5",
    measurementId: "G-69JX8REKM0"
});

var db = firebaseApp.firestore();

export {db};

