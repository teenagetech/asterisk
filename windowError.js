var modal = document.getElementById("erSize");
window.onload = function() {
    if(window.innerHeight < 450) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
    if(window.innerWidth < 350) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}
window.onresize = function() {
    if(window.innerHeight < 450) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
    if(window.innerWidth < 350) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}