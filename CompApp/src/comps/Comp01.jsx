// import Comp02 from "./Comp02.jsx";

function Comp01() {
  const a = 2;
  let b;

  if (a > 0) {
    b = "India";
  } else {
    b = "Incapp";
  }

  return (
    <>
      <hr />
      <h3>B = {b}</h3>
      <h3>B = {a > 0 ? "India" : "Incapp"}</h3>

      <a href="#">Link-01</a>
      &nbsp;&nbsp;
      {/* This is a non-breaking space character to add some space between the links */}
      <a href="#">Link-02</a>
      
      {/* <Comp02 /> */}
    </>
  );
}
export default Comp01;
