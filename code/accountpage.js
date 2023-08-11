// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase , child , ref , get , set , update} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRuIyes_Popym7c0YqrJVt-e0FH841ES0",
    authDomain: "file-select-fusion.firebaseapp.com",
    databaseURL: "https://file-select-fusion-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "file-select-fusion",
    storageBucket: "file-select-fusion.appspot.com",
    messagingSenderId: "620293994625",
    appId: "1:620293994625:web:944f801a45d66647be7580",
    measurementId: "G-HZM121BLM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);

const logout_btn = document.querySelector('.logout');

logout_btn.onclick = (e) => {
    e.preventDefault();
    logout();
}

const db_ref = ref(database);


get(child(db_ref, `users/${localStorage.getItem('current_user')}`))
    .then((snapshot) => {
        if (snapshot.exists()) {
            //snapshot.val() is the user data
            document.querySelector('.title').innerHTML = `${snapshot.val().username}`
        } else {
            console.log("No data available");
        }
    })
    .catch((error) => {
        console.error(error);
    });


function logout(){
    localStorage.removeItem('current_user');
    location.reload();
}