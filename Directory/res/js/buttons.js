function changeValue(list_id, btn_id){
    let element = document.getElementById(list_id).getElementsByTagName("button");
    for (let button of element){
        button.className = "not-active";
    }
    document.getElementById(btn_id).className = "active";
}

var options_button_List = document.getElementsByClassName("options-button");
for (let options_button of  options_button_List){
    const buttons_list = options_button.getElementsByTagName("button");
    for (let button of buttons_list){
        button.onclick = function(){changeValue(options_button.id, button.id)};
    }
}