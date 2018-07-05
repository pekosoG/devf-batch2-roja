var config = {
    apiKey: "AIzaSyDIaE710DHdOqn6C7nrKGL601yH4p7RsZw",
    authDomain: "auth-library-e6bb2.firebaseapp.com",
    databaseURL: "https://auth-library-e6bb2.firebaseio.com",
    projectId: "auth-library-e6bb2",
    storageBucket: "auth-library-e6bb2.appspot.com",
    messagingSenderId: "255689417605"
  };

firebase.initializeApp(config);

function loggeaGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(result.user);
        
        document.getElementById('nombre-google').textContent=user.displayName;
        document.getElementById('imagen-google').setAttribute('src',user.photoURL);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}