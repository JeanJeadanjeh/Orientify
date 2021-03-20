page1 = document.getElementById("page1");
page2 = document.getElementById("page2");
page3 = document.getElementById("page3");

page2.style.display = "none";
page3.style.display = "none";

next1 = document.getElementById("next1");
next2 = document.getElementById("next2");

fname = document.getElementById("fname");
lname = document.getElementById("lname");
birth = document.getElementById("birth");
username = document.getElementById("username");
email_input = document.getElementById("email");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function isValid(element){
    var regEx = /^[A-Za-z \s \-]+$/;
    if (element===fname)
    {
        if(fname.value.match(regEx))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    if (element===lname)
    {
        if(lname.value.match(regEx))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    if (element===lname)
    {
        if(lname.value.match(regEx))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    if (element===username)
    {
        if(username.value.match(regEx))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    if (element===email_input){
        return validateEmail(email_input.value);
    }
    return false;
}

function toggle(element){
    if (element.style.display === "none"){
        element.style.display = "flex";
    }else{
        element.style.display = "none";
    }
}


function checkValidity(element){
    if (element === next1){
        if (isValid(fname) && isValid(lname))
        {
            toggle(page1);
            toggle(page2);
        }
    }
    if (element === next2){
        if (isValid(email_input) && isValid(username))
        {
            toggle(page2);
            toggle(page3);
        }
    }
}

next1.addEventListener("click", ()=>{checkValidity(next1)})
next2.addEventListener("click", ()=>{checkValidity(next2)})