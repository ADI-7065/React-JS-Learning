setTimeout(() => {
    console.log("This is a message after 3 seconds");
}, 3000);

function greet(name) {
    console.log(`Hello, ${name}!`);
}
setTimeout(greet, 2000, "Aditya");