// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, onChildAdded, ref, set, get } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAjyH7V8LBCcE0Wdt9Qb42Ii-cwUcgjOc",
    authDomain: "file-select-fusion-support.firebaseapp.com",
    databaseURL: "https://file-select-fusion-support-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "file-select-fusion-support",
    storageBucket: "file-select-fusion-support.appspot.com",
    messagingSenderId: "1016905256934",
    appId: "1:1016905256934:web:d6da4f1306cfcc9a625027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


var db = getDatabase(app);


function getOrGenerateUserID() {
    const cookieName = 'userID';
    let userID = getCookie(cookieName);

    if (!userID) {
        // Generate a new user ID
        userID = generateUserID();
        // Store the user ID in a cookie
        setCookie(cookieName, userID, 365); // Expires in 365 days
    }

    return userID;
}

function generateUserID() {
    // Generate a unique ID using a suitable method (e.g., UUID library)
    // Example using a simple implementation
    return Date.now().toString();
}

function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}


let user_id = getOrGenerateUserID();

const cart = ref(db, '/cart/' + user_id);
const products = ref(db , '/cart/' + user_id + '/products')

window.onload = (event) => {
    const pc = document.getElementById("products");
    const total = document.getElementById("total-amount");
    const allprice = document.getElementById("allprice")

    get(products)
    .then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            var html = "";
            var amount = 0;
            var ap = 0
            // Now you have the Firebase data in the 'data' variable
            // You can proceed to access and manipulate it as needed
    
            // Example: Accessing the child parts of 'mess'
            //<p><a href="#">Product 1</a> x 3 <span class="price">asdasd</span></p>
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const child = data[key];
                    const price = child.price * child.quantity;
                    amount += Number(child.quantity);
                    ap += price;
                    html += "<p>" + key + " x " + child.quantity + " <span class='price'>$" + price + "</span></p>";
                }
            }
            pc.innerHTML = html;
            total.innerText = amount;
            allprice.innerText = "$" + ap;
        } else {
            console.log("No data available.");
        }
    })
    .catch((error) => {
        console.error("Error retrieving Firebase data:", error);
    });
};

