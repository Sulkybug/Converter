import React, { useState, useCallback } from "react";
import Select from "react-select";
import { optionTemperature } from "./magnitudes/optionTemperature";
import { optionSpeed } from "./magnitudes/optionSpeed";
import { optionLength } from "./magnitudes/optionLength";

const Converter = ({ unit }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [valueDrop1, setvalueDrop1] = useState("");
  const [valueDrop2, setvalueDrop2] = useState("");
  const [formula, setFormula] = useState("");

  const onInput1 = (e) => {
    const value = Number(e.currentTarget.value);
    console.log(valueDrop1);
    setInput1(value);
    setInput2(
      valueDrop1 === "Celcius" && valueDrop2 === "Kelvin"
        ? value + 273.15
        : valueDrop1 === "Kelvin" && valueDrop2 === "Celcius"
        ? value - 273.15
        : valueDrop1 === "Celcius" && valueDrop2 === "Fahrenheit"
        ? (value * (9 / 5) + 32).toFixed(2)
        : valueDrop2 === "Celcius" && valueDrop1 === "Fahrenheit"
        ? ((value - 32) * (5 / 9)).toFixed(2)
        : valueDrop1 === "Kelvin" && valueDrop2 === "Fahrenheit"
        ? ((value - 273.15) * (9 / 5) + 32).toFixed(2)
        : valueDrop2 === "Kelvin" && valueDrop1 === "Fahrenheit"
        ? ((value - 32) * (5 / 9) + 273.15).toFixed(2)
        : valueDrop1 === "Kilometer/Hour" && valueDrop2 === "Meter/Second"
        ? (value / 3.6).toFixed(2)
        : valueDrop2 === "Kilometer/Hour" && valueDrop1 === "Meter/Second"
        ? (value * 3.6).toFixed(2)
        : valueDrop1 === "Kilometer/Hour" && valueDrop2 === "Knot"
        ? (value / 1.852).toFixed(2)
        : valueDrop2 === "Kilometer/Hour" && valueDrop1 === "Knot"
        ? (value * 1.852).toFixed(2)
        : valueDrop1 === "Kilometer/Hour" && valueDrop2 === "Mile/Hour"
        ? (value / 1.609).toFixed(2)
        : valueDrop2 === "Kilometer/Hour" && valueDrop1 === "Mile/Hour"
        ? (value * 1.609).toFixed(2)
        : valueDrop1 === "Meter/Second" && valueDrop2 === "Knot"
        ? (value * 1.944).toFixed(2)
        : valueDrop2 === "Meter/Second" && valueDrop1 === "Knot"
        ? (value / 1.944).toFixed(2)
        : valueDrop1 === "Meter/Second" && valueDrop2 === "Mile/Hour"
        ? (value * 2.237).toFixed(2)
        : valueDrop2 === "Meter/Second" && valueDrop1 === "Mile/Hour"
        ? (value / 2.237).toFixed(2)
        : valueDrop1 === "Knot" && valueDrop2 === "Mile/Hour"
        ? (value * 1.151).toFixed(2)
        : valueDrop2 === "Knot" && valueDrop1 === "Mile/Hour"
        ? (value / 1.151).toFixed(2)
        : valueDrop1 === "Kilometer" && valueDrop2 === "Meter"
        ? value * 1000
        : valueDrop2 === "Kilometer" && valueDrop1 === "Meter"
        ? value / 1000
        : valueDrop1 === "Kilometer" && valueDrop2 === "Centimeter"
        ? value * 100000
        : valueDrop2 === "Kilometer" && valueDrop1 === "Centimeter"
        ? value / 100000
        : valueDrop1 === "Kilometer" && valueDrop2 === "Milimeter"
        ? value * 1000000
        : valueDrop2 === "Kilometer" && valueDrop1 === "Milimeter"
        ? value / 1000000
        : valueDrop1 === "Kilometer" && valueDrop2 === "Mile"
        ? (value / 1.609).toFixed(2)
        : valueDrop2 === "Kilometer" && valueDrop1 === "Mile"
        ? (value * 1.609).toFixed(2)
        : valueDrop1 === "Kilometer" && valueDrop2 === "Foot"
        ? value * 3281
        : valueDrop2 === "Kilometer" && valueDrop1 === "Foot"
        ? value / 3281
        : valueDrop1 === "Kilometer" && valueDrop2 === "Inch"
        ? value * 39370
        : valueDrop2 === "Kilometer" && valueDrop1 === "Inch"
        ? value / 39370
        : valueDrop1 === "Kilometer" && valueDrop2 === "Yard"
        ? (value * 1093.61).toFixed(2)
        : valueDrop2 === "Kilometer" && valueDrop1 === "Yard"
        ? (value / 1093.61).toFixed(4)
        : valueDrop1 === "Meter" && valueDrop2 === "Centimeter"
        ? value * 100
        : valueDrop2 === "Meter" && valueDrop1 === "Centimeter"
        ? value / 100
        : valueDrop1 === "Meter" && valueDrop2 === "Milimeter"
        ? value * 1000
        : valueDrop2 === "Meter" && valueDrop1 === "Milimeter"
        ? value / 1000
        : valueDrop1 === "Meter" && valueDrop2 === "Mile"
        ? (value / 1609).toFixed(3)
        : valueDrop2 === "Meter" && valueDrop1 === "Mile"
        ? value * 1609
        : valueDrop1 === "Meter" && valueDrop2 === "Foot"
        ? (value * 3.281).toFixed(2)
        : valueDrop2 === "Meter" && valueDrop1 === "Foot"
        ? (value / 3.281).toFixed(2)
        : valueDrop1 === "Meter" && valueDrop2 === "Inch"
        ? (value * 39.37).toFixed(2)
        : valueDrop2 === "Meter" && valueDrop1 === "Inch"
        ? (value / 39.37).toFixed(3)
        : valueDrop1 === "Meter" && valueDrop2 === "Yard"
        ? (value * 1.094).toFixed(2)
        : valueDrop2 === "Meter" && valueDrop1 === "Yard"
        ? (value / 1.094).toFixed(2)
        : valueDrop1 === "Centimeter" && valueDrop2 === "Milimeter"
        ? value * 10
        : valueDrop2 === "Centimeter" && valueDrop1 === "Milimeter"
        ? value / 10
        : valueDrop1 === "Centimeter" && valueDrop2 === "Mile"
        ? (value / 160900).toFixed(6)
        : valueDrop2 === "Centimeter" && valueDrop1 === "Mile"
        ? value * 160900
        : valueDrop1 === "Centimeter" && valueDrop2 === "Foot"
        ? (value / 30.48).toFixed(2)
        : valueDrop2 === "Centimeter" && valueDrop1 === "Foot"
        ? (value * 30.48).toFixed(2)
        : valueDrop1 === "Centimeter" && valueDrop2 === "Inch"
        ? (value / 2.54).toFixed(2)
        : valueDrop2 === "Centimeter" && valueDrop1 === "Inch"
        ? (value * 2.54).toFixed(2)
        : valueDrop1 === "Centimeter" && valueDrop2 === "Yard"
        ? (value / 91.44).toFixed(2)
        : valueDrop2 === "Centimeter" && valueDrop1 === "Yard"
        ? (value * 91.44).toFixed(2)
        : valueDrop1 === "Milimeter" && valueDrop2 === "Mile"
        ? value / 1.609e6
        : valueDrop2 === "Milimeter" && valueDrop1 === "Mile"
        ? value * 1.609e6
        : valueDrop1 === "Milimeter" && valueDrop2 === "Foot"
        ? (value / 304.8).toFixed(3)
        : valueDrop2 === "Milimeter" && valueDrop1 === "Foot"
        ? (value * 304.8).toFixed(2)
        : valueDrop1 === "Milimeter" && valueDrop2 === "Inch"
        ? (value / 25.4).toFixed(2)
        : valueDrop2 === "Milimeter" && valueDrop1 === "Inch"
        ? (value * 25.4).toFixed(2)
        : valueDrop1 === "Milimeter" && valueDrop2 === "Yard"
        ? (value / 914.4).toFixed(3)
        : valueDrop2 === "Milimeter" && valueDrop1 === "Yard"
        ? (value * 914.4).toFixed(2)
        : valueDrop1 === "Mile" && valueDrop2 === "Foot"
        ? value * 5280
        : valueDrop2 === "Mile" && valueDrop1 === "Foot"
        ? (value / 5280).toFixed(4)
        : valueDrop1 === "Mile" && valueDrop2 === "Inch"
        ? value * 63360
        : valueDrop2 === "Mile" && valueDrop1 === "Inch"
        ? (value / 63360).toFixed(5)
        : valueDrop1 === "Mile" && valueDrop2 === "Yard"
        ? value * 1760
        : valueDrop2 === "Mile" && valueDrop1 === "Yard"
        ? (value / 1760).toFixed(4)
        : valueDrop1 === "Foot" && valueDrop2 === "Inch"
        ? value * 12
        : valueDrop2 === "Foot" && valueDrop1 === "Inch"
        ? (value / 12).toFixed(2)
        : valueDrop1 === "Foot" && valueDrop2 === "Yard"
        ? (value / 3).toFixed(2)
        : valueDrop2 === "Foot" && valueDrop1 === "Yard"
        ? value * 3
        : valueDrop1 === "Inch" && valueDrop2 === "Yard"
        ? (value / 36).toFixed(2)
        : valueDrop2 === "Inch" && valueDrop1 === "Yard"
        ? value * 36
        : ""
    );
  };

  const onInput2 = (e) => {
    const value = Number(e.currentTarget.value);
    console.log(valueDrop2);
    setInput2(value);
    setInput1(
      valueDrop1 === "Celcius" && valueDrop2 === "Kelvin"
        ? value - 273.15
        : valueDrop1 === "Kelvin" && valueDrop2 === "Celcius"
        ? value + 273.15
        : valueDrop1 === "Celcius" && valueDrop2 === "Fahrenheit"
        ? ((value - 32) * (5 / 9)).toFixed(2)
        : valueDrop2 === "Celcius" && valueDrop1 === "Fahrenheit"
        ? (value * (9 / 5) + 32).toFixed(2)
        : valueDrop1 === "Kelvin" && valueDrop2 === "Fahrenheit"
        ? ((value - 32) * (5 / 9) + 273.15).toFixed(2)
        : valueDrop2 === "Kelvin" && valueDrop1 === "Fahrenheit"
        ? ((value - 273.15) * (9 / 5) + 32).toFixed(2)
        : valueDrop1 === "Kilometer/Hour" && valueDrop2 === "Meter/Second"
        ? (value * 3.6).toFixed(2)
        : valueDrop2 === "Kilometer/Hour" && valueDrop1 === "Meter/Second"
        ? (value / 3.6).toFixed(2)
        : valueDrop1 === "Kilometer/Hour" && valueDrop2 === "Knot"
        ? (value * 1.852).toFixed(2)
        : valueDrop2 === "Kilometer/Hour" && valueDrop1 === "Knot"
        ? (value / 1.852).toFixed(2)
        : valueDrop1 === "Kilometer/Hour" && valueDrop2 === "Mile/Hour"
        ? (value * 1.609).toFixed(2)
        : valueDrop2 === "Kilometer/Hour" && valueDrop1 === "Mile/Hour"
        ? (value / 1.609).toFixed(2)
        : valueDrop1 === "Meter/Second" && valueDrop2 === "Knot"
        ? (value / 1.944).toFixed(2)
        : valueDrop2 === "Meter/Second" && valueDrop1 === "Knot"
        ? (value * 1.944).toFixed(3)
        : valueDrop1 === "Meter/Second" && valueDrop2 === "Mile/Hour"
        ? (value / 2.237).toFixed(2)
        : valueDrop2 === "Meter/Second" && valueDrop1 === "Mile/Hour"
        ? (value * 2.237).toFixed(2)
        : valueDrop1 === "Knot" && valueDrop2 === "Mile/Hour"
        ? (value / 1.151).toFixed(2)
        : valueDrop2 === "Knot" && valueDrop1 === "Mile/Hour"
        ? (value * 1.151).toFixed(2)
        : valueDrop1 === "Kilometer" && valueDrop2 === "Meter"
        ? value / 1000
        : valueDrop2 === "Kilometer" && valueDrop1 === "Meter"
        ? value * 1000
        : valueDrop1 === "Kilometer" && valueDrop2 === "Centimeter"
        ? value / 100000
        : valueDrop2 === "Kilometer" && valueDrop1 === "Centimeter"
        ? value * 100000
        : valueDrop1 === "Kilometer" && valueDrop2 === "Milimeter"
        ? value / 1000000
        : valueDrop2 === "Kilometer" && valueDrop1 === "Milimeter"
        ? value * 1000000
        : valueDrop1 === "Kilometer" && valueDrop2 === "Mile"
        ? (value * 1.609).toFixed(2)
        : valueDrop2 === "Kilometer" && valueDrop1 === "Mile"
        ? (value / 1.609).toFixed(2)
        : valueDrop1 === "Kilometer" && valueDrop2 === "Foot"
        ? value / 3281
        : valueDrop2 === "Kilometer" && valueDrop1 === "Foot"
        ? value * 3281
        : valueDrop1 === "Kilometer" && valueDrop2 === "Inch"
        ? value / 39370
        : valueDrop2 === "Kilometer" && valueDrop1 === "Inch"
        ? value * 39370
        : valueDrop1 === "Kilometer" && valueDrop2 === "Yard"
        ? (value / 1093.61).toFixed(3)
        : valueDrop2 === "Kilometer" && valueDrop1 === "Yard"
        ? (value * 1093.61).toFixed(2)
        : valueDrop1 === "Meter" && valueDrop2 === "Centimeter"
        ? value / 100
        : valueDrop2 === "Meter" && valueDrop1 === "Centimeter"
        ? value * 100
        : valueDrop1 === "Meter" && valueDrop2 === "Milimeter"
        ? value / 1000
        : valueDrop2 === "Meter" && valueDrop1 === "Milimeter"
        ? value * 1000
        : valueDrop1 === "Meter" && valueDrop2 === "Mile"
        ? value * 1609
        : valueDrop2 === "Meter" && valueDrop1 === "Mile"
        ? (value / 1609).toFixed(3)
        : valueDrop1 === "Meter" && valueDrop2 === "Foot"
        ? (value / 3.281).toFixed(2)
        : valueDrop2 === "Meter" && valueDrop1 === "Foot"
        ? (value * 3.281).toFixed(2)
        : valueDrop1 === "Meter" && valueDrop2 === "Inch"
        ? (value / 39.37).toFixed(2)
        : valueDrop2 === "Meter" && valueDrop1 === "Inch"
        ? (value * 39.37).toFixed(3)
        : valueDrop1 === "Meter" && valueDrop2 === "Yard"
        ? (value / 1.094).toFixed(2)
        : valueDrop2 === "Meter" && valueDrop1 === "Yard"
        ? (value * 1.094).toFixed(2)
        : valueDrop1 === "Centimeter" && valueDrop2 === "Milimeter"
        ? value / 10
        : valueDrop2 === "Centimeter" && valueDrop1 === "Milimeter"
        ? value * 10
        : valueDrop1 === "Centimeter" && valueDrop2 === "Mile"
        ? value * 160900
        : valueDrop2 === "Centimeter" && valueDrop1 === "Mile"
        ? (value / 160900).toFixed(6)
        : valueDrop1 === "Centimeter" && valueDrop2 === "Foot"
        ? (value * 30.48).toFixed(2)
        : valueDrop2 === "Centimeter" && valueDrop1 === "Foot"
        ? (value / 30.48).toFixed(2)
        : valueDrop1 === "Centimeter" && valueDrop2 === "Inch"
        ? (value * 2.54).toFixed(2)
        : valueDrop2 === "Centimeter" && valueDrop1 === "Inch"
        ? (value / 2.54).toFixed(2)
        : valueDrop1 === "Centimeter" && valueDrop2 === "Yard"
        ? (value * 91.44).toFixed(2)
        : valueDrop2 === "Centimeter" && valueDrop1 === "Yard"
        ? (value / 91.44).toFixed(2)
        : valueDrop1 === "Milimeter" && valueDrop2 === "Mile"
        ? value * 1.609e6
        : valueDrop2 === "Milimeter" && valueDrop1 === "Mile"
        ? value / 1.609e6
        : valueDrop1 === "Milimeter" && valueDrop2 === "Foot"
        ? (value * 304.8).toFixed(2)
        : valueDrop2 === "Milimeter" && valueDrop1 === "Foot"
        ? (value / 304.8).toFixed(3)
        : valueDrop1 === "Milimeter" && valueDrop2 === "Inch"
        ? (value * 25.4).toFixed(2)
        : valueDrop2 === "Milimeter" && valueDrop1 === "Inch"
        ? (value / 25.4).toFixed(3)
        : valueDrop1 === "Milimeter" && valueDrop2 === "Yard"
        ? (value * 914.4).toFixed(2)
        : valueDrop2 === "Milimeter" && valueDrop1 === "Yard"
        ? (value / 914.4).toFixed(2)
        : valueDrop1 === "Mile" && valueDrop2 === "Foot"
        ? (value / 5280).toFixed(4)
        : valueDrop2 === "Mile" && valueDrop1 === "Foot"
        ? value * 5280
        : valueDrop1 === "Mile" && valueDrop2 === "Inch"
        ? (value / 63360).toFixed(5)
        : valueDrop2 === "Mile" && valueDrop1 === "Inch"
        ? value * 63360
        : valueDrop1 === "Mile" && valueDrop2 === "Yard"
        ? (value / 1760).toFixed(4)
        : valueDrop2 === "Mile" && valueDrop1 === "Yard"
        ? value * 1760
        : valueDrop1 === "Foot" && valueDrop2 === "Inch"
        ? (value / 12).toFixed(2)
        : valueDrop2 === "Foot" && valueDrop1 === "Inch"
        ? value * 12
        : valueDrop1 === "Foot" && valueDrop2 === "Yard"
        ? value * 3
        : valueDrop2 === "Foot" && valueDrop1 === "Yard"
        ? (value / 3).toFixed(2)
        : valueDrop1 === "Inch" && valueDrop2 === "Yard"
        ? value * 36
        : valueDrop2 === "Inch" && valueDrop1 === "Yard"
        ? (value / 36).toFixed(2)
        : ""
    );
  };

  const handleChange = (e) => {
    console.log(e.value);
    CheckValSetVal(e, setvalueDrop1);
    setInput1("0");
    setInput2("0");

    formulaSetFunction(e.value, valueDrop2);
  };

  const handleChange2 = (e) => {
    console.log(e.value);
    CheckValSetVal(e, setvalueDrop2);
    setInput1("0");
    setInput2("0");

    formulaSetFunction(valueDrop1, e.value);
  };

  function CheckValSetVal(e, setval) {
    const result =
      e.value === "Celcius"
        ? "Celcius"
        : e.value === "Kelvin"
        ? "Kelvin"
        : e.value === "Fahrenheit"
        ? "Fahrenheit"
        : e.value === "Kilometer/Hour"
        ? "Kilometer/Hour"
        : e.value === "Meter/Second"
        ? "Meter/Second"
        : e.value === "Knot"
        ? "Knot"
        : e.value === "Mile/Hour"
        ? "Mile/Hour"
        : e.value === "Kilometer"
        ? "Kilometer"
        : e.value === "Meter"
        ? "Meter"
        : e.value === "Centimeter"
        ? "Centimeter"
        : e.value === "Milimeter"
        ? "Milimeter"
        : e.value === "Mile"
        ? "Mile"
        : e.value === "Foot"
        ? "Foot"
        : e.value === "Inch"
        ? "Inch"
        : "Yard";

    setval(() => {
      return result;
    });
  }

  function formulaSetFunction(drop1, drop2) {
    setFormula(
      drop1 == "Celcius" && drop2 == "Kelvin"
        ? "°C + 273.15 = K"
        : drop2 == "Celcius" && drop1 == "Kelvin"
        ? "K - 273.15 = °C"
        : drop1 == "Celcius" && drop2 == "Fahrenheit"
        ? "(°C × (9/5)) + 32 = °F"
        : drop2 == "Celcius" && drop1 == "Fahrenheit"
        ? "((°F - 32) × (5/9)) = °C"
        : drop1 === "Fahrenheit" && drop2 === "Kelvin"
        ? "((°F - 32) × (5/9) + 273.15) = K"
        : drop2 === "Fahrenheit" && drop1 === "Kelvin"
        ? "((K - 273.15) × (9/5) + 32) = °F"
        : drop1 == "Kilometer/Hour" && drop2 == "Meter/Second"
        ? "(Km/H) / 3.6 = M/Sec"
        : drop2 == "Kilometer/Hour" && drop1 == "Meter/Second"
        ? "(M/Sec) × 3.6 =Km/H"
        : drop1 == "Meter/Second" && drop2 == "Knot"
        ? "(M/Sec) × 1.944 = Kt"
        : drop2 == "Meter/Second" && drop1 == "Knot"
        ? "Kt / 1.944 = M/Sec"
        : drop1 == "Kilometer/Hour" && drop2 == "Knot"
        ? "(Km/H) / 1.852 = Kt"
        : drop2 == "Kilometer/Hour" && drop1 == "Knot"
        ? "Kt × 1.852 = Km/H"
        : drop1 == "Kilometer/Hour" && drop2 == "Mile/Hour"
        ? "(Km/H) / 1.609 = Mph"
        : drop2 == "Kilometer/Hour" && drop1 == "Mile/Hour"
        ? "Mph × 1.609 = Km/H"
        : drop1 == "Meter/Second" && drop2 == "Mile/Hour"
        ? "M/Sec × 2.237 = Mph"
        : drop2 == "Meter/Second" && drop1 == "Mile/Hour"
        ? "Mph / 2.237 = M/Sec"
        : drop1 == "Knot" && drop2 == "Mile/Hour"
        ? "Kt × 1.151 = Mph"
        : drop2 == "Knot" && drop1 == "Mile/Hour"
        ? "Mph / 1.151 = Kt"
        : drop1 == "Kilometer" && drop2 == "Meter"
        ? "Km × 1000 = Mt"
        : drop2 == "Kilometer" && drop1 == "Meter"
        ? "Mt / 1000 = Km"
        : drop1 == "Kilometer" && drop2 == "Centimeter"
        ? "Km × 100000 = Cm"
        : drop2 == "Kilometer" && drop1 == "Centimeter"
        ? "Cm / 100000 = Km"
        : drop1 == "Kilometer" && drop2 == "Milimeter"
        ? "Km × 1e+6 = Ml"
        : drop2 == "Kilometer" && drop1 == "Milimeter"
        ? "Ml / 1e+6 = Km"
        : drop1 == "Kilometer" && drop2 == "Mile"
        ? "Km / 1.609 = Mi"
        : drop2 == "Kilometer" && drop1 == "Mile"
        ? "Mi × 1.609 = Km"
        : drop1 == "Kilometer" && drop2 == "Foot"
        ? "Km × 3281 = Ft"
        : drop2 == "Kilometer" && drop1 == "Foot"
        ? "Ft / 3281 = Km"
        : drop1 == "Kilometer" && drop2 == "Inch"
        ? "Km × 39370 = In"
        : drop2 == "Kilometer" && drop1 == "Inch"
        ? "In / 39370 = Km"
        : drop1 == "Kilometer" && drop2 == "Yard"
        ? "Km × 1093.61 = Yd"
        : drop2 == "Kilometer" && drop1 == "Yard"
        ? "Yd / 1093.61 = Km"
        : drop1 == "Meter" && drop2 == "Centimeter"
        ? "Mt × 100 = Cm"
        : drop2 == "Meter" && drop1 == "Centimeter"
        ? "Cm / 100 = Mt"
        : drop1 == "Meter" && drop2 == "Milimeter"
        ? "Mt × 1000 = Ml"
        : drop2 == "Meter" && drop1 == "Milimeter"
        ? "Ml / 1000 = Mt"
        : drop1 == "Meter" && drop2 == "Mile"
        ? "Mt / 1609 = Mi"
        : drop2 == "Meter" && drop1 == "Mile"
        ? "Mi × 1609 = Mt"
        : drop1 == "Meter" && drop2 == "Foot"
        ? "Mt × 3.281 = Ft"
        : drop2 == "Meter" && drop1 == "Foot"
        ? "Ft / 3.281 = Mt"
        : drop1 == "Meter" && drop2 == "Inch"
        ? "Mt × 39.37 = In"
        : drop2 == "Meter" && drop1 == "Inch"
        ? "In / 39.37 = Mt"
        : drop1 == "Meter" && drop2 == "Yard"
        ? "Mt × 1.094 = Yd"
        : drop2 == "Meter" && drop1 == "Yard"
        ? "Yd / 1.094 = Mt"
        : drop1 == "Centimeter" && drop2 == "Milimeter"
        ? "Cm × 10 = Ml"
        : drop2 == "Centimeter" && drop1 == "Milimeter"
        ? "Ml / 10 = Cm"
        : drop1 == "Centimeter" && drop2 == "Mile"
        ? "Cm / 160900 = Mi"
        : drop2 == "Centimeter" && drop1 == "Mile"
        ? "Mi × 160900 = Cm"
        : drop1 == "Centimeter" && drop2 == "Foot"
        ? "Cm / 30.48 = Ft"
        : drop2 == "Centimeter" && drop1 == "Foot"
        ? "Ft × 30.48 = Cm"
        : drop1 == "Centimeter" && drop2 == "Inch"
        ? "Cm / 2.54 = In"
        : drop2 == "Centimeter" && drop1 == "Inch"
        ? "In × 2.54 = Cm"
        : drop1 == "Centimeter" && drop2 == "Yard"
        ? "Cm / 91.44 = Yd"
        : drop2 == "Centimeter" && drop1 == "Yard"
        ? "Yd × 91.44 = Cm"
        : drop1 == "Milimeter" && drop2 == "Mile"
        ? "Ml / 1.609e+6 = Mi"
        : drop2 == "Milimeter" && drop1 == "Mile"
        ? "Mi × 1.609e+6 = Ml"
        : drop1 == "Milimeter" && drop2 == "Foot"
        ? "Ml / 304.8 = Ft"
        : drop2 == "Milimeter" && drop1 == "Foot"
        ? "Ft × 304.8 = Ml"
        : drop1 == "Milimeter" && drop2 == "Inch"
        ? "Ml / 25.4 = In"
        : drop2 == "Milimeter" && drop1 == "Inch"
        ? "In × 25.4 = Ml"
        : drop1 == "Milimeter" && drop2 == "Yard"
        ? "Ml / 914.4 = Yd"
        : drop2 == "Milimeter" && drop1 == "Yard"
        ? "Yd × 914.4 = Ml"
        : drop1 == "Mile" && drop2 == "Foot"
        ? "Mi × 5280 = Ft"
        : drop2 == "Mile" && drop1 == "Foot"
        ? "Ft / 5280 = Mi"
        : drop1 == "Mile" && drop2 == "Inch"
        ? "Mi × 63360 = In"
        : drop2 == "Mile" && drop1 == "Inch"
        ? "In / 63360 = Mi"
        : drop1 == "Mile" && drop2 == "Yard"
        ? "Mi × 1760 = Yd"
        : drop2 == "Mile" && drop1 == "Yard"
        ? "Yd / 1760 = Mi"
        : drop1 == "Foot" && drop2 == "Inch"
        ? "Ft × 12 = In"
        : drop2 == "Foot" && drop1 == "Inch"
        ? "In / 12 = Ft"
        : drop1 == "Foot" && drop2 == "Yard"
        ? "Ft / 3 = Yd"
        : drop2 == "Foot" && drop1 == "Yard"
        ? "Yd × 3 = Ft"
        : drop1 == "Inch" && drop2 == "Yard"
        ? "In / 36 = Yd"
        : drop2 == "Inch" && drop1 == "Yard"
        ? "Yd × 36 = In"
        : ""
    );
  }

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
    handleChange2(result);
    return result;
  }

  const getMagnitudeOptions = useCallback((unit) => {
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
  }, []);

  return (
    <div>
      <div className="myBody">
        <div className="box1">
          <input
            type="number"
            onChange={onInput1}
            value={valueDrop1 === valueDrop2 ? "" : input1}
            placeholder="0"
            className="entry1"
          />
          <Select
            options={getMagnitudeOptions(unit)}
            onChange={handleChange}
            placeholder="Select..  ▼"
          />
        </div>
        <div className="box2">
          <input
            type="number"
            onChange={onInput2}
            value={valueDrop1 === valueDrop2 ? "" : input2}
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
            onChange={handleChange2}
          />
        </div>
      </div>

      <p className="formula">{formula}</p>
    </div>
  );
};

export default Converter;
