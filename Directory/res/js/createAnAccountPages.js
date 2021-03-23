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

function validatePassword(password) {
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(password.match(decimal)) 
    { 
        return true;
    }
    else
    { 
        return false;
    }
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

    var regExUsername = /^[a-zA-Z0-9_]+$/;
    if (element===username)
    {
        invalid_username = document.getElementById("invalid-username");
        invalid_username.style.display = "none"; 
        if(username.value.match(regExUsername))
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
    
    if (element===password2){
        invalid_password = document.getElementById("invalid-password");
        not_matching = document.getElementById("pass-not-matching");
        invalid_password.style.display = "none";
        not_matching.style.display = "none";
        
        if (!validatePassword(password1.value)){
            invalid_password.style.display = "initial";
            return false;
        }
        else if (password1.value !== password2.value){
            invalid_password.style.display = "none";
            not_matching.style.display = "initial";
            return false;
        }
        else{
            invalid_password.style.display = "none";
            not_matching.style.display = "none";    
            return true;
        }
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
    if (element===submit){
        if (isValid(password2)){
            console.log("Done!")
        }else{
            var firstname_value = fname.value;
            var lastname_value = lname.value;
            var birth_value = birth.value;
            var username_value = username.value;
            var email_value = email_input.value;
            var salt_value = bcrypt.randomBytes(16)
            var password_value = bcrypt.hash(password2.value, 10);
            console.log(
                firstname_value,
                lastname_value,
                birth_value,
                username_value,
                email_value,
                salt_value,
                password_value
                )
        }
    }
}

next1.addEventListener("click", ()=>{checkValidity(next1)})
next2.addEventListener("click", ()=>{checkValidity(next2)})
submit.addEventListener("click", ()=>{checkValidity(submit)})