// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase , get , child , ref , set , update} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
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

const buy_btns = document.querySelectorAll('.product');
const create_room_btn = document.querySelector('#create-room button');
const join_room_btn = document.querySelector('#join-room button');

create_room_btn.onclick = () => {
    //Create the room
    localStorage.setItem('play_type' , 'create');
    location.href = 'playdigital.html'
}

join_room_btn.onclick = () => {
    //get the room id
    const room_id = document.querySelector('#join-room input').value;
    //join the room
    localStorage.setItem('play_type' , 'join');
    localStorage.setItem('play_id' , room_id);

    location.href = 'playdigital.html'
}


const products_dict = {
    "Standard Vanila" : {
        price: 6.9
    },
    "Collector's Edition" : {
        price: 420.69
    },
}


for (let i of buy_btns){
    if ('product' in i.dataset){
        i.onclick = (function(product){
            return function(){
                add_to_cart(product)
            }
        })(i.dataset.product);
    }
}


function add_to_cart(product){
    let db_ref = ref(database);
    get(child(db_ref, `users/${localStorage.getItem('current_user')}/cart/${product}`))
    .then((snapshot) => {
        let price = products_dict[product].price;
        if (snapshot.exists()) {
            //snapshot.val() is the user data
            console.log(snapshot.val());
            var quantity = Number(snapshot.val().quantity) + 1
            set(ref(database , `users/${localStorage.getItem('current_user')}/cart/${product}/quantity`) , quantity)        
            .then(() => {
                show_toast('success' , `Added ${product} to your cart`)
            })
            .catch(() => {
                show_toast('success' , `Error adding ${product} to your cart`)
            });
        } else {
            set(ref(database , `users/${localStorage.getItem('current_user')}/cart/${product}`) , {
                quantity: 1,
                price: price
            })        
            .then(() => {
                show_toast('success' , `Added ${product} to your cart`)
            })
            .catch(() => {
                show_toast('success' , `Error adding ${product} to your cart`)
            });
        }
    })
    .catch((error) => {
        console.error(error);
    });
}