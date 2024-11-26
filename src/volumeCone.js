/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  const pi = Math.PI;
  let volume = (1 / 3) * pi * r * r * h;
  return parseFloat(volume.toFixed(2));
};
