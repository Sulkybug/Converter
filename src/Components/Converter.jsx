import React, { useState, useEffect } from "react";
import Select from "react-select";
import { optionTemperature } from "../magnitudes/optionTemperature";
import { optionSpeed } from "../magnitudes/optionSpeed";
import { optionLength } from "../magnitudes/optionLength";
import { Temperature_formulas } from "../formulas/temperature/temperature_formulas";
import { Speed_formulas } from "../formulas/speed/speed_formulas";
import { Length_formulas } from "../formulas/length/length_formulas";

const Converter = ({ unit }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [valueDrop1, setvalueDrop1] = useState("");
  const [valueDrop2, setvalueDrop2] = useState("");
  const [formula, setFormula] = useState("");

  const onInput1 = (e) => {
    const value = Number(e.currentTarget.value);
    let converter = validateUnit(value);
    setInput1(value);
    setInput2(converter.convert(valueDrop1, valueDrop2));
  };

  const onInput2 = (e) => {
    const value = Number(e.currentTarget.value);
    let converter = validateUnit(value);
    setInput2(value);
    setInput1(converter.convert(valueDrop2, valueDrop1));
  };

  const selectHandleChangeOne = (e) => {
    setvalueDrop1(e.value);

    if (input1 != "" && input2 != "") {
      let converter = validateUnit(input1);
      setInput2(converter.convert(e.value, valueDrop2));
    }

    let formulaDescription = validateUnit();
    setFormula(formulaDescription.formulas(e.value, valueDrop2));
  };

  const selectHandleChangeTwo = (e) => {
    setvalueDrop2(e.value);

    if (input1 != "" && input2 != "") {
      let converter = validateUnit(input1);
      setInput2(converter.convert(valueDrop1, e.value));
    }

    let formulaDescription = validateUnit();
    setFormula(formulaDescription.formulas(valueDrop1, e.value));
  };

  const validateUnit = (value) => {
    let converter = "";
    if (unit == "Temperature") {
      return (converter = new Temperature_formulas(value));
    } else if (unit == "Speed") {
      return (converter = new Speed_formulas(value));
    } else if (unit == "Length") {
      return (converter = new Length_formulas(value));
    }
  };

  function getRandomValue(option) {
    let x = "";
    if (option === "optionTemperature") {
      x = optionTemperature;
    } else if (option === "optionSpeed") {
      x = optionSpeed;
    } else {
      x = optionLength;
    }

    let result = "";
    const values = Object.values(x);
    result = values[Math.floor(Math.random() * values.length)];
    selectHandleChangeTwo(result);
    return result;
  }

  const getMagnitudeOptions = (unit) => {
    switch (unit) {
      case "Temperature":
        return optionTemperature;
      case "Speed":
        return optionSpeed;
      case "Length":
        return optionLength;
      default:
        return "";
    }
  };

  useEffect(() => {
    setInput1("");
    setInput2("");
    setvalueDrop1("");
    setvalueDrop2("");
    setFormula("");
  }, [unit]);

  return (
    <div>
      <div className="myBody">
        <div className="box1">
          <input
            type="number"
            onChange={onInput1}
            value={input1}
            placeholder="0"
            className="entry1"
          />
          <Select
            options={getMagnitudeOptions(unit)}
            onChange={selectHandleChangeOne}
            placeholder="Select..  ▼"
            value={
              valueDrop1 == "" && valueDrop2 == ""
                ? "Select..  ▼"
                : { value: valueDrop1, label: valueDrop1 }
            }
          />
        </div>
        <div className="box2">
          <input
            type="number"
            onChange={onInput2}
            value={input2}
            placeholder="0"
            className="entry2"
          />
          <Select
            options={getMagnitudeOptions(unit)}
            value={
              valueDrop1 === valueDrop2 && valueDrop2 != ""
                ? getRandomValue(`option${unit}`)
                : valueDrop2 === ""
                ? ""
                : { value: valueDrop2, label: valueDrop2 }
            }
            placeholder="Select..  ▼"
            onChange={selectHandleChangeTwo}
          />
        </div>
      </div>
      <p className="formula">{formula}</p>
    </div>
  );
};

export default Converter;
