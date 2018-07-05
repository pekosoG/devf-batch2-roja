var config = {
    apiKey: "AIzaSyC5Nh_lts0ekTcOBd2gdueBIpuhaJnv3t0",
    authDomain: "full-firebase-4a4b3.firebaseapp.com",
    databaseURL: "https://full-firebase-4a4b3.firebaseio.com",
    projectId: "full-firebase-4a4b3",
    storageBucket: "full-firebase-4a4b3.appspot.com",
    messagingSenderId: "870011553445"
  };
firebase.initializeApp(config);
 
function signUpEmail(){
    let email=document.getElementById('email').value;
    let pass=document.getElementById('passeord').value;

    if(email.length>0 && pass.length>0){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location='dashboard.html';
    } else {
       console.log('not logged in');
    }
  });