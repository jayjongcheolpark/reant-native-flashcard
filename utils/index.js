export function genID(date = new Date()) {
  return `${date.getTime()}`;
}
