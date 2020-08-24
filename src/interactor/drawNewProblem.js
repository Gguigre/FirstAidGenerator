import { Problem } from "../entity/problem";
import { drawRandomElement } from "../utils/drawRandomElement";
import { Exsanguination } from "../entity/exsanguination";
import { Trauma } from "../entity/trauma";
import { AirwayObstruction } from "../entity/airwayObstruction";
import { Malaise } from "../entity/malaise";
import { Wound } from "../entity/wound";
import { Burn } from "../entity/burn";
import { LossOfConsciousness } from "../entity/lossOfConsciousness";
import { HeartAttack } from "../entity/heartAttack";

export const drawNewProblemInteractor = (): Problem => {
  const problemType = drawRandomElement([
    Exsanguination,
    Trauma,
    AirwayObstruction,
    Malaise,
    Wound,
    Burn,
    LossOfConsciousness,
    HeartAttack,
  ]);
  return new problemType();
};
