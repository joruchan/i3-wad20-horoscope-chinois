// number -> number
// transformer une année en index
export function getSign(annee) {
  return annee % 12;
}
/*
console.log(getSign(2020));
console.log(getSign(2021));
console.log(getSign(1935));
console.log(getSign(8000));
console.log(getSign(1200));
console.log(getSign(1300));
console.log(getSign(1400));
console.log(getSign(1985));
console.log(getSign(1996));
*/
