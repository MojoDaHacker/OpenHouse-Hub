import admin, { credential as _credential } from "firebase-admin";

if(admin.apps.length == 0){
  admin.initializeApp({
    credential: _credential.applicationDefault()
  });
}

export default admin.auth()
