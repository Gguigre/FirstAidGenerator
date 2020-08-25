import { drawRandomElement } from "../utils/drawRandomElement";
import { Problem } from "./problem";

export class Wound implements Problem {
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

  getWorsening = () => null;

  draw = () => {
    this.params = {
      localisation: this.drawLocalisation(),
      mean: this.drawMean(),
      with: this.drawWith(),
    };
  };

  drawLocalisation = () =>
    drawRandomElement(["bras", "jambe", "thorax", "abdomen", "tête"]);

  drawMean = () =>
    drawRandomElement(["couteau", "tournevis", "morsure de chien"]);

  drawWith = () =>
    drawRandomElement([
      "avec un gros objet",
      "avec un petit objet",
      "avec rien",
    ]);
}
