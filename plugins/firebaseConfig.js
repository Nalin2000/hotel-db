import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyATY13K5Exsx_qe14zE28QXh2MSMuy-LMc',
    authDomain: 'hotel-db11.firebaseapp.com',
    databaseURL: 'https://hotel-db11.firebaseio.com',
    projectId: 'hotel-db11',
    storageBucket: 'hotel-db11.appspot.com',
    messagingSenderId: '841975832395',
    appId: '1:841975832395:web:bbc95075e738dba41b12ce',
    measurementId: 'G-JQMPWLHD9C',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
