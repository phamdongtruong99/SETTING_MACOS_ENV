importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: 'your messagingSenderId again',
});

const messaging = firebase.messaging();

// https://www.freecodecamp.org/news/how-to-add-push-notifications-to-a-web-app-with-firebase-528a702e13e1/
