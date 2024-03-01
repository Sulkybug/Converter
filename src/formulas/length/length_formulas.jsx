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

  formulas = (drop1, drop2) => {
    switch (`${drop1}-${drop2}`) {
      case "Kilometer-Meter":
        return "Km × 1000 = Mt";
      case "Meter-Kilometer":
        return "Mt / 1000 = Km";
      case "Kilometer-Centimeter":
        return "Km × 100000 = Cm";
      case "Centimeter-Kilometer":
        return "Cm / 100000 = Km";
      case "Kilometer-Milimeter":
        return "Km × 1e+6 = Ml";
      case "Milimeter-Kilometer":
        return "Ml / 1e+6 = Km";
      case "Kilometer-Mile":
        return "Km / 1.609 = Mi";
      case "Mile-Kilometer":
        return "Mi × 1.609 = Km";
      case "Kilometer-Foot":
        return "Km × 3281 = Ft";
      case "Foot-Kilometer":
        return "Ft / 3281 = Km";
      case "Kilometer-Inch":
        return "Km × 39370 = In";
      case "Inch-Kilometer":
        return "In / 39370 = Km";
      case "Kilometer-Yard":
        return "Km × 1093.61 = Yd";
      case "Yard-Kilometer":
        return "Yd / 1093.61 = Km";
      case "Meter-Centimeter":
        return "Mt × 100 = Cm";
      case "Centimeter-Meter":
        return "Cm / 100 = Mt";
      case "Meter-Milimeter":
        return "Mt × 1000 = Ml";
      case "Milimeter-Meter":
        return "Ml / 1000 = Mt";
      case "Meter-Mile":
        return "Mt / 1609 = Mi";
      case "Mile-Meter":
        return "Mi × 1609 = Mt";
      case "Meter-Foot":
        return "Mt × 3.281 = Ft";
      case "Foot-Meter":
        return "Ft / 3.281 = Mt";
      case "Meter-Inch":
        return "Mt × 39.37 = In";
      case "Inch-Meter":
        return "In / 39.37 = Mt";
      case "Meter-Yard":
        return "Mt × 1.094 = Yd";
      case "Yard-Meter":
        return "Yd / 1.094 = Mt";
      case "Centimeter-Milimeter":
        return "Cm × 10 = Ml";
      case "Milimeter-Centimeter":
        return "Ml / 10 = Cm";
      case "Centimeter-Mile":
        return "Cm / 160900 = Mi";
      case "Mile-Centimeter":
        return "Mi × 160900 = Cm";
      case "Centimeter-Foot":
        return "Cm / 30.48 = Ft";
      case "Foot-Centimeter":
        return "Ft × 30.48 = Cm";
      case "Centimeter-Inch":
        return "Cm / 2.54 = In";
      case "Inch-Centimeter":
        return "In × 2.54 = Cm";
      case "Centimeter-Yard":
        return "Cm / 91.44 = Yd";
      case "Yard-Centimeter":
        return "Yd × 91.44 = Cm";
      case "Milimeter-Mile":
        return "Ml / 1.609e+6 = Mi";
      case "Mile-Milimeter":
        return "Mi × 1.609e+6 = Ml";
      case "Milimeter-Foot":
        return "Ml / 304.8 = Ft";
      case "Foot-Milimeter":
        return "Ft × 304.8 = Ml";
      case "Milimeter-Inch":
        return "Ml / 25.4 = In";
      case "Inch-Milimeter":
        return "In × 25.4 = Ml";
      case "Milimeter-Yard":
        return "Ml / 914.4 = Yd";
      case "Yard-Milimeter":
        return "Yd × 914.4 = Ml";
      case "Mile-Foot":
        return "Mi × 5280 = Ft";
      case "Foot-Mile":
        return "Ft / 5280 = Mi";
      case "Mile-Inch":
        return "Mi × 63360 = In";
      case "Inch-Mile":
        return "In / 63360 = Mi";
      case "Mile-Yard":
        return "Mi × 1760 = Yd";
      case "Yard-Mile":
        return "Yd / 1760 = Mi";
      case "Foot-Inch":
        return "Ft × 12 = In";
      case "Inch-Foot":
        return "In / 12 = Ft";
      case "Foot-Yard":
        return "Ft / 3 = Yd";
      case "Yard-Foot":
        return "Yd × 3 = Ft";
      case "Inch-Yard":
        return "In / 36 = Yd";
      case "Yard-Inch":
        return "Yd × 36 = In";
      default:
        return "";
    }
  };
}
