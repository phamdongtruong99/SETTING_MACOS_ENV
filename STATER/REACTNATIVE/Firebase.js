import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storagetBucket: process.env.FIREBASE_STORAGET_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

class FirebaseApp {

  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initialzeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch(error => {
            callback(error);
          })
      }
    })

  }

  getLists(callback) {
    let ref = firebase.firestore().collection('users').doc(this.userId).collection("lists");
  
    this.unsubcribe = ref.onSnapshot(snapshot => {
      lists = [];

      snapshot.forEach(doc => {
        lists.push({ id: doc.id, ...doc.data()})
      }) 
    })

    callback(lists);
  }

  get userId() {
    return firebase.auth().currentUser.uid;
  }

  detach() {
    this.unsubcribe();
  }
}

export default FirebaseApp;

// https://www.youtube.com/watch?v=5NCnO5a3v0c