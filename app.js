// 1-misol
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// function getNamesByGrade(students, grade) {
//   return students
//     .map((students) => {
//       if (students.percent > 60 && students.percent < 70) {
//         return { ...students, grade: 3 };
//       } else if (students.percent >= 70 && students.percent < 85) {
//         return { ...students, grade: 4 };
//       } else {
//         return { ...students, grade: 5 };
//       }
//     })
//     .filter((students) => students.grade == grade)
//     .map((students) => students.name);
// }
// const result = getNamesByGrade(students, 5);
// console.log(result);

//2-misol
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const animalsCount = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});
// console.log(animalsCount);

//3-misol
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map((number) => number * number);
// console.log(squares);

//4-misol
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num) => num ** 2);
// console.log(result);
// const numbers = [1, -4, 12, 0, -3, 29, -150];
// const result = numbers
//   .filter((num) => num soz> 0)
//   .reduce((acc, curVal) => (acc += curVal), 0);
// console.log(result);

//5-misol
// function sozlar(soz) {
//   return soz
//     .split(" ")
//     .map((item) => item[0])
//     .join("");
// }
// console.log(sozlar("George Raymond Richard Martin"));

//6-misol
// const age = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// const result = age.sort((a, b) => a.age - b.age);
// console.log(result[0]);
// console.log(result.at(-1));

//7-misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evens = numbers.filter((numbers) => numbers % 2 == 0);
// let odds = numbers.filter((numbers) => numbers % 2 !== 0);
// console.log("Juft sonlar:", evens);
// console.log("Toq sonlar:", odds);

//8-misol
// let element = [1, 2, 3, 5, 2, 6, 4, 10];
// let oxshashelement = [...new Set(element)];
// console.log(oxshashelement);

//9-misol
// let products = [
//   { id: 1, name: "Laptop", price: 1000, rating: 4.5, discount: 10 },
//   { id: 2, name: "Phone", price: 500, rating: 4.7, discount: 5 },
//   { id: 3, name: "Tablet", price: 750, rating: 4.3, discount: 15 },
//   { id: 4, name: "Monitor", price: 300, rating: 4.6, discount: 20 },
// ];
// products.sort((a, b) => {
//   if (a.id !== b.id) return a.id - b.id;
//   if (a.name !== b.name) return a.name.localeCompare(b.name);
//   if (a.price !== b.price) return a.price - b.price;
//   if (a.rating !== b.rating) return b.rating - a.rating;
//   return b.discount - a.discount;
// });
// console.log(products);

//10-misol
// let products = [
//   { id: 1, name: "Laptop", price: 1000, rating: 4.5, discount: 10 },
//   { id: 2, name: "Phone", price: 500, rating: 4.7, discount: 5 },
//   { id: 3, name: "Tablet", price: 750, rating: 4.3, discount: 15 },
//   { id: 4, name: "Monitor", price: 300, rating: 4.6, discount: 20 },
// ];
// products.sort((a, b) => b.rating - a.rating);
// let engkuchliProduct = products[0];
// console.log(engkuchliProduct);

//11-misol
// let products = [
//   { id: 3, name: "Tablet", price: 750, rating: 4.3, discount: 15 },
//   { id: 1, name: "Laptop", price: 1000, rating: 4.5, discount: 10 },
//   { id: 4, name: "Monitor", price: 300, rating: 4.6, discount: 20 },
//   { id: 2, name: "Phone", price: 500, rating: 4.7, discount: 5 },
// ];
// products.sort((a, b) => a.price - b.price);
// let narxipastProduct = products[0];
// console.log(narxipastProduct);

//12-misol
// let products = [
//   { id: 3, name: "Tablet", price: 750, rating: 4.3, discount: 15 },
//   { id: 1, name: "Laptop", price: 1000, rating: 4.5, discount: 10 },
//   { id: 4, name: "Monitor", price: 300, rating: 4.6, discount: 20 },
//   { id: 2, name: "Phone", price: 500, rating: 4.7, discount: 5 },
// ];
// let barchasiniNarxi = products.reduce(
//   (sum, products) => sum + products.price,
//   0
// );
// console.log(barchasiniNarxi);

//13-misol

// let products = [
//   { id: 3, name: "Tablet", price: 750, rating: 4.3, discount: 15 },
//   { id: 1, name: "Laptop", price: 1000, rating: 4.5, discount: 10 },
//   { id: 4, name: "Monitor", price: 300, rating: 4.6, discount: 20 },
//   { id: 2, name: "Phone", price: 500, rating: 4.7, discount: 5 },
// ];

// let productsNomi = products.map((products) => products.name);
// console.log(productsNomi);

//14-misol

// let products = [
//   { id: 3, name: "Tablet", price: 750, rating: 4.3, discount: 15 },
//   { id: 1, name: "Laptop", price: 1000, rating: 4.5, discount: 10 },
//   { id: 4, name: "Monitor", price: 300, rating: 4.6, discount: 20 },
//   { id: 2, name: "Phone", price: 500, rating: 4.7, discount: 5 },
// ];
// let idsi = products.find((products) => products.id == 5);
// if (idsi) {
//   console.log(idsi.name);
// } else {
//   console.log("bunday id mavjud emas");
// }

//15-misol
// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
// ];

// let ochirishproducts = products.filter((products) => products.id !== 4);
// console.log(ochirishproducts);

//16-misol

// let soz = "Salom sizga";
// let faqatharflar = soz
//   .split("")
//   .every(
//     (harf) => (harf >= "A" && harf <= "Z") || (harf >= "a" && harf <= "z")
//   );
// console.log(faqatharflar);

//17-misol
// function getTruthyFalsy(arr) {
//   return {
//     truthy: arr.filter((item) => item),
//     falsy: arr.filter((item) => !item),
//   };
// }
// let kiritilganMassiv = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// let result = getTruthyFalsy(kiritilganMassiv);
// console.log(result);

//18-misol
// function harflarSoni(arr) {
//   return arr
//     .map((item) =>
//       item
//         .split(" ")
//         .map(
//           (soz) => soz.split("").filter((harf) => /[a-zA-Z]/.test(harf)).length
//         )
//     )
//     .flat();
// }

// let kiritilganArray = ["Men Abdulaziz Programmerman"];
// let result = harflarSoni(kiritilganArray);
// console.log(result);

//19-misol
// function boshJoyBormi(satr) {
//   return satr.split("").some((harf) => harf === " ");
// }

// let kiritilganSatr = "Men Abdulaziz Programmerman";
// let result = boshJoyBormi(kiritilganSatr);
// console.log(result);

//20-misol
// function objectKalitvaQiymati(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value);
// }

// let obj = { a: 2, b: 5, c: 7 };
// let result = objectKalitvaQiymati(obj);
// console.log(result);

//21-misol
// function digitSum(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return (n % 10) + digitSum(Math.floor(n / 10));
// }
// let number = prompt("son kiriting");
// let result = digitSum(number);
// console.log(result);

//22-misol
// function ortachaFoizi(oquvchilar) {
//   let jamiFoiz = oquvchilar.reduce((acc, oquvchi) => acc + oquvchi.percent, 0);
//   return jamiFoiz / oquvchilar.length;
// }
// let pupils = [
//   { name: "Ali", percent: 85 },
//   { name: "Vali", percent: 92 },
//   { name: "Zuhra", percent: 78 },
//   { name: "Bekzod", percent: 88 },
// ];
// let result = ortachaFoizi(pupils);
// console.log(result);

//23-misol

// let students = [
//   { name: "Ali", percent: 85 },
//   { name: "Vali", percent: 92 },
//   { name: "Zuhra", percent: 78 },
//   { name: "Bekzod", percent: 88 },
// ];

// let yangilanganOquvchilar = students.map((student) => ({
//   ...student,
//   grade:
//     student.percent >= 90
//       ? 5
//       : student.percent >= 80
//       ? 4
//       : student.percent >= 70
//       ? 3
//       : 2,
// }));

// function getNamesByGrade(students, grade) {
//   return students
//     .filter((student) => student.grade === grade)
//     .map((student) => student.name);
// }

// let result = getNamesByGrade(yangilanganOquvchilar, 5);
// console.log(result);

//24-misol

// let students = [
//   { name: "Ali", percent: 85 },
//   { name: "Vali", percent: 92 },
//   { name: "Zuhra", percent: 78 },
//   { name: "Bekzod", percent: 68 },
// ];

// let yangiOquvchilar = students.map((student) => ({
//   ...student,
//   isPassed: student.percent >= 70,
// }));

// console.log(yangiOquvchilar);

//25-misol
// const oquvchilar = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];

// const result = oquvchilar.reduce(
//   (acc, pupil) => {
//     if (pupil.protcent >= 70) {
//       acc.passed += 1;
//     } else {
//       acc.failed += 1;
//     }
//     return acc;
//   },
//   { passed: 0, failed: 0 }
// );

// console.log(`O'tganlar: ${result.passed}, O'tmaganlar: ${result.failed}`);
