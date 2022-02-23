const pairToHex = (color) => {
  let pair  = color.toString(16);
  return pair.length === 1 ? "0" + pair : pair;
}

const convertRGBToHex = (r, g, b) => {
  return "#" + pairToHex(r) + pairToHex(g) + pairToHex(b);
} 

console.log(convertRGBToHex(0, 255, 255));