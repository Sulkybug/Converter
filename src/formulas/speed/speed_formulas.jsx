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

  formulas = (drop1, drop2) => {
    switch (`${drop1}-${drop2}`) {
      case "Kilometer/Hour-Meter/Second":
        return "(Km/H) / 3.6 = M/Sec";
      case "Meter/Second-Kilometer/Hour":
        return "(M/Sec) × 3.6 =Km/H";
      case "Kilometer/Hour-Knot":
        return "(Km/H) / 1.852 = Kt";
      case "Knot-Kilometer/Hour":
        return "Kt × 1.852 = Km/H";
      case "Kilometer/Hour-Mile/Hour":
        return "(Km/H) / 1.609 = Mph";
      case "Mile/Hour-Kilometer/Hour":
        return "Mph × 1.609 = Km/H";
      case "Meter/Second-Knot":
        return "(M/Sec) × 1.944 = Kt";
      case "Knot-Meter/Second":
        return "Kt / 1.944 = M/Sec";
      case "Meter/Second-Mile/Hour":
        return "M/Sec × 2.237 = Mph";
      case "Mile/Hour-Meter/Second":
        return "Mph / 2.237 = M/Sec";
      case "Knot-Mile/Hour":
        return "Kt × 1.151 = Mph";
      case "Mile/Hour-Knot":
        return "Mph / 1.151 = Kt";
      default:
        return "";
    }
  };
}
