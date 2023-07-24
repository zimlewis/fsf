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



const b1 = document.getElementById("buy-1")
const b2 = document.getElementById("buy-2")
const join = document.getElementById("join")
const create = document.getElementById("create")
const room_id = document.getElementById("room-id")


b1.addEventListener('click' , () => {
    const product_name = "Standard Vanila";
    const product_pirce = "$6.99";
    const product = {
        "name" : "Standard Vanila",
        "price" : 6.99,
    }
    buy(product);
})
b2.addEventListener('click' , () => {
    const product = {
        "name" : "Collector's edition",
        "price" : 42.69,
    }
    buy(product);
})


join.addEventListener('click' , () => {
    const type = "join";
    const id = room_id.value;

    play(type , id)
})
create.addEventListener('click' , () => {
    const type = "create";

    play(type)
})

function buy(product){
    const name = product.name;
    var p_quantity = 0;
    // Retrieve the data from Firebase
    get(products)
        .then((snapshot) => {
            try {
                const data = snapshot.val();
                for (const key in data) {
                    if (Object.hasOwnProperty.call(data, key)) {
                        const child = data[key];
                        if (key == name){
                            p_quantity = child.quantity;
                            console.log(p_quantity)
                        }
                    }
                }
                p_quantity = p_quantity + 1;
                set(ref(db, 'cart/' + user_id + "/products/" + name), {
                    price : product.price,
                    quantity: p_quantity
                });
            }
            catch(err){
                
            }
        })
        .catch((error) => {
            console.error("Error retrieving Firebase data:", error);
        });
    // console.log(p_quantity);
    // p_quantity = p_quantity + 1;
    // console.log(p_quantity);
    // set(ref(db, 'cart/' + user_id + "/products/" + name), {
    //     price : product.price,
    //     quantity: p_quantity
    // });

}

function play(type , id = 0){
    localStorage.setItem("type" , type);
    if (id != 0){
        localStorage.setItem("id" , id);   
    }
}