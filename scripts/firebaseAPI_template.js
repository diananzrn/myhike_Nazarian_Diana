//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAry13BEZo53dF0FLuFvH9KbPQSIRjfhfA",
    authDomain: "comp1800-202430-demo-e5603.firebaseapp.com",
    projectId: "comp1800-202430-demo-e5603",
    storageBucket: "comp1800-202430-demo-e5603.appspot.com",
    messagingSenderId: "587093277927",
    appId: "1:587093277927:web:9ccb670faeaf7b10433642"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
