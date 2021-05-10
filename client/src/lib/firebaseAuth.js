import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

var firebaseConfig = {
  apiKey: "AIzaSyA0rbYFmgb3md1RJ8evwekOs5p9W_bY1Mw",
  authDomain: "openhouseapplication-fb641.firebaseapp.com",
  projectId: "openhouseapplication-fb641",
  storageBucket: "openhouseapplication-fb641.appspot.com",
  messagingSenderId: "974016052489",
  appId: "1:974016052489:web:f3489dff3d837b72b867d8",
  measurementId: "G-321LQTXP0B"
};

if(firebase.apps.length == 0){
  firebase.initializeApp(firebaseConfig)
  // firebase.auth()
  // firebase.analytics()
}


export default firebase