// 문자열 (string)

const a: string = '';
const b: string = '';
const c: string = ``;

let myName: string = 'Steve';
let message: string = `Hello, ${myName}`;

myName.toLocaleLowerCase();

// message = 123

// 숫자 타입 (number)

let n: number = 100;
// n = "123"
// n.toUpperCase()

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity
let minusInfinity: number = -Infinity
let iAmNotANumber: number = NaN

// 불리언 (boolean)
let isOpen: boolean = true
let isCompleted: boolean = false

if (isOpen) {
  console.log("hello we are open!")
}

if(!isCompleted) {
  console.log("job not complete")
}

let isAvailable: boolean = isOpen && !isCompleted

// null 널 타입

let user: string | null = null
function login(userName: string) {
  user = null
}

login("Joey")


// any 타입

let someValue: any

someValue.toSting()
someValue = false
someValue.toFixed()
