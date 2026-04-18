function greet(name, cb) {
  console.log("Hi " + name);
  cb(name);
}
function sayBye(name) {
  console.log("Bye! " + name);
}
function sayTata(name) {
  console.log("Tata! " + name);
}

greet("Aditya", sayBye);
greet("Adi", sayTata);
greet("Addy", sayBye);
