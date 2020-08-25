import { drawRandomElement } from "../utils/drawRandomElement";
import { Problem } from "./problem";

export class Malaise implements Problem {
  static NAME = "Malaise";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return Malaise.NAME;
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
