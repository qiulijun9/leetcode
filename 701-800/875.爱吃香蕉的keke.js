/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1
  let right = Math.max(...piles)

  while (left < right) {
    const mid = ((left + right) / 2) | 0
    let cost = piles.reduce((prev, cur) => prev + Math.ceil(cur / mid), 0)
    if (cost < h) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

function canFinish(piles, speed, h) {
  let time = 0
  for (let i = 0; i < piles.length; i++) {
    time += timeOf(piles[i], speed)
  }

  return time <= h
}

function timeOf(n, speed) {
  return n / speed + (n % speed > 0 ? 1 : 0)
}
