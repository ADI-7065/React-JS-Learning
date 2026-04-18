function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer(); // closure is created here, counter has access to count variable because
counter(); // 1
counter(); // 2
counter(); // 3
