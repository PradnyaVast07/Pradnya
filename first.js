function Person(obj) {
  this.name = obj.name;
  this.lname = obj.lname;
}
let obj = {
  name: "Pradnya",
  lname: "Bedse",
};
let person = new Person(obj);
console.log(person);
