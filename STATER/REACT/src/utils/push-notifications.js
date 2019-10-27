export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
// https://www.freecodecamp.org/news/how-to-add-push-notifications-to-a-web-app-with-firebase-528a702e13e1/
