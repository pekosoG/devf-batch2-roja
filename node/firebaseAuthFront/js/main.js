var config = {
    apiKey: "AIzaSyC5Nh_lts0ekTcOBd2gdueBIpuhaJnv3t0",
    authDomain: "full-firebase-4a4b3.firebaseapp.com",
    databaseURL: "https://full-firebase-4a4b3.firebaseio.com",
    projectId: "full-firebase-4a4b3",
    storageBucket: "full-firebase-4a4b3.appspot.com",
    messagingSenderId: "870011553445"
  };
firebase.initializeApp(config);

function loginEmail(){
    let email=document.getElementById('email').value;
    let pass=document.getElementById('passeord').value;

    if(email.length>0 && pass.length>0){
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
}

function firebaseAuth(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        window.location="dashboard.html";
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

function loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth(provider);
}

function loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebaseAuth(provider);
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location='dashboard.html';
    } else {
      // User is signed out.
      // ...
    }
  });
  