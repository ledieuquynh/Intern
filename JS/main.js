function loginByUserPassword() {
    const user = [
        {email: 'test1@gmail.com', password: '12345678'},
        {email: 'test2@gmail.com', password: '12345678'},
        {email: 'test3@gmail.com', password: '12345678'},
    ];

    let  inputEmail = document.getElementById("email").value;
    const emailRegex = {"/^\S+@\S+\.\S+$/"};
    let inputPassword = document.getElementById("password").value;

    sessionStorage.setItem('email', inputEmail);

    if (inputEmail == null || inputEmail == '') {
        addErrorClass("email", "error");
        showErrorMessageByElementId("messageErrorEmail", "メールを入力してください");
    } else if (!inputEmail.match(emailRegex)) {
        addErrorClass("email", "error");
        showErrorMessageByElementId("messageErrorEmail", "メールアドレスが正しくありません。");
    }
    else {
        document.getElementById("messageErrorEmail").style.display = "none";
        removeErrorClass("email", "error");
    }


}