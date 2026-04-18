import DataFetch from "./useEffect/DataFetch";
import DataFetch2 from "./useEffect/DataFetch2";
import ClickCounter from "./useRef/ClickCounter";
import FocusInput from "./useRef/FocusInput";
import ParaDelete from "./useRef/ParaDelete";
import WithMemo from "./useMemo/WithMemo";
import WithoutMemo from "./useMemo/WithoutMemo";
import WithCallback from "./useCallback/WithCallback";
import WithoutCallback from "./useCallback/WithoutCallback";
import UseIdEx from "./useId/useId";

export default function App() {
  return (
    <div className="m-4 p-4 ">
      {/* <div className="text-center mb-4">
        <h1 className="fw-bold">Hello, this side Aditya!!</h1>
        <p className="text-muted">Hooks Demo React</p>
      </div>

      <div className="card-body">
        <h2 className="card-title text-black mb-3">UseEffect</h2>
        <h3 className="card-title text-primary mb-3">Single User Fetch</h3>
        <DataFetch />
        <h3 className="card-title text-success mb-3">Multiple Users Fetch</h3>
        <DataFetch2 />
        <hr />
      </div>

      <div className="card-body">
        <h2 className="card-title text-black mb-3">UseRef</h2>
        <ClickCounter />
        <FocusInput />
        <ParaDelete />
        <hr />
      </div>

      <div className="card-body">
        <h2 className="card-title text-black mb-3">UseMemo</h2>
        <WithoutMemo />
        <WithMemo />
        <hr />
      </div> */}

      <div className="card-body">
        <h2 className="card-title text-black mb-3">UseCallback</h2>
        <WithoutCallback />
        <WithCallback />
        <hr />
      </div>

      {/* <div className="card-body">
        <h2 className="card-title text-black mb-3">UseId</h2>
        <UseIdEx />
      </div> */}
    </div>
  );
}
