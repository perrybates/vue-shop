import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDvo5m-84vlIZKc6S2fcg5i_gQzlpVp2KM",
    authDomain: "vue-shop-ba80c.firebaseapp.com",
    projectId: "vue-shop-ba80c",
    storageBucket: "vue-shop-ba80c.appspot.com",
    messagingSenderId: "1001338463920",
    appId: "1:1001338463920:web:ad31230e1286aa1b4efd75",
    measurementId: "G-X8ZXGZCT27"
  };
  // Initialize Firebase
  export const fb= firebase.initializeApp(firebaseConfig);

