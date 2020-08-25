import { drawRandomElement } from "../utils/drawRandomElement";
import { Problem } from "./problem";

export class HeartAttack implements Problem {
  static NAME = "Arrêt cardiaque";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return HeartAttack.NAME;
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
