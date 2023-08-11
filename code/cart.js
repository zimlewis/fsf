// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { onValue , onChildChanged , getDatabase , get , child , ref , set , update} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
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

var init = false

const database = getDatabase(app);

const db_ref = ref(database);
const shop = document.querySelector('.shop');
const subtotal = document.querySelector('#subtotal');
const taxes = document.querySelector('#taxes');
const total = document.querySelector('#total');
// add_product("Colector's edition" , 20 , 30)
// add_product("Standard Vanila" , 20 , 30)

function add_product(product_name , quantity , price){
    
    // Create the main container div
    const container = document.createElement("div");
    container.classList.add("box");

    // Create the image element
    const product_image_div = document.createElement('div');
    product_image_div.classList.add('product-img');

    const image = document.createElement("img");
    image.src = (product_name == 'Standard Vanila')?"media/cardbox.png":"media/big-baby.png";
    image.alt = "";
    
    // Create the content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create and add the heading elements
    const heading3 = document.createElement("h3");
    heading3.textContent = product_name;

    const heading4 = document.createElement("h4");
    heading4.textContent = `Price: $${price}`;

    // Create the quantity section
    const quantitySection = document.createElement("p");
    quantitySection.classList.add("unit");
    quantitySection.textContent = `Quantity:`;

    const quantityDiv = document.createElement('div');
    quantityDiv.classList.add('unit-count')

    const minusIcon = document.createElement("i");
    minusIcon.classList.add("bx", "bx-minus-circle");
    minusIcon.onclick = () => {
        decrease_quantity(product_name);
    }

    const quantityValue = document.createElement("span");
    quantityValue.classList.add("quantity");
    quantityValue.textContent = `${quantity}`;

    const plusIcon = document.createElement("i");
    plusIcon.classList.add("bx", "bx-plus-circle");
    plusIcon.onclick = () => {
        increase_quantity(product_name);
    }

    // Create the remove section
    const btnArea = document.createElement("p");
    btnArea.classList.add("btn-area");
    btnArea.onclick = () => {
        delete_from_cart(product_name);
    }

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("bx", "bx-trash");

    const removeButton = document.createElement("span");
    removeButton.classList.add("btn2");
    removeButton.textContent = "remove";

    // Build the structure by appending elements
    product_image_div.appendChild(image);


    quantityDiv.appendChild(minusIcon);
    quantityDiv.appendChild(quantityValue);
    quantityDiv.appendChild(plusIcon);

    btnArea.appendChild(trashIcon);
    btnArea.appendChild(removeButton);

    content.appendChild(heading3);
    content.appendChild(heading4);
    content.appendChild(quantitySection);
    content.appendChild(quantityDiv);
    content.appendChild(btnArea);

    container.appendChild(product_image_div);
    container.appendChild(content);

    return container;
}

function delete_from_cart(product){
    console.log(product)
    set(ref(database, `users/${localStorage.getItem('current_user')}/cart/${product}`) , {})
    .then(() => {
        show_toast('success' , `Successfully remove ${product} from your cart`)
    })
    .catch((error) => {
        show_toast('error' , `Error removing ${product} from your cart`)
        console.log(error);
    })
}

function increase_quantity(product){
    get(child(db_ref, `users/${localStorage.getItem('current_user')}/cart/${product}`))
    .then((snapshot) => {
        if (snapshot.exists()){
            var current_quantity = snapshot.val()['quantity']
            set(ref(database, `users/${localStorage.getItem('current_user')}/cart/${product}/quantity`) , current_quantity + 1)
            .then(() => {
                show_toast('success' , `Successfully increase ${product}'s quantity`)
            })
            .catch((error) => {
                console.log(error);
                show_toast('error' , `Error increasing ${product}'s quantity`)
            })
        }else{
            //nothing
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

function decrease_quantity(product){
    get(child(db_ref, `users/${localStorage.getItem('current_user')}/cart/${product}`))
    .then((snapshot) => {
        if (snapshot.exists()){
            var current_quantity = snapshot.val()['quantity']
            if (current_quantity > 1){
                set(ref(database, `users/${localStorage.getItem('current_user')}/cart/${product}/quantity`) , current_quantity - 1)
                .then(() => {
                    show_toast('success' , `Successfully decrease ${product}'s quantity`)
                })
                .catch((error) => {
                    console.log(error);
                    show_toast('error' , `Error decreasing ${product}'s quantity`)
                })
            }
            else{
                delete_from_cart(product)
            }

        }else{
            //nothing
        }
    })
    .catch((e) => {
        console.log(e);
    })
}
get_product_from_firebase();

function get_product_from_firebase(){
    shop.innerHTML = '';
    get(child(db_ref, `users/${localStorage.getItem('current_user')}/cart/`))
    .then((snapshot) => {
        if (snapshot.exists()) {
            //snapshot.val() is the user data
            var subtotal_value = 0;
            var total_value = 0;
            var taxes_value = 0;
            for (let i in snapshot.val()){
                shop.appendChild(add_product(i , snapshot.val()[i]['quantity'] , snapshot.val()[i]['price']));
                subtotal_value += Number(snapshot.val()[i]['price']) * Number(snapshot.val()[i]['quantity'])
            }
            taxes_value = subtotal_value * 5/100;
            total_value = subtotal_value + taxes_value;
            
            subtotal.innerHTML = `$${subtotal_value.toFixed(2)}`;
            taxes.innerHTML = `$${taxes_value.toFixed(2)}`;
            total.innerHTML = `$${total_value.toFixed(2)}`;
            
        } else {
            shop.innerHTML = 'You have no item in your cart'
            subtotal.innerHTML = `$${0}`;
            taxes.innerHTML = `$${0}`;
            total.innerHTML = `$${0}`;
        }
        init = true;
    })
    .catch((error) => {
        console.error(error);
    });
}



onValue(ref(database , `users/${localStorage.getItem('current_user')}/`) , (snapshot) => {
    if (init) get_product_from_firebase();
})
