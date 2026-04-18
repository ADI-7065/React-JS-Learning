import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null); // Step 1: Create a ref
  return (
    <div>
      {/* Step 2: Attach ref to the element */}
      <div className="d-flex align-items-center p-2">
        <input className="me-2" type="text" placeholder="Type here..." />
        <input
          className="me-2"
          ref={inputRef}
          id="a"
          type="text"
          placeholder="Type here..."
        />
        <input className="me-2" type="text" placeholder="Type here..." />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            inputRef.current.focus(); // Step 3: Use .current to access DOM element
            inputRef.current.placeholder = "Hello Incapp";
          }}
        >
          Focus the input
        </button>
      </div>

      {/* Alternative using document.getElementById (JavaScript)*/}
      {/* <button
        className="btn btn-primary btn-sm mt-2 me-2"
        onClick={() => {
          var a = document.getElementById("a");
          a.focus();
          a.placeholder = "Hello Incapp";
        }}
      >
        Focus the input
      </button> */}
    </div>
  );
}

export default FocusInput;

// Step-by-step of what's happening

// On first render → inputRef.current is null.
// After render, React sees ref={inputRef} on <input> and assigns:
// inputRef.current = HTMLInputElementObject;
// Now inputRef.current is a direct reference to that <input> element.
// When you click the button:
// inputRef.current.focus() → focuses the input box.
// inputRef.current.value → gets whatever the user typed.
