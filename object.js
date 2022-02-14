// function createPerson(...props) {
//   let person = {
//     name: props[0],
//     age: props[1],
//   };
//   return person;
// }
// let obj = createPerson("komal", 12);
// console.log(obj);

// function createPerson(...props) {
//   for (let arg of props) {
//     console.log(arg);
//   }
// }

// createPerson("Komal", 12);

// createPerson = (Person) => {
//   return {
//     name: Person.name,
//     age: Person.age,
//   };
// };
// Person = {
//   name: "Komal",
//   age: 12,
// };
// console.log(createPerson(Person));

// let name = "Komal";
// let age = 12;
// const createPerson = {
//   name: name,
//   age: age,
// };

// console.log(createPerson);

//object literal shorthand
let name = "Komal";
let age = 12;
const createPerson = {
  name,
  age,
};

console.log(createPerson);
