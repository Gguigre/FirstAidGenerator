import { drawRandomElement } from "../utils/drawRandomElement";

export class Wound {
  static NAME = "Plaie";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return Wound.NAME;
  }

  getParams() {
    return this.params;
  }

  draw = () => {
    this.params = {
      localisation: drawRandomElement([
        "bras",
        "jambe",
        "thorax",
        "abdomen",
        "tête",
      ]),
      how: drawRandomElement(["couteau", "tournevis", "morsure de chien"]),
      with: drawRandomElement([
        "avec un gros objet",
        "avec un petit objet",
        "avec rien",
      ]),
    };
  };
}
