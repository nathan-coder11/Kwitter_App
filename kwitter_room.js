
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBWxTOdZEs4MRkRtD0kgBtslz_MjNL2p-4",
      authDomain: "kwitter2-dbd98.firebaseapp.com",
      databaseURL: "https://kwitter2-dbd98-default-rtdb.firebaseio.com",
      projectId: "kwitter2-dbd98",
      storageBucket: "kwitter2-dbd98.appspot.com",
      messagingSenderId: "506278406324",
      appId: "1:506278406324:web:06ecff33c48d02c4d4cfe1"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+username+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
};
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}