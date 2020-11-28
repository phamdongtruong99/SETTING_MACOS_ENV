import firebase from 'firebase/app'
import { fireBaseConfig } from './config/firebase'

export const fireBaseConnection = async () => {
  const key = await fireBaseConfig()
  const firebaseConfig = {
    apiKey: key.apiKey,
    authDomain: key.authDomain,
    databaseURL: key.databaseURL,
    projectId: key.projectId,
    storageBucket: key.storageBucket,
    messagingSenderId: key.messagingSenderId,
    appId: key.appId
  }

  return firebase.initializeApp(firebaseConfig)
}
