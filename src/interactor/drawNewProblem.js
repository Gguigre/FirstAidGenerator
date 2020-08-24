import { Exsanguination } from "../entity/exsanguination";

import { Problem } from "../entity/problem";

export const drawNewProblemInteractor = (): Problem => {
  return new Exsanguination();
};
