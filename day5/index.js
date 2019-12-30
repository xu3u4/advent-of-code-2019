const diaRule = (opcodes, mode, valPos) => {
  return mode === '0' ? opcodes[opcodes[valPos]] : opcodes[valPos]
}

function program(opcodes, input) {
  let count = 0
  let output
  while (count < opcodes.length) {
    if (opcodes[count] === '99') {
      return output
    }

    const opMap = getModes(opcodes[count])
    const firstP = Number(diaRule(opcodes, opMap.first, count + 1))
    const secondP = Number(diaRule(opcodes, opMap.second, count + 2))
    const thirdP = Number(diaRule(opcodes, '1', count + 3))

    switch(opMap.operator) {
      case 1:
        opcodes[thirdP] = (firstP + secondP).toString();
        count += 4
        break;
      case 2:
        opcodes[thirdP] = (firstP * secondP).toString();
        count += 4
        break;
      case 3:
        opcodes[opcodes[count + 1]] = input.toString();
        count += 2
        break;
      case 4:
        output = firstP.toString();
        count += 2
        break;
      case 5:
        if (firstP !== 0) count = secondP;
        else count += 3
        break;
      case 6:
        if (firstP === 0) count = secondP;
        else count += 3
        break;
      case 7:
        opcodes[thirdP] = firstP < secondP ? '1' : '0'
        count += 4
        break;
      case 8:
        opcodes[thirdP] = firstP === secondP ? '1' : '0'
        count += 4
        break;
      default:
        count += 1
    }
  }
}

const getModes = (code) => {
  const strCodeArr = code
    .split('')
    .reverse()
  const [ope, _no, first = '0', second = '0', third = '0'] = strCodeArr

  return {
    operator: _no ? Number(_no + ope) : Number(ope),
    first,
    second,
    third
  }
}

const q1 = (data, input) => {
  const strArr = data.split(',')

  return program(strArr, input)
}

module.exports = { q1 }
