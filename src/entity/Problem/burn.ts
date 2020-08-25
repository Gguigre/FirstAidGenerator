import { drawRandomElement } from "../../utils/drawRandomElement";
import { Problem } from "../problem";

export class Burn implements Problem {
  static NAME = "Brûlure";
  params = {};

  constructor() {
    this.draw();
  }

  getName() {
    return Burn.NAME;
  }

  getParams() {
    return this.params;
  }

  getWorsening = () => null;

  draw = () => {
    const BURN_TYPES_WITH_LOCALISATION = [
      "chimique",
      "thermique",
      "radiation",
      "électrique",
    ];
    const BURN_TYPES_WITHOUT_LOCALISATION = ["par ingestion", "par inhalation"];
    const randomBurnType = drawRandomElement([
      ...BURN_TYPES_WITH_LOCALISATION,
      ...BURN_TYPES_WITHOUT_LOCALISATION,
    ]);
    this.params = {
      localisation: BURN_TYPES_WITH_LOCALISATION.includes(randomBurnType)
        ? this.drawLocalisation()
        : undefined,
      type: randomBurnType,
    };
  };

  drawLocalisation = () =>
    drawRandomElement(["jambe", "bras", "visage", "thorax", "abdomen"]);
}
