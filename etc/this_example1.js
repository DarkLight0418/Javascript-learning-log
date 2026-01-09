// Wenivooks JavaScript 베이스캠프

function f1() {
  console.log(this);
}

f1();

const obj = {
  f2: function () {
    const ff = () => {
      console.log(this);
    };
    ff();

    const fff = function () {
      console.log(this);
    };
    fff();
  },
};

obj.f2();


const obj2 = {
  name: 'licat',
  f: function () {
    console.log(this);
  },
};

obj2.f();

function Person(name) {
  this.name = name;
  console.log(this);
}

const person1 = new Person('licat');
const person2 = new Person('mura');
const value = Person('test');

console.log(person1.name);
