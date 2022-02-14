var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.nationality = "Marathi";
  this.getInfo = function () {
    console.log(this.firstName + "" + this.lastName);
  };
};
Person.prototype.nationality = function () {
  console.log(`nationality of ${firstName} is ${person.nationality}`);
};
var person = new Person("Pradnya", "Bedse");
person.getInfo;

person.nationality = "India";
var person1 = new Person("Pallavi", "Deore");
person1.getInfo;
