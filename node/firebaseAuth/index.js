var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyBYYpg43QwCVpnV3xd0oaGzEx61JdUAjzA",
};
firebase.initializeApp(config);

/*
firebase.auth().createUserWithEmailAndPassword("rodo000@gmail.com", "rodo000").catch(function (error) {
  console.log(error.code);
  console.log(error.message);
});
*/

firebase.auth().signInWithEmailAndPassword("rodo000@gmail.com", "rodo000")
  .then(function (firebaseUser) {
    console.log('logged in');
  })
  .catch(function (error) {
    console.log('error', error);
  });
