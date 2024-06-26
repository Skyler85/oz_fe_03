// 문자열 (string)
var a = '';
var b = '';
var c = "";
var myName = 'Steve';
var message = "Hello, ".concat(myName);
myName.toLocaleLowerCase();
// message = 123
// 숫자 타입 (number)
var n = 100;
// n = "123"
// n.toUpperCase()
var count = 10;
var price = 9.99;
var temperature = -15;
var distance = 3.4e-5;
var total = count * price;
var average = total / 2;
var infinity = Infinity;
var minusInfinity = -Infinity;
var iAmNotANumber = NaN;
// 불리언 (boolean)
var isOpen = true;
var isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (!isCompleted) {
    console.log("job not complete");
}
var isAvailable = isOpen && !isCompleted;
// null 널 타입
var user = null;
function login(userName) {
    user = null;
}
login("Joey");
// any 타입
var someValue;
someValue.toSting();
someValue = false;
someValue.toFixed();
