export const drawRandomElement = <T>(array: Array<T>): T =>
  array[Math.floor(Math.random() * array.length)];
