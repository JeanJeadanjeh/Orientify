var dropdownButton = document.getElementById("dropdown-button");
var dropdownMenu = document.getElementById("dropdown");
dropdownMenu.style.display = "none";
function toggle(element){
    if (element.style.display === "none"){
        element.style.display = "flex";
    }else{
        element.style.display = "none";
    }
}
dropdownButton.addEventListener("click", ()=>toggle(dropdownMenu));