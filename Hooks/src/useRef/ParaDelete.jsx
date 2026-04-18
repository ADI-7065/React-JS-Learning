import { useEffect, useRef } from "react";

export default function ParaDelete() {
  const a = useRef(null);
  const intervalRef = useRef(null);

  return (
    <div>
      <p>This is Rahul Chauhan.</p>
      <p ref={a}>Lorem ipsum dolor sit amet.</p>
      <p>I love my INDIA</p>
      <button
        className="btn btn-primary btn-sm mt-2 me-2"
        onClick={() => {
          a.current.innerHTML = "";
        }}
      >
        Delete
      </button>
      <button
        className="btn btn-primary btn-sm mt-2 me-2"
        onClick={() => {
          var c = 0;
          setInterval(() => {
            c++;
            a.current.innerHTML = c;
          }, 1000);
        }}
      >
        Start Counter
      </button>
    </div>
  );
}
