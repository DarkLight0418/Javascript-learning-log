let x = 5;
let y = '7';

console.log(x + y);

let person = {
  name: 'John',
  age: 29,
  city: 'New York',
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}