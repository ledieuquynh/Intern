
document.getElementById("sub").innerHTML = "Tài liệu học JavaScript";
document.getElementById("content").innerHTML = "Gấu mèo học JS";
console.log("Konnichiwa");console.log("Neko nezumi desu.");
// or
// console.log("Konnichiha");
// console.log("Neko nezumi desu.");

// console.log(1 +
//     1 +
//     1); 

// console.log(konnichiha Nekochan);
// [1, 2].forEach(value => console.log(value));

function print_message() {
    // khai báo đầu function
    "use strict";
}
print_message();
message = "Web mèo đang bị lỗi, vui lòng qua web nezumi";
document.write(message);

// function camelCase(pretty, pretty2 = 2) {
//     if (pretty == 1) {
//         alert('senpai wa kawaii desu ne');
//     }  else {
//         alert('so ugly');
//     }
//     alert(pretty2);

// }

let otherPretty = 3;
let otherPretty2 = 4;

camelCase(otherPretty); // ko co param2
camelCase(otherPretty, otherPretty2)


let otherPretty3 = 3;
let otherPretty4 = 4;

function sum(param1, param2) {
    let x = param1
}

sum(otherPretty3, otherPretty4);
sum(1, 2);

function myFunction() {
    return this;

}

function disableElement() {
    document.getElementById(btn01).disabled = true;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway"
};

function handleOnFocus(x){
    x.style.color = "red";
    x.style.backgroundColor = "grey";
}
function handleOnBlur(x){
    x.style.color = "blue";
    x.style.backgroundColor = "yellow";
}

// Login
function loginByUserPassword(){
    const user = [
        {email: 'test1@gmail.com', password: '12345678'},
        {email: 'test2@gmail.com', password: '12345678'},
        {email: 'test3@gmail.com', password: '12345678'},

    ]

    let email = document.forms['form']['email'];
    let password = document.forms['form']['password'];

    let email_error = document.getElementById('email-error');
    let pass_error = document.getElementById('pass-error');

    email.addEventListener('textInput', email_Verify);
    password.addEventListener('textInput', password_Verify);
}





function validated(){
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email-error.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value.length < 8) {
        password.style.border = "1px solid red";
        pass-error.style.display = "block";
        password.focus();
        return false;
    }
}

function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid red";
        email-error.style.display = "none";
        return true;
    }

    if (password.value.length >= 5) {
        password.style.border = "1px solid red";
        pass-error.style.display = "none";
        return true;
    }
}
