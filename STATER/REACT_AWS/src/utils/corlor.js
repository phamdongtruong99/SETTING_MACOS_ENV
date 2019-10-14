export const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
// RGBToHex(255, 165, 1); // 'ffa501'

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

//randomHexColorCode(); // "#e34155"
