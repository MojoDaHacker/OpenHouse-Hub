import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyA0rbYFmgb3md1RJ8evwekOs5p9W_bY1Mw",
  authDomain: "openhouseapplication-fb641.firebaseapp.com",
  projectId: "openhouseapplication-fb641",
  storageBucket: "openhouseapplication-fb641.appspot.com",
  messagingSenderId: "974016052489",
  appId: "1:974016052489:web:f3489dff3d837b72b867d8",
  measurementId: "G-321LQTXP0B"
};

export const uiConfig = {
  // signInSuccessUrl: '<url-to-redirect-to-on-success>',
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  // tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  // privacyPolicyUrl: function() {
  //   window.location.assign('<your-privacy-policy-url>');
  // }
};

if(firebase.apps.length == 0){
  firebase.initializeApp(firebaseConfig)
}


export default firebase
export const Auth = firebase.auth()
