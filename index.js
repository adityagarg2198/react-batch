// function print(){
//     console.log('hello world');
// }
// print();
// arrow functions / fat arrow functions
// const print = (name, name2) => {
//   console.log("hello", name, name2);
// };
// print("Aditya", "");

// const sum = (a, b) => {
//   const addition = a + b;
//   return addition;
// };
// const result=sum(5,7);
// console.log(result);

// const array = ["Mon", "Tues", "Wed"];
// console.log(array[0]);
// const obj = {
//   Mon: "Mon",
//   Tues: "Tues",
//   Wed: "Wed",
// };
// console.log(obj.Mon)

// const user = {
//   name: "Test",
//   age: 76,
//   mobile: 909090909,
//   address: "delhi",
//   documents: {
//     doc1: "adharCard",
//     doc2: "pan card",
//     doc3: {},
//   },
//   hobbies: ["cricket", "singing"],
// };
// // object destructure
// const { name, mobile, age, address, documents, hobbies } = user;
// const { doc1, doc2, doc3 } = documents;
// console.log(name);
// console.log(user.documents.doc1);
// console.log(doc1);
// console.log(age);
// keys
// console.log(Object.keys(user))

// //values
// console.log(Object.values(user));

// // entries
// console.log(Object.entries(user));

// const name='aditya';
// const lastName='garg';
// const age=56;
// console.log(name);
// console.log(lastName);
// const fullName=name+' ' +lastName+' '+'my age is'+' '+age;
// const templateName=`${name} ${lastName} my age is ${age}`
// console.log(fullName);
// console.log(templateName);

// let a=0;
// const b=1;
// a=65;
// console.log(a);
// b=2
// console.log(b);
// var c=2;

const array1 = [0, 1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1, 90];
console.log(array3);
