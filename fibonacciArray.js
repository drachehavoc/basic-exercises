export const fibonacciArray = (times) => {
  // check if times is valid
  if (times <= 0)
    throw "Não são permitidos numeros menores ou iguais a zero"

  // first values (we need almost 2)
  let values = [0, 1]

  // if times is minor than the lenght of pre-caculated \
  // values just return the correct portion
  if (times < values.length) {
    return values.splice(0, times)
  }

  // jumps the pre calculated values
  times -= values.length

  // calc next values
  while (times--) {
    let lastIdx = values.length - 1
    let prevIdx = lastIdx - 1
    values.push(values[lastIdx] + values[prevIdx])
  }

  // return calculated values
  return values
}