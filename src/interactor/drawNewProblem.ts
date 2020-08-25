import { Problem } from "../entity/problem";
import { drawRandomElement } from "../utils/drawRandomElement";
import { Exsanguination } from "../entity/Problem/exsanguination";
import { Trauma } from "../entity/Problem/trauma";
import { AirwayObstruction } from "../entity/Problem/airwayObstruction";
import { Discomfort } from "../entity/Problem/discomfort";
import { Wound } from "../entity/Problem/wound";
import { Burn } from "../entity/Problem/burn";
import { LossOfConsciousness } from "../entity/Problem/lossOfConsciousness";
import { HeartAttack } from "../entity/Problem/heartAttack";
import { Drowning } from "../entity/Problem/drowning";

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
