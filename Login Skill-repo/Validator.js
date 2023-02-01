// document.getElementById(button).disable = true;

// function Validator() {
//     let user = [
//         {email: }
//     ]
// }
alert("Hello wednesday")
console.log(123123)

// document.getElementById("button").disable = true;

function login() {
    let user = [
        {email: 'test1@gmail.com', password: '12345678'},
        {email: 'test2@gmail.com', password: '12345678'},
        {email: 'test3@gmail.com', password: '12345678'}
        
    ];

    let inputEmail = document.getElementById("email").value;
    let checkEmail = document.getElementById("email").value.typeof("@");
    let inputPassword = document.getElementById("password").value;

    sessionStorage.setItem('email',inputEmail);

    if (inputEmail == null || inputEmail == '') {
        document.getElementById("email").style.border = '1px solid red';
        document.getElementById('messageErrorEmail').innerHTML = "メールを入力してください。"

    } else if (checkEmailForm == -1) {
        document.getElementById("email").style.border = '1px solid red';
        document.getElementById('messageErrorEmail').innerHTML = "メールを正しく入力してください。"

    } else {
        document.getElementById("messageErrorEmail").style.display = "none";
        document.getElementById("email").style.border = '1px solid #ccc';

    }
}