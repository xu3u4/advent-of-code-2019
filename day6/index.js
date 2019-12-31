const R = require('ramda')

const findAnces = (childParent, child, ances = {}) => {
  const parent = childParent[child]
  const parentCount = Object.keys(ances).length
  const newAnces = {...ances, [child]: parentCount + 1}

  if (parent) return findAnces(childParent, parent, newAnces)
  return newAnces
}

const fuseRelation = (childParent) => {
  return Object.values(childParent).reduce((acc, ss) => {
    const result = findAnces(childParent, ss)
    return acc + Object.keys(result).length
  }, 0)
}

const q1 = (map) => {
  const arrarr = map
    .split('\n')
    .map(obj => {
      const newArr = obj.split(')')
      return [newArr[1], newArr[0]]
    })
  const childParent = R.fromPairs(arrarr)
  return fuseRelation(childParent)
}

const lengthBetween = (childParent, start, end) => {
  const startAncestors = findAnces(childParent, start)
  const endAncestors = findAnces(childParent, end)
  const commonAncestors = R.intersection(Object.keys(startAncestors), Object.keys(endAncestors))

  let smallest = 0
  commonAncestors.forEach(common => {
    const path = startAncestors[common] + endAncestors[common] - 4
    smallest = !smallest || path < smallest ? path : smallest
  })
  return smallest

}

const q2 = (map, start, end) => {
  const arrarr = map
    .split('\n')
    .map(obj => {
      const newArr = obj.split(')')
      return [newArr[1], newArr[0]]
    })
  const childParent = R.fromPairs(arrarr)
  return lengthBetween(childParent, start, end)
}

module.exports = { q1, q2 }
