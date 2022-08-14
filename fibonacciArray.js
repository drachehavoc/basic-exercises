export const fibonacciArray = (iterations) => {
  // check if times is valid
  if (iterations <= 0)
    throw "Não são permitidos numeros menores ou iguais a zero"

  // first values (we need almost 2)
  let values = [0, 1]

  // if times is minor than the lenght of pre-caculated \
  // values just return the correct portion
  if (iterations < values.length)
    return values.splice(0, iterations)

  // calc next values
  let idx = values.length - 1
  for (; idx < iterations; idx++)
    values.push(values[idx] + values[idx - 1])

  // return calculated values
  return values
}

export const fibonacciArrayFrom = (length) => {
  let [prev, next, soma] = [0, 1, 0]
  return Array.from({ length }, () => {
    soma = prev + next
    prev = next
    next = soma
    return soma
  })
}