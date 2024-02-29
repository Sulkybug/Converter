export class Speed_formulas {
  constructor(value) {
    this.value = value;
  }

  convert = (fromUnit, toUnit) => {
    switch (`${fromUnit}-${toUnit}`) {
      case "Kilometer/Hour-Meter/Second":
        return (this.value / 3.6).toFixed(2);
      case "Meter/Second-Kilometer/Hour":
        return (this.value * 3.6).toFixed(3);
      case "Kilometer/Hour-Knot":
        return (this.value / 1.852).toFixed(3);
      case "Knot-Kilometer/Hour":
        return (this.value * 1.852).toFixed(3);
      case "Kilometer/Hour-Mile/Hour":
        return (this.value / 1.609).toFixed(3);
      case "Mile/Hour-Kilometer/Hour":
        return (this.value * 1.609).toFixed(3);
      case "Kilometer/Hour-Mile/Hour":
        return (this.value / 1.609).toFixed(3);
      case "Meter/Second-Knot":
        return (this.value * 1.944).toFixed(3);
      case "Knot-Meter/Second":
        return (this.value / 1.944).toFixed(3);
      case "Meter/Second-Mile/Hour":
        return (this.value * 2.237).toFixed(3);
      case "Mile/Hour-Meter/Second":
        return (this.value / 2.237).toFixed(3);
      case "Knot-Mile/Hour":
        return (this.value * 1.151).toFixed(3);
      case "Mile/Hour-Knot":
        return (this.value / 1.151).toFixed(3);
      default:
        return "";
    }
  };
}
