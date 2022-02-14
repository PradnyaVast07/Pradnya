const obj = {
  name: "Pradnya",
  getName: function () {
    return this.name;
  },
};
let result = obj;
console.log(result);

const obj1 = {
  name: "Pallvi",
  age: 4,
  __proto__: obj,
};

console.log(obj1.getName());
