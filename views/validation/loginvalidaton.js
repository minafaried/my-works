function validatelogin(form) {
    var pass = form.passwordtext.value;
    var email = form.emailtext.value;
    var passerror = document.getElementById("passerror");
    var emailerror = document.getElementById("emailerror");
    var mytext = new RegExp();
    mytext = /[a-z0-9_\.\-]+@+[a-z0-9_\.\-]+\.+(com|net|org)/i; //mony_faried68@yahoo.com 
    emailerror.innerText = "";
    passerror.innerText = "";
    form.emailtext.style.borderColor = "rgb(1, 119, 109)";
    form.passwordtext.style.borderColor = "rgb(1, 119, 109)";
    if (!mytext.test(email)) {
        emailerror.innerText = "invalid email";
        form.emailtext.style.borderColor = "red";
        return false;
    } else if (pass == "") {
        passerror.innerText = "the password is empty";
        form.passwordtext.style.borderColor = "red";
        return false;
    } else {
        emailerror.innerText = "";
        passerror.innerText = "";
        return true;
    }
}