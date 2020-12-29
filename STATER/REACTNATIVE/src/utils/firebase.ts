import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const FirebaseService {
 getToken: async () => {
    const fcmToken = await firebase.messaging().getToken();
    console.log('fcmToken', fcmToken);
    if (fcmToken) {
      return fcmToken;
    }
    return '';
  },
 setToken: async () => {
    const fcmToken = await firebase.messaging().getToken();
    console.log('fcmToken', fcmToken);
    if (fcmToken) {
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  },
 requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED
      || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      await this.setToken();
    }
  },
 revertFirebaseDatabasePathName: (text: string) => {
    return text.replace(/\!/g, ".").replace(/\@/g, "#")
        .replace(/\%/g, "$").replace(/\&/g, "[")
        .replace(/\*/g, "]")
 },
 convertToFirebaseDatabasePathName: (text: string) => {
    return text.replace(/\./g, "!").replace(/#/g, "@")
        .replace(/\$/g, "%").replace(/\[/g, "&")
        .replace(/\]/g, "*")
 }
}
export default FirebaseService;
