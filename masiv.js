// 'use strict'


// Ітерація по масиву - перебирання масиву

const productName = ['Smartfon', 'Notebook', 'Computer', 'Processor'];
for (let i = 0; i < productName.length; i += 1) {
    console.log(productName[i]);
}


// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

const string = "javascript";

for (const character of string) {
  console.log(character);
}

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
  // іменем клієнта. Якщо збігається - записуємо в message повідомлення
  // про успіх і робимо break, щоб далі не шукати
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }

  // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}

console.log(message); // "Клієнт з таким ім'ям є в базі даних!"






const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}



// Методи split() і join()
const nick = "Mangust";
console.log(nick.split(""));

// const message = "JavaScript - це цікаво";
// console.log(message.split(" "));

const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"




// Метод indexOf()
const klients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(klients.indexOf("Kiwi")); 
console.log(klients.indexOf("Monkong")); 


// Метод includes()
const products = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(products.includes("Poly")); 
console.log(products.includes("Monkong"));



// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }



const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cranberries";

const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
} else {
    console.log(`This is not fruct`);
}



// Методи push()

// const numbers = [];

// numbers.push(1);
// console.log(numbers); 

// numbers.push(2);
// console.log(numbers); 

// numbers.push(3);
// console.log(numbers); 

// numbers.push(4);
// console.log(numbers); 

// numbers.push(5);
// console.log(numbers); 



// Методи pop()
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop());
// console.log(numbers); 

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop()); 
// console.log(numbers);

// console.log(numbers.pop()); 
// console.log(typeof numbers); 




// Метод slice()
const clints = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clints.slice(1, 3)); // ["Ajax", "Poly"]



// Метод splice()
// Видалення
const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]


// Додавання
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]



// Метод concat()
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); 

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]