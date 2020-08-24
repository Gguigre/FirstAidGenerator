import { drawRandomElement } from "../utils/drawRandomElement";

export class LossOfConsciousness {
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

  draw = () => {
    this.params = {
      team: this.drawTeam(),
    };
  };

  drawTeam = () => drawRandomElement(["en équipe", "sauveteur isolé"]);
}
