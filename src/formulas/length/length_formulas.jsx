export class Length_formulas {
  constructor(value) {
    this.value = value;
  }

  convert = (fromUnit, toUnit) => {
    switch (`${fromUnit}-${toUnit}`) {
      case "Kilometer-Meter":
        return this.value * 1000;
      case "Meter-Kilometer":
        return this.value / 1000;
      case "Kilometer-Centimeter":
        return this.value * 100000;
      case "Centimeter-Kilometer":
        return this.value / 100000;
      case "Kilometer-Milimeter":
        return this.value * 1000000;
      case "Milimeter-Kilometer":
        return this.value / 1000000;
      case "Kilometer-Mile":
        return (this.value / 1.609).toFixed(3);
      case "Mile-Kilometer":
        return (this.value * 1.609).toFixed(3);
      case "Kilometer-Foot":
        return this.value * 3281;
      case "Foot-Kilometer":
        return (this.value / 3281).toFixed(4);
      case "Kilometer-Inch":
        return this.value * 39370;
      case "Inch-Kilometer":
        return (this.value / 39370).toFixed(4);
      case "Kilometer-Yard":
        return (this.value * 1093.61).toFixed(2);
      case "Yard-Kilometer":
        return (this.value / 1093.61).toFixed(3);
      case "Meter-Centimeter":
        return this.value * 100;
      case "Centimeter-Meter":
        return this.value / 100;
      case "Meter-Milimeter":
        return this.value * 1000;
      case "Milimeter-Meter":
        return this.value / 1000;
      case "Meter-Mile":
        return (this.value / 1609).toFixed(3);
      case "Mile-Meter":
        return this.value * 1609;
      case "Meter-Foot":
        return (this.value * 3.281).toFixed(2);
      case "Foot-Meter":
        return (this.value / 3.281).toFixed(2);
      case "Meter-Inch":
        return (this.value * 39.37).toFixed(2);
      case "Inch-Meter":
        return (this.value / 39.37).toFixed(3);
      case "Meter-Yard":
        return (this.value * 1.094).toFixed(2);
      case "Yard-Meter":
        return (this.value / 1.094).toFixed(3);
      case "Centimeter-Milimeter":
        return this.value * 10;
      case "Milimeter-Centimeter":
        return this.value / 10;
      case "Centimeter-Mile":
        return (this.value / 160934).toFixed(6);
      case "Mile-Centimeter":
        return this.value * 160934;
      case "Centimeter-Foot":
        return (this.value / 30.48).toFixed(3);
      case "Foot-Centimeter":
        return (this.value * 30.48).toFixed(2);
      case "Centimeter-Inch":
        return (this.value / 2.54).toFixed(3);
      case "Inch-Centimeter":
        return (this.value * 2.54).toFixed(2);
      case "Centimeter-Yard":
        return (this.value / 91.44).toFixed(2);
      case "Yard-Centimeter":
        return (this.value * 91.44).toFixed(2);
      case "Milimeter-Mile":
        return this.value / 1.609e6;
      case "Mile-Milimeter":
        return this.value * 1.609e6;
      case "Milimeter-Foot":
        return (this.value / 304.8).toFixed(3);
      case "Foot-Milimeter":
        return (this.value * 304.8).toFixed(2);
      case "Milimeter-Inch":
        return (this.value / 25.4).toFixed(3);
      case "Inch-Milimeter":
        return (this.value * 25.4).toFixed(2);
      case "Milimeter-Yard":
        return (this.value / 914.4).toFixed(3);
      case "Yard-Milimeter":
        return (this.value * 914.4).toFixed(2);
      case "Mile-Foot":
        return this.value * 5280;
      case "Foot-Mile":
        return (this.value / 5280).toFixed(4);
      case "Mile-Inch":
        return this.value * 63360;
      case "Inch-Mile":
        return (this.value / 63360).toFixed(5);
      case "Mile-Yard":
        return this.value * 1760;
      case "Yard-Mile":
        return (this.value / 1760).toFixed(4);
      case "Foot-Inch":
        return this.value * 12;
      case "Inch-Foot":
        return (this.value / 12).toFixed(2);
      case "Foot-Yard":
        return (this.value / 3).toFixed(2);
      case "Yard-Foot":
        return this.value * 3;
      case "Inch-Yard":
        return (this.value / 36).toFixed(2);
      case "Yard-Inch":
        return this.value * 36;
      default:
        return "";
    }
  };
}
