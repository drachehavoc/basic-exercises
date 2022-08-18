const fibonacciArrayFrom = (iterations) => {
  // check if iterations is valid
  if (iterations <= 0)
    throw "Não são permitidos numeros menores ou iguais a zero"

  // 
  let [prev, curr, sum] = [0, 1, 0]
  return Array.from({ length: iterations }, (val, key) => {
    if (key <= 1) return key
    sum = prev + curr
    prev = curr
    curr = sum
    return sum
  })
}

console.log(fibonacciArrayFrom(20))
