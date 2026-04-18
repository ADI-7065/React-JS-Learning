class Comp02 extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <p>
          <b>Name:</b> {this.props.stu.name}
        </p>
        <p>
          <b>Roll No:</b> {this.props.stu.roll}
        </p>
        <p>
          <b>Age:</b> {this.props.stu.age}
        </p>
      </div>
    );
  }
}

export default Comp02;
