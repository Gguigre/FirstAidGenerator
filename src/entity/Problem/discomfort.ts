import { drawRandomElement } from "../../utils/drawRandomElement";
import { Problem } from "../problem";

export class Discomfort implements Problem {
  static NAME = "Malaise";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return Discomfort.NAME;
  }

  getParams() {
    return this.params;
  }

  getWorsening = () => null;

  draw() {
    this.params = {
      type: drawRandomElement([
        "AVC",
        "choc anaphylactique",
        "détresse respiratoire",
        "hypoglycémie",
        "autre",
      ]),
    };
  }
}
