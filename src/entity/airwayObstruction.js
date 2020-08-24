import { drawRandomElement } from "../utils/drawRandomElement";

export class AirwayObstruction {
  static NAME = "Obstruction des voies aériennes";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return AirwayObstruction.NAME;
  }

  getParams() {
    return this.params;
  }

  draw() {
    drawRandomElement([this.drawPartial, this.drawWhole])();
  }

  drawPartial = () => {
    this.params = {
      type: "partiel",
      due_to: this.drawLocation(),
    };
  };

  drawWhole = () => {
    this.params = {
      type: "totale",
      due_to: this.drawLocation(),
    };
  };

  drawLocation = () => drawRandomElement(["corps étranger", "œdème"]);
}
