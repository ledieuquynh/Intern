// // // 1. Tạo hàm
// // function showDialog() {
// //     alert('Một ly cà phê nhé');
// // }
// // showDialog();

// // function writeLog(message, message2) {
// //     console.log(message)
// //     console.log(message2)

// // }
// // writeLog('Tiệm trà và hoa số 9', 'hoa cuc' );

// // function writeLog (text, text2) {
// //     if (text) {
// //         console.log(text)
// //     }

// //     if (text2) {                                               
// //         console.log(text2)
// //     }
// // }
// // writeLog('apple', 'pinapple');

// // // confirm('Message?');
// // let isConfirm = confirm('Được luôn?');
// // console.log(isConfirm);


// // // Các loại function:
// // function showMessage() {
// //     let fullName = 'Namiko chan';
// //     showMessage2();
// // }
// // showMessage();

// // function cong(a, b) {
// //     // return a + b;
// //     // return undefined;
// //     // return a.toString() + b.toString();
// //     return 'Orange' + 'cake';
// // }
// // // let result = cong (3, 7)
// // // console.log(result)


// // // Declaration function

// // function showMessage() {
// //     console.log('Declaration function');
// // }

// // let showMessage2 = function() {
// //     console.log('Expression function');
// // }

// // setTimeout(function autoLogin() {

// // })

// // // Object
// // let emailKey = 'email';

// // let myInfo = {
// //     name: 'Quynh',
// //     age: 18,
// //     address: 'HN, VN',
// //     [emailKey]: 'usagi333@family.com',
// //     getName: function() {
// //         return this.name;
// //     },
// //     myKey: 1234
// // };
// // console.log(myInfo);
// // console.log(myInfo.getName()); 

// // console.log(myInfo);

// // myInfo.email = 'usagi@family.com'
// // console.log(myInfo['email']);

// // let myKey = 'address';
// // console.log(myInfo[myKey]);

// // delete myInfo.name;
// // // Order
// // function validateForm() {
// //     let x = document.forms["myForm"]["fname"].value;
// //     if (x == "") {
// //         alert("Heyy I wanna order a cup of coffee");
// //         return false;
// //     }
// // }

// // // Object constructor : tạo sẵn một bản thiết kế
// // let User = function(firstName, lastName, avatar) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.avatar = avatar;

// //     this.getName = function() {
// //         return `${this.firstName} ${this.lastName}`;
// //     }
// // }

// // // let author = new User('Momo', 'Ringo', 'Avatar');
// // // let user = new User('Muun', 'Mikan', 'Avatar');

// // // author.title = 'Buy 1 cup';
// // // user.comment = 'Black coffee';

// // // console.log(author.constructor);
// // // console.log(User);

// // // prototype
// // User.prototype.className = 'AA';
// // User.prototype.getClassName = function() {
// //     return this.className;
// // }

// // let user = new User('Momo', 'Ringo', 'Avatar1');
// // let user2 = new User('Muun', 'Mikan', 'Avatar2');

// // console.log(user.className);
// // // console.log(user2.className);
// // console.log(user2.getClassName);

// // // Đối tượng date
// // // let date = new Date();

// // // let year = date.getFullYear();
// // // let month = date.getMonth() + 1;
// // // let day = date.getDate();
// // // // let day = date.getHours();
// // // let day = date.getMinutes();
// // // let day = date.getSeconds();


// // // console.log(`${day}/${month}/${year}`);

// // // Câu lệnh rẽ nhánh if else
// // let date = 2;

// // // if (date === 2) {
// // //     console.log('Monday');
// // // } else if (date === 3) {
// // //     console.log('Tuesday');
// // // } else if (date === 4) {
// // //     console.log('Wednesday');
// // // }

// // switch(date) {
// //     case 2: 
// //         console.log('Monday');
// //         break;
// //     case 3:
// //         console.log('Tuesday');
// //         break;
// //     case 4:
// //         console.log('Wednesday');
// //         break;
// //     default:
// //         console.log('Undefined');
// //         // alert('Undefined');
// //         break;
// // }

// // // Toán tử 3 ngôi - Ternary operator
// // let course = {
// //     name: 'Black coffee',
// //     coin: 250
// // }

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coins`);
// // } else {
// //     console.log('Free');
// // }

// // let result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
// // console.log(result);

// // // Vòng lặp - Loop

// // // 1. Vòng lặp for : lặp với điều kiện đúng For loop
// // for (let i = 1; i <= 10; i++) {
// //     // code
// //     console.log(i);
// // }

// // let myArray = [
// //     'Arabica',
// //     'Capuchino',
// //     'Traditional',
// //     'Cacao',
// //     'Dark'
// // ];

// // let arrayLength = myArray.length;

// // for (let i = 0; i < arrayLength; i ++) {
// //     console.log(myArray[i]);
// // }

// // // for/in loop
// // let myStore = {
// //     name: 'Coffee 19',
// //     age: 1,
// //     address: 'Hang Than, Ha Noi'
// // };

// // for (let key in myStore) {
// //     console.log(myStore[key]);
// // }

// // let menu = [
// //     'black cafe',
// //     'tea',
// //     'cake'
// // ];
    
// // for (let key in menu) {
// //     console.log(key);
// // }

// // let myString = 'black coffee';
// // console.log(myString[0]);

// // let languages = 'Japanese';
// // for (let key in languages) {
// //     console.log(languages[key]);
// // }

// // // for/of Loop
// // let clotheList = {
// //     name:'T-shirt',
// //     color: 'white'
// // };
// // //  Lấy key và value của object
// // console.log(Object.values(clotheList));

// // // for (let value of fruit) {
// // //     console.log(value);
// // // }

// // for (let value of Object.keys(clotheList)) {
// //     console.log(clotheList[value]);
// // }


// // // Vòng lặp while loop
// // let myFruit = [
// //     'mikan',
// //     'banana',
// //     'ichigo'
// // ];

// // // let i = 0;

// // // while (i <= myFruit.length) {
// // //     i++;
// // //     console.log(myFruit[i]);
// // // }

// // // Vòng lặp do/while loop
// // let i = 0;
// // let isSuccess = false;

// // do {
// //     i++;
// //     console.log(i);

// //     // thanh cong
// //     if (true) {
// //         isSuccess = true;
// //     }

// // } while (!isSuccess && i <= 3);

// // // Break & Continue in loop
// // for (let i = 0; i < 10; i++) {
    
// //     if (i%2 !== 0) {
// //         continue;
// //     }

// //     console.log(i);
// // }

// // Validate

// // function Validator(options) {
// //     let formElement = document.querySelector(options.form);

// //     if (formElement) {

// //     }
// // }

// // // Định nghĩa
// // Validator.isRequired =  function(selector) {

// // }

// // Validator.isEmail =  function() {

// // }

// // Vòng lặp lồng nhau - Nested loop
// let myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }

// // in ra gia tri nguoc
// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i += 5) {
//     console.log(i);
// }

// /* 
//     Array methods:
//         for Each()
//         every() tất cả điều kiện trong mảng phải thỏa mãn 1 điều kiện
//         some()  chỉ cần 1 trong mảng thỏa mãn điều kiện.
//         find()  chỉ trả về 1 phần tử tìm kiếm
//         filter() giống find nhưng trả về nhiều phần tử tìm kiếm hơn.
//         map() khi thay đổi element của một array. 
//         reduce()
// */

// let course = [
//     {
//         id: 1,
//         name: 'breakfast',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'lunch',
//         coin: 20
//     },
//     {
//         id: 3,
//         name: 'dinner',
//         coin: 50
//     },
//     {
//         id: 4,
//         name: 'half-lunch',
//         coin: 100
//     },
//     {
//         id: 5,
//         name: 'half-dinner',
//         coin: 150
//     }
// ];

// // let listCourse = course.find(function(course, index) {
// //     console.log(index);
// //     return course.name === 'lunch';
// // });
// // console.log(listCourse);

// // function courseHandler(course){
// //     // console.log(course);
// //     return {
// //         id: course.id,
// //         name: `Combo: ${course.name}`,
// //         coin: course.coin,
// //         coinText: `Cost: ${course.coin}`,
// //         index: index,
// //         originArray: originArray,
// //     };
// // };

// // let newCourse = course.map(courseHandler);

// // console.log(newCourse);

// // let totalCoin = 0;

// // for (let course of course) {
// //     totalCoin += course.coin;
// // }

// // console.log(totalCoin);

// // console.log(document);

// // document.write('Hello coffee lover');

// // let headingNode = document.querySelector('html .box .heading-2');
// // console.log(headingNode);


// Đối tượng `Validator`
function Validator(options) {

    let selectorRules = {};

    // Hàm thực hiện validate
   function validate(inputElement, rule) {
        let errorMessage = rule.test(inputElement.value);
        let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        

    let rules = selectorRules[rule.selector]

        console.log(rule.selector);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
   }

   // lấy element của form
    let formElement = document.querySelector(options.form);

    console.log(options.rules);

    if (formElement) {

        options.rules.forEach(function (rule) {

            // lưu lại rule cho input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            let inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input 
                inputElement.onblur = function () {
                   validate(inputElement, rule);
                }

                // Xử lý trường hợp user nhập vòa input
                inputElement.oninput = function() {
                    // console.log(inputElement.value);
                    let errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
            
        });
        
    
    }
}

// Định nghĩa rules
// Nguyên tắc của rules:
/* 
    1. Khi có lỗi => trả message lỗi
    2. Khi hợp lệ => Không trả gì (undefined)
*/
Validator.isRequired = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Please input'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Please input your email'
        }
    };
    
}

Validator.minLength = function (selector,min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu 8 ký tự`;
        }
    };
    
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác.';
        }
    }
}