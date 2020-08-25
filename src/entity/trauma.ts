import { drawRandomElement } from "../utils/drawRandomElement";
import { Problem } from "./problem";

export class Trauma implements Problem {
  static NAME = "Trauma";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return Trauma.NAME;
  }

  getParams() {
    return this.params;
  }

  getWorsening = () => null;

  draw() {
    drawRandomElement([
      this.drawHematoma,
      this.drawFracture,
      this.drawSprain,
    ])();
  }

  drawHematoma = () => {
    this.params = {
      type: "hématome",
      location: drawRandomElement(["bras", "jambe", "avant-bras"]),
    };
  };
  drawFracture = () => {
    this.params = {
      type: "fracture",
      location: drawRandomElement(["bras", "jambe", "avant-bras", "rachis"]),
    };
  };
  drawSprain = () => {
    this.params = {
      type: "entorse",
      location: drawRandomElement(["poignet", "cheville", "épaule"]),
    };
  };
}
