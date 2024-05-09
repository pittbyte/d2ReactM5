//functional example and adding Events
function clickbutton() {
  alert("Clicked!!!!!!");
}
const myelement = ( <button onClick={clickbutton}>Click the Button!</button>

);
ReactDOM.render(myelement, document.getElementById("root"));
