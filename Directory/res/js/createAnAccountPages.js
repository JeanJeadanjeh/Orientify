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

password1 = document.getElementById("password");
password2 = document.getElementById("retype-password");
submit = document.getElementById("submit-button")

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function isValid(element){
    var regEx = /^[A-Za-z \s \-]+$/;
    if (element===fname)
    {
        invalid_first_name = document.getElementById("invalid-first-name");
        invalid_first_name.style.display = "none";
        if(fname.value.match(regEx))
        {
            invalid_first_name.style.display = "none";
            return true;
        }
        else
        {
            invalid_first_name.style.display = "initial";
            return false;
        }
    }
    if (element===lname)
    {
        invalid_last_name = document.getElementById("invalid-last-name");
        invalid_last_name.style.display = "none";  
        if(lname.value.match(regEx))
        {
            invalid_last_name.style.display = "none";  
            return true;
        }
        else
        {
            invalid_last_name.style.display = "initial";
            return false;
        }
    }

    if (element===username)
    {
        invalid_username = document.getElementById("invalid-username");
        invalid_username.style.display = "none"; 
        if(username.value.match(regEx))
        {
            invalid_username.style.display = "none";  
            return true;
        }
        else
        {
            invalid_username.style.display = "initial";  
            return false;
        }
    }

    if (element===email_input){
        invalid_email = document.getElementById("invalid-email");
        invalid_email.style.display = "none"; 
        validateEmail(email_input.value) ? invalid_email.style.display = "none" :  invalid_email.style.display = "initial"; ; 
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
        var cond1 = isValid(fname);
        var cond2 = isValid(lname);
        if (cond1 && cond2)
        {
            toggle(page1);
            toggle(page2);
        }
    }
    if (element === next2){
        var cond1 = isValid(email_input);
        var cond2 = isValid(username);
        if (cond1 && cond2)
        {
            toggle(page2);
            toggle(page3);
        }
    }
    else{
        console.log((password1.value===password2.value) && password1.value.length>8);
    }
}

next1.addEventListener("click", ()=>{checkValidity(next1)})
next2.addEventListener("click", ()=>{checkValidity(next2)})
submit.addEventListener("click", ()=>{checkValidity(submit)})