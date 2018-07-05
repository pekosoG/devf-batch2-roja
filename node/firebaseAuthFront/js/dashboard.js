var config = {
    apiKey: "AIzaSyC5Nh_lts0ekTcOBd2gdueBIpuhaJnv3t0",
    authDomain: "full-firebase-4a4b3.firebaseapp.com",
    databaseURL: "https://full-firebase-4a4b3.firebaseio.com",
    projectId: "full-firebase-4a4b3",
    storageBucket: "full-firebase-4a4b3.appspot.com",
    messagingSenderId: "870011553445"
  };
firebase.initializeApp(config);
var currentUser={};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('user-name').textContent=user.displayName;
    document.getElementById('user-image').setAttribute('src',user.photoURL);
    currentUser=user;
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

function postSomething(){
  let postText=document.getElementById('newPostInput').value;
  if(postText.length>0){
    firebase.database().ref('posts/'+new Date().getTime()).set({
      username: currentUser.displayName,
      photo: currentUser.photoURL,
      post : postText,
      createdDate: new Date().toISOString()
    });
    document.getElementById('newPostInput').value="";
  }
}

firebase.database().ref('posts/').on('child_added',snapshot=>{
  console.log(snapshot.val());
  let newPost=document.getElementById('emptyPost').cloneNode(true);
  newPost.setAttribute('style','');
  
  newPost.querySelector('img').setAttribute('src',snapshot.val().photo);
  newPost.querySelector('h5').textContent=snapshot.val().username;
  newPost.querySelector('h3').textContent=snapshot.val().post;

  document.getElementById('posts-container').prepend(newPost);
});