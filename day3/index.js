// const a = `R8,U5,L5,D3`
// const b = `U7,R6,D4,L4`
const getRange = (n1, n2) => {
  const increment = n1 <= n2 ? 1 : -1
  const output = []
  for (let i = n1; output.length < Math.abs(n2 - n1); i += increment) {
    output.push(i)
  }
  return output
}

const allPoints = (prev, curr) => {
  if (prev[0] === curr[0]) {
    const yRange = getRange(prev[1], curr[1])
    return yRange.map(c => `${prev[0]}.${c}`)
  }

  const xRange = getRange(prev[0], curr[0])
  return xRange.map(c => `${c}.${prev[1]}`)
}

const ruld = (line, prev) => {
  const regex = /(?<dir>[A-Z])(?<length>\d*)/;
  const struct = regex.exec(line);
  const len = parseInt(struct.groups.length, 10)

  switch (struct.groups.dir) {
    case "R":
      return [prev[0] + len, prev[1]]
    case "U":
      return [prev[0], prev[1] + len]
    case "L":
      return [prev[0] - len, prev[1]]
    case "D":
      return [prev[0], prev[1] - len]
    default:
      return undefined
  }
}

const toPathMap = (str) => {
  const coorArr = str.split(',')
  const pathDetails = coorArr.reduce((acc, coor, idx) => {
    const prev = acc.vertexes[idx]
    const newPoint = ruld(coor, prev)
    const through = allPoints(prev, newPoint)

    return {
      vertexes: [...acc.vertexes, newPoint],
      path: [...acc.path, ...through]
    }
  }, { vertexes: [[0, 0]], path: []})
  return pathDetails.path
}

const getCrosses = (path1, path2) => {
  const points1 = toPathMap(path1)
  const points2 = toPathMap(path2)
  const crosses = []

  const points1Map = points1.reduce((map, point, i) => {
    return map.set(point, i)
  }, new Map())

  return points2.reduce((acc, p2, i) => {
    const p1L = points1Map.get(p2)

    if (p1L) {
      return { ...acc, [p2]: i + p1L }
    }
    return acc
  }, {})
}

const q1 = (path) => {
  const crosses = getCrosses(path.path1, path.path2)
  const fromO = Object.keys(crosses).reduce((final, cross) => {
    const coords = cross.split('.')
    const length = coords.reduce((acc, coo) => (Math.abs(parseInt(acc, 10)) + Math.abs(parseInt(coo, 10))), 0)
    return [...final, length]
  }, [])
  return Math.min(...fromO)
}

const q2 = (path) => {
  const crosses = getCrosses(path.path1, path.path2)
  const steps = Object.values(crosses)
  return Math.min(...steps)
}

module.exports = { q1, q2 };