export interface Problem {
  getName: () => string;
  getParams: () => { [param: string]: string };
  getWorsening: () => Problem;
}
