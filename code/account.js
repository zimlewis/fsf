// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase , ref , set , update} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
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

const login_btn = document.querySelector('#login-btn');
const signup_btn = document.querySelector('#sign-up-btn');
const facebook_btn = document.querySelector('#login-facebook');
const google_btn = document.querySelector('#login-google')

facebook_btn.onclick = (e) => {
    e.preventDefault();
}

google_btn.onclick = (e) => {
    e.preventDefault();
}


login_btn.onclick = (e) => {
    e.preventDefault();
    login();
}

signup_btn.onclick = (e) => {
    e.preventDefault();
    signup();
}

//Check if user is logged in
if (localStorage.getItem('current_user') != null){
    location.href = 'youraccount.html'
}

{/* <button onclick = "show_toast('success' , 'Success')">Success</button>
<button onclick = "show_toast('error' , 'Error')">Error</button>
<button onclick = "show_toast('warning' , 'Warning')">Warning</button> */}

function login(){
    const email = document.querySelector("#login-email").value;
    const pass = document.querySelector("#login-password").value;
    const container = document.querySelector('.container');

    console.log("email: " + email);
    console.log("pass_1: " + pass);


    //Check valid
    if (!check_email_valid(email) || !check_password_valid(pass)){
        show_toast('error' , 'Your email or password(password must be longer than 6 words) is not good')
        return;
    }


    container.innerHTML = 'Log you in...'
    signInWithEmailAndPassword(auth , email , pass)
    .then((userCredential) => {
        var user = userCredential.user;
        // Add to firebase database

        

        console.log(user.uid)

        set(ref(database , 'users/' + user.uid + '/last_login') , Date.now())
        .then(() => {
            localStorage.setItem('current_user' , user.uid);
            show_toast('success' , 'Logged in')
            setTimeout(() => {
                location.reload();
            }, 2000);
        })
        .catch((error) => {
            alert("Error while writing your data");
        });
        

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        show_toast('error' , errorMessage)
        setTimeout(() => {
            location.reload();
        }, 2000);
    // ..
    });
}

function signup(){
    const username = document.querySelector("#sign-up-username").value;
    const email = document.querySelector("#sign-up-email").value;
    const pass_1 = document.querySelector("#sign-up-password-1").value;
    const pass_2 = document.querySelector("#sign-up-password-2").value;
    const container = document.querySelector('.container');

    console.log("username: " + username);
    console.log("email: " + email);
    console.log("pass_1: " + pass_1);
    console.log("pass_2: " + pass_2);


    //Check valid
    if (!check_email_valid(email) || !check_password_valid(pass_1)){
        show_toast('error' , 'Your email or password(password must be longer than 6 words) is not good')
        return;
    }
    if (pass_1 != pass_2){
        show_toast('warning' , 'Your email or password(password must be longer than 6 words) is not good')
        return;
    }
    if (!check_field_valid(username)){
        show_toast('error' , 'Your username is not good')
    }

 
    container.innerHTML = 'Sign you up...'
    createUserWithEmailAndPassword(auth , email , pass_1)
    .then((userCredential) => {
        var user = userCredential.user;
        // Add to firebase database
        var user_data = {
            email : email,
            username : username,
            last_login : Date.now()
        }


        set(ref(database , 'users/' + user.uid) , user_data)        
        .then(() => {
            localStorage.setItem('current_user' , user.uid);
            show_toast('success' , 'Logged in')
            setTimeout(() => {
                location.reload();
            }, 2000);
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        show_toast('error' , errorMessage)
        setTimeout(() => {
            location.reload();
        }, 2000);
        // ..
      });
}

function check_email_valid(email){
    const expresion = /^[^@]+@\w+(\.\w+)+\w$/;
    if (!expresion.test(email)){
        return false;
    }
    return true;
}

function check_password_valid(password){
    if (password.length < 6){
        return false;
    }
    return true
}

function check_field_valid(field){
    if (field == null){
        return false;
    }
    if (field <= 0){
        return false;
    }
    return true;
}