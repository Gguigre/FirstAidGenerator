import { drawRandomElement } from "../utils/drawRandomElement";

export class Drowning {
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

  draw = () => {
    this.params = {
      person: this.drawPerson(),
      team: this.drawTeam(),
    };
  };

  drawPerson = () => drawRandomElement(["adulte", "enfant", "nourrisson"]);

  drawTeam = () => drawRandomElement(["en équipe", "sauveteur isolé"]);
}
