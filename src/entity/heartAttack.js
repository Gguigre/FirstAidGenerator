import { drawRandomElement } from "../utils/drawRandomElement";

export class HeartAttack {
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

  draw = () => {
    this.params = {
      person: this.drawPerson(),
      team: this.drawTeam(),
    };
  };

  drawPerson = () => drawRandomElement(["adulte", "enfant", "nourrisson"]);

  drawTeam = () => drawRandomElement(["en équipe", "sauveteur isolé"]);
}
