import Comp01 from "./Comp01";
import Comp02 from "./Comp02";

export default function App(props) {
  // props is an object that contains all the properties passed to the component and its is not compulsory to use props as the name you can name anything you want
  return (
    <>
      <div>
        <h1>Welcome to {props.name} Props App</h1>
        <p>this is a version {props.ver} of the App.</p>
      </div>

      <div>
        <h2>Student Details</h2>
        <Comp01 stu={{ name: "Aditya Kumar", roll: "002", age: 20 }} />
        <Comp01
          stu={{
            name: "Addy",
            roll: "001",
            age: 18,
          }}/>
        {/* here we are passing an object as a prop to the Comp01 component and we can access it in the Comp01 component using props.stu.name, props.stu.roll and props.stu.age */}
      </div>

      <div>
      <Comp02 stu={{ name: "Shayam", roll: "89", age: 22 }} />
      </div>
    </>
  );
}
