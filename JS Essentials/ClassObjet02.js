class person {
  constructor(name, age) { // constructor is a special method that is called when an object is created -> it is a  parametrized conductor
    this.name = name;
    this.age = age;
  }
  show() {
    return "name: " + this.name + " age: " + this.age;
  }
}

let p1 = new person("Aditya", 21);
console.log(p1);
console.log(p1.name); //Aditya
console.log(p1.age); //21
console.log(p1.show()); // Aditya 21

let p2 = new person("Rahul", 25);
console.log(p2);
console.log(p2.name); //Rahul
console.log(p2.age); //25
console.log(p2.show()); // Rahul 25
