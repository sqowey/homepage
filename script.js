// Resize clouds on opening the side menu
function resizeClouds(size) {
    document.getElementById("clouds_light").style.width = size + "px";
    document.getElementById("clouds_light").style.height = size + "px";
    document.getElementById("clouds_dark").style.height = size + "px";
    document.getElementById("clouds_dark").style.width = size + "px";
}


// menu opening and closing
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    resizeClouds("300");
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    resizeClouds("400");
}