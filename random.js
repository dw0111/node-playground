function random(max = 10) {
  const randomNr = Math.random() * (Number(max) + 1)
  const rounded = Math.floor(randomNr)
  return rounded
}

module.exports = random
