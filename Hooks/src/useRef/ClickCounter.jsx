import { useState, useRef } from 'react';

//useref is used to store mutable values that do not cause re-render when updated. It can also be used to access DOM elements directly.

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  refCount.current += 1; // Changes won't cause re-render

  return (
    <div >
      <h2>useRef Render Count Example</h2>
      <p>Count: {count}</p>
      <p>Render Count: {refCount.current}</p>
      <button className="btn btn-primary btn-sm" onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
