const isSixDigit = (str) => {
  return str.length === 6
}

const hasDouble = (str) => {
  for (let x = 0; x < str.length; x++) {
    if (str[x] === str[x+1]) return x
  }
  return -1
}

const hasExDouble = (str) => {
  const map = {}
  for (let x = 0; x < str.length; x++) {
    const cur = str[x]
    if (map[cur]) {
      map[cur] = map[cur] + 1
      continue
    }
    map[cur] = 1
  }
  return Object.values(map).some((k) => {
    return k === 2
  });
}

const increase = (str) => {
  let big = 0
  for (let x of str) {
    const toNum = parseInt(x, 10)
    if (toNum < big) return false
    big = toNum
  }
  return true
}

const verify1 = (str) => {
  return isSixDigit(str)
    && hasDouble(str) !== -1
    && increase(str)
}

const verify2 = (str) => {
  return isSixDigit(str)
    && hasExDouble(str)
    && increase(str)
}

const find1 = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    if (verify1(i.toString())) {
      result.push(i)
    }
  }
  return result.length
}

const find2 = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    if (verify2(i.toString())) {
      result.push(i)
    }
  }
  return result.length
}

module.exports = { verify1, verify2, find1, find2 }
