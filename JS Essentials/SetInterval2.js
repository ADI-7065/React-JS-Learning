var i = setInterval(() => {
  console.log("Hello Aditya");
}, 2000);

setTimeout(() => {
  clearInterval(i);
  console.log("Interval is cleared");
}, 10000);
