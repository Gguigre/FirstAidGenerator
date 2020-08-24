import { Problem } from "../entity/problem";
import { Exsanguination } from "../entity/exsanguination";
import { Trauma } from "../entity/trauma";
import { AirwayObstruction } from "../entity/airwayObstruction";
import { Malaise } from "../entity/malaise";
import { drawRandomElement } from "../utils/drawRandomElement";
import { Wound } from "../entity/wound";

export const drawNewProblemInteractor = (): Problem => {
  const problemType = drawRandomElement([
    Exsanguination,
    Trauma,
    AirwayObstruction,
    Malaise,
    Wound,
  ]);
  return new problemType();
};
