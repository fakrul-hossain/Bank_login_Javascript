// step -1: add click event handler with the submit button
document.getElementById('btn_submit').addEventListener('click', function(){
    // step-2 : ge the email address inside the email input field 
    // always remember to use .value to get text from an input field
    const emailFiled = document.getElementById('user_email');
    const email = emailFiled.value;
    // step-3 : get password
    // step-3.1 : se id on the html element
    // step-3.2 : ge the element
    // step-3.3 : ge the value from the element
    const passwordField = document.getElementById('user_password');
    const password = passwordField.value 
    // DANGER: Do not verify email password on client site
    if (email === "daddybank@gmail.com" && password === "daddyBank$") {
        window.location.href = 'bank.html'
    } else {
        alert('Tomi Onno Baper Sontan Tomer Baper Bank Jaw')
    }

});