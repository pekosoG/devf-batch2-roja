var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyBYYpg43QwCVpnV3xd0oaGzEx61JdUAjzA",
};
firebase.initializeApp(config);

firebase.auth().createUserWithEmailAndPassword('rmartinvezv1102@gmail.com', 'v2c47mk7jd').catch(function (error) {
  console.log(error.code);
  console.log(error.message);
});

firebase.auth().signInWithEmailAndPassword("rmartinvezv1102@gmail.com", "v2c47mk7jd")
  .then(function (firebaseUser) {
    console.log('firebaseUser', firebaseUser);
  })
  .catch(function (error) {
    console.log('error', error);
  });
