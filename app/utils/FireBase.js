import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_NF-qR3HL7p4Ogbivs2iUC334PIADc44",
  authDomain: "apprinnovo-7f129.firebaseapp.com",
  databaseURL: "https://apprinnovo-7f129.firebaseio.com",
  projectId: "apprinnovo-7f129",
  storageBucket: "apprinnovo-7f129.appspot.com",
  messagingSenderId: "314064677960",
  appId: "1:314064677960:web:4bed249066d1fb2faa7c7d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
