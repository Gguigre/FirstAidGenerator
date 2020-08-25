import { drawRandomElement } from "../utils/drawRandomElement";
import { Problem } from "./problem";

export class Exsanguination implements Problem {
  static NAME = "Hémorragie";

  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return Exsanguination.NAME;
  }

  getParams() {
    return this.params;
  }

  getWorsening = () => null;

  draw() {
    drawRandomElement([
      this.drawExternal,
      this.drawInternal,
      this.drawMemberCut,
    ])();
  }

  drawExternal = () => {
    this.params = {
      type: "externe",
      location: drawRandomElement(["bras", "jambe", "aisselle"]),
    };
  };

  drawMemberCut = () => {
    this.params = {
      type: "section de membre",
      location: drawRandomElement(["doigt", "bras", "jambe"]),
    };
  };

  drawInternal = () => {
    this.params = {
      type: "interne externalisée ",
      location: drawRandomElement([
        "nez",
        "bouche",
        "oreille",
        "vagin",
        "anus",
      ]),
    };
  };
}
