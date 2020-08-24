import { drawRandomElement } from "../utils/drawRandomElement";

export class Trauma {
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
