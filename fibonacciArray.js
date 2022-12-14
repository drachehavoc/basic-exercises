const fibonacciArray = (iterations) => {
  // check if iterations is valid
  if (iterations <= 0)
    throw "Não são permitidos numeros menores ou iguais a zero"

  // first values (we need almost 2)
  let values = [0, 1]

  // if iterations is minor than the lenght of pre-caculated 
  // values just return the correct portion
  if (iterations < values.length)
    return values.splice(0, iterations)

  // calc next values
  let idx = values.length - 1
  iterations--
  for (; idx < iterations; idx++)
    values.push(values[idx] + values[idx - 1])

  // return calculated values
  return values
}

console.log(fibonacciArray(20))