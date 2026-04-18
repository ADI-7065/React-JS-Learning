import { useId } from "react";

function UseIdEx() {
  const id1 = useId(); // unique & stable
  const id2 = useId(); // unique & stable
  return (
    <div>
      <h3>Ids:</h3>
      <p>{id1}</p>
      <p>{id2}</p>
    </div>
  );
}

export default UseIdEx;
