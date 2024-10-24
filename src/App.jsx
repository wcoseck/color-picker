import { useState } from "react";

const Color = (props) => {
  return (
    <div
      className={props.color}
      onClick={() => props.setSelectedColor(props.color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor, selected] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}> {selectedColor}</div>{" "}
      </div>
      <div id="colors-list">{}</div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="orange" setSelectedColor={setSelectedColor} />
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
        <Color color="white" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
