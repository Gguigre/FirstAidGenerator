import { drawRandomElement } from "../../utils/drawRandomElement";
import { Problem } from "../problem";

export class Drowning implements Problem {
  static NAME = "Noyade";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return Drowning.NAME;
  }

  getParams() {
    return this.params;
  }

  getWorsening = () => null;

  draw = () => {
    this.params = {
      person: this.drawPerson(),
      team: this.drawTeam(),
    };
  };

  drawPerson = () => drawRandomElement(["adulte", "enfant", "nourrisson"]);

  drawTeam = () => drawRandomElement(["en équipe", "sauveteur isolé"]);
}
