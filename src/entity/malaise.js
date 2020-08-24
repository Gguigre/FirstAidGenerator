import { drawRandomElement } from "../utils/drawRandomElement";

export class Malaise {
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
