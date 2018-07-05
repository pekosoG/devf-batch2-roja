var config = {
    apiKey: "AIzaSyC5Nh_lts0ekTcOBd2gdueBIpuhaJnv3t0",
    authDomain: "full-firebase-4a4b3.firebaseapp.com",
    databaseURL: "https://full-firebase-4a4b3.firebaseio.com",
    projectId: "full-firebase-4a4b3",
    storageBucket: "full-firebase-4a4b3.appspot.com",
    messagingSenderId: "870011553445"
  };
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('user-name').textContent=user.displayName;
      document.getElementById('user-image').setAttribute('src',user.photoURL);
      // ...
    } else {
      window.location="index.html";
    }
  });

  function logout(){
    firebase.auth().signOut()
      .then(function() {
        window.location="index.html";
      })
      .catch(function(error) {
        console.log('something went wrong',error);
      });
  }