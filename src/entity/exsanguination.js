import { drawRandomElement } from "../utils/drawRandomElement";

export class Exsanguination implements Problem {
  static NAME = "Hemorragie";

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

  draw() {
    const random = Math.ceil(Math.random() * 3);
    switch (random) {
      case 1:
        this.drawExternal();
        break;
      case 2:
        this.drawInternal();
        break;
      case 3:
        this.drawMemberCut();
        break;
      default:
        this.drawExternal();
    }
  }

  drawExternal() {
    this.params = {
      type: "externe",
      location: drawRandomElement(["bras", "jambe", "aisselle"]),
    };
  }

  drawMemberCut() {
    this.params = {
      type: "section de membre",
      location: drawRandomElement(["doigt", "bras", "jambe"]),
    };
  }

  drawInternal() {
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
  }
}
