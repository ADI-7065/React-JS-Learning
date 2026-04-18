class person {
  constructor() { // constructor is a special method that is called when an object is created -> it is a non parametrized conductor
    this.name = "Aditya";
    this.age = 21;
  }
  show() {
    return this.name + " " + this.age;
  }
}

let p1 = new person();
console.log(p1);
console.log(p1.name); //Aditya
console.log(p1.age); //21
console.log(p1.show()); // Aditya 21

let p2 = new person();
console.log(p2);
console.log(p2.name); //Aditya
console.log(p2.age); //21
console.log(p2.show()); // Aditya 21