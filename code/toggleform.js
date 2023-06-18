function openAccountPage(){
    var f = document.getElementById("login-form");
    f.style.display = "block";
    enableScrolling();
    
}
function closeAccountPage(){
    var f = document.getElementById("login-form");
    f.style.display = "none";
    disableScrolling();
    
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
