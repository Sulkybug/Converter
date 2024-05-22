import { useState } from "react";
import Converter from "./Components/Converter";
import "./App.css";
import Select from "react-select";

function App() {
  const [unit, setUnit] = useState("");
  const handleChangeUnit = (e) => {
    setUnit(e.value);
  };

  const optionType = [
    { value: "Temperature", label: "Temperature" },
    { value: "Speed", label: "Speed" },
    { value: "Length", label: "Length" },
  ];

  return (
    <div className="App">
      <h1>Converter</h1>
      <Select
        className="unitBox"
        options={optionType}
        onChange={handleChangeUnit}
        placeholder="Select Unit"
      />
      <Converter unit={unit} />
    </div>
  );
}

export default App;
