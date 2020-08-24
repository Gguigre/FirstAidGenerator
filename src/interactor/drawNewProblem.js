import { Problem } from "../entity/problem";
import { Exsanguination } from "../entity/exsanguination";
import { Trauma } from "../entity/trauma";
import { drawRandomElement } from "../utils/drawRandomElement";

export const drawNewProblemInteractor = (): Problem => {
  const problemType = drawRandomElement([Exsanguination, Trauma]);
  return new problemType();
};
