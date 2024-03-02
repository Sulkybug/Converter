export class Temperature_formulas {
  constructor(value) {
    this.value = value;
  }

  convert = (fromUnit, toUnit) => {
    switch (`${fromUnit}-${toUnit}`) {
      case "Celcius-Kelvin":
        return (this.value + 273.15).toFixed(2);
      case "Kelvin-Celcius":
        return (this.value - 273.15).toFixed(2);
      case "Celcius-Fahrenheit":
        return (this.value * (9 / 5) + 32).toFixed(2);
      case "Fahrenheit-Celcius":
        return ((this.value - 32) * (5 / 9)).toFixed(2);
      case "Kelvin-Fahrenheit":
        return ((this.value - 273.15) * (9 / 5) + 32).toFixed(2);
      case "Fahrenheit-Kelvin":
        return ((this.value - 32) * (5 / 9) + 273.15).toFixed(2);
      default:
        return "0";
    }
  };

  formulas = (drop1, drop2) => {
    switch (`${drop1}-${drop2}`) {
      case "Celcius-Kelvin":
        return "°C + 273.15 = K";
      case "Kelvin-Celcius":
        return "K - 273.15 = °C";
      case "Celcius-Fahrenheit":
        return "(°C × (9/5)) + 32 = °F";
      case "Fahrenheit-Celcius":
        return "((°F - 32) × (5/9)) = °C";
      case "Kelvin-Fahrenheit":
        return "((K - 273.15) × (9/5) + 32) = °F";
      case "Fahrenheit-Kelvin":
        return "((°F - 32) × (5/9) + 273.15) = K";
      default:
        return "";
    }
  };
}
