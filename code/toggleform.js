function openAccountPage(){
    var f = document.getElementById("login-form");
    f.style.display = "block";
    disableScrolling();
    
}
function closeAccountPage(){
    var f = document.getElementById("login-form");
    f.style.display = "none";
    enableScrolling();
    
    
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
