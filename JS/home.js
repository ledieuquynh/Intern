function loginByUserPassword() {

    // Fake user account
    const user = [
        {mail: 'cuncon1@gmail.com', password: '12345678'},
        {mail: 'cuncon2@gmail.com', password: '12345678'},
        {mail: 'cuncon3@gmail.com', password: '12345678'},

    ]

    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    

    // Lưu giá trị vào sessionStorage
    sessionStorage.setItem('mail', inputEmail);
}


function validated() {
    if (.value.length )
}