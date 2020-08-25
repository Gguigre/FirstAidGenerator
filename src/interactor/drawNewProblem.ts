import { Problem } from "../entity/problem";
import { drawRandomElement } from "../utils/drawRandomElement";
import { Exsanguination } from "../entity/exsanguination";
import { Trauma } from "../entity/trauma";
import { AirwayObstruction } from "../entity/airwayObstruction";
import { Discomfort } from "../entity/discomfort";
import { Wound } from "../entity/wound";
import { Burn } from "../entity/burn";
import { LossOfConsciousness } from "../entity/lossOfConsciousness";
import { HeartAttack } from "../entity/heartAttack";
import { Drowning } from "../entity/drowning";

export const drawNewProblemInteractor = (): Problem => {
  const problemType = drawRandomElement([
    Exsanguination,
    Trauma,
    AirwayObstruction,
    Discomfort,
    Wound,
    Burn,
    LossOfConsciousness,
    HeartAttack,
    Drowning,
  ]);
  return new problemType();
};
