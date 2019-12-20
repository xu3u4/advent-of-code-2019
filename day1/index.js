const countFuel = (mass) => {
  return Math.floor(mass / 3) - 2
}

const loopFuel = (total, current) => {
  const needed = countFuel(current)
  if (needed <= 0) return total
  return loopFuel(total + needed, needed)
}

const allFuels1 = (modules) => {
  const arrayOfModule = modules.split('\n')
  return arrayOfModule.reduce((acc, module) => {
    return acc + countFuel(module)
  }, 0)
}

const allFuels2 = (modules) => {
  const arrayOfModule = modules.split('\n')
  return arrayOfModule.reduce((acc, module) => {
    return acc + loopFuel(0, module)
  }, 0)
}

module.exports = { q1: allFuels1, q2: allFuels2 };