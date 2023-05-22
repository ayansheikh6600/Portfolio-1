
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAS0jfNhgXNb_tsxzTdJWYaB9qI7pp75Ps",
    authDomain: "test-web-26915.firebaseapp.com",
    databaseURL: "https://test-web-26915-default-rtdb.firebaseio.com",
    projectId: "test-web-26915",
    storageBucket: "test-web-26915.appspot.com",
    messagingSenderId: "360436414016",
    appId: "1:360436414016:web:682f68aa5ce2b81c01d1a5",
    measurementId: "G-37HVPQ6FPR"
  };


//intialize firbase
firebase.initializeApp(firebaseConfig);
const firebaseRef = firebase.database().ref('emails');
// document.querySelector('#send').addEventListener('click', ()=>{
    
// });

function send(){
  const email = document.getElementById("input").value;
 const desinput = document.getElementById("desinput").value;
  if (!email || !desinput){
    alert("enter email address")
    return
  }
    firebaseRef.push(email);
    firebaseRef.push(desinput);
    console.log(email) 
    
}
    