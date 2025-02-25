function getMinMax(str) {
  let array = str.split(' ')
  .filter((element) => Number.isFinite(Number(element)))
  .map((element) => Number(element));
  return {min: Math.min(...array), max: Math.max(...array)};
}
