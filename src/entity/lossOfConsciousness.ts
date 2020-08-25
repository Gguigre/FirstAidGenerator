import { drawRandomElement } from "../utils/drawRandomElement";
import { Problem } from "./problem";

export class LossOfConsciousness implements Problem {
  static NAME = "Perte de conscience";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return LossOfConsciousness.NAME;
  }

  getParams() {
    return this.params;
  }

  getWorsening = () => null;

  draw = () => {
    this.params = {
      team: this.drawTeam(),
    };
  };

  drawTeam = () => drawRandomElement(["en équipe", "sauveteur isolé"]);
}
