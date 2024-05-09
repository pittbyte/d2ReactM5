class Car extends React.Component {
  constructor(props) {
    super(props); { /*access methods or properties from the parent class use super    */}
    this.state = {
      // add variables here
      brand: "Ford",
      model: "Mustang ",
      color: "red ",
      year: 1964,
    };
  }
  render() {
    return (
      // render variables here
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model} from {this.state.year}.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById("root"));
