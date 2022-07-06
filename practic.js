// Задача
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

console.log({ totalPrice });
console.log({ message });


// Функція
function sayHi(){
    console.log('Hello, this is my first function!');
}

sayHi();


// IF.....ELSE
let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost);


// Зарплата
const timeWork = 180;
let salary = 10000;

if (timeWork === 160) {
    salary = 10000;
    console.log(`Ви отримали зарплату в повному обсязі в розмірі ${salary} за місяць`);
}
else if (timeWork < 160) {
    salary = 6500;
    console.log(`Ви отримали зарплату в згідно відпрацьованих годин в розмірі ${salary} за місяць`);
}
else if (timeWork > 160) {
    salary = 15000;
    console.log(`Ви отримали зарплату за понаднормові години в розмірі ${salary} за місяць`);
}

// Тернарний оператор
const age = 10;
const type = age >= 18 ? "adult" : "child";
console.log(type);



const num1 = 5;
const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }
// console.log(biggerNumber);


const biggerNumber = num1 > num2 ? num1 : num2;
console.log(biggerNumber);


const balance = 10000;
// let message;

// коли баланс більше 0 => ПОЗИТИВНИЙ
// коли баланс більше 0 => НЕГАТИВНИЙ

const messageBuh = balance >= 0 ? 'Ми отримали позитивний баланс' : 'Ми отримали негативний баланс';
console.log(messageBuh);


// 
let balanceBuyer = 10000;
const payment = 7000;

console.log(`Загальна вартість замовлення ${payment} кредитів. Перевірте залишок коштів на рахунку!`); 

if (payment < balanceBuyer) {
    const result = balanceBuyer - payment;
    console.log(`На рахунку залишилось ${result} кредитів`);
} else {
    console.log(`На рахунку недостатньо коштів для проведення операції`);
}

console.log(`Операція завершена`);
