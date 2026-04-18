function Comp01(props) {
  return (
    <div>
      <hr />
      <p><b>Name:</b> {props.stu.name}</p>
      <p><b>Roll No:</b> {props.stu.roll}</p>
      <p><b>Age:</b> {props.stu.age}</p>
    </div>
  );
}

export default Comp01;

//Or

// const Comp01 = (props) => {
//   return (
//     <div>
//         <hr />
//         <p><b>Name:</b> {props.stu.name}</p>
//         <p><b>Roll No:</b> {props.stu.roll}</p>
//         <p><b>Age:</b> {props.stu.age}</p>
//       </div>
//   );
// }
// export default Comp01;
