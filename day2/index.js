function program(opcodes) {
  let count = 0
  while (count <= opcodes.length) {
    switch(opcodes[count]) {
      case 1:
        opcodes[opcodes[count + 3]] = opcodes[opcodes[count + 1]] + opcodes[opcodes[count + 2]];
        count += 4
        break;
      case 2:
        opcodes[opcodes[count + 3]] = opcodes[opcodes[count + 1]] * opcodes[opcodes[count + 2]];
        count += 4
        break;
      case 99:
        count = opcodes.length
        return opcodes[0]
      default:
        count += 1
    }
  }
}

const q1 = (data) => {
  const input = data.split(',').map(code => parseInt(code, 10))
  input[1] = 12
  input[2] = 2
  return program(input)
}

const q2 = (data, desired) => {
  const input = data.split(',').map(code => parseInt(code, 10))
  for (let n = 0; n <= 99; n++) {
    for (let v = 0; v <= 99; v++) {
      const renewed = [...input]
      renewed[1] = n
      renewed[2] = v
      const output = program(renewed)
      if (isNaN(output)) break
      if( output === desired) {
        return 100 * n + v
      }
    }
  }
}

module.exports = { q1, q2 }
