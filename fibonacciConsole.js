export const fibonacciConsole = (times) => {
  let [prev, next] = [0, 1]
  console.log(prev)
  console.log(next)

  while (times--) {
    if (prev == 0 || prev == 1)
      console.log(next += prev)
    prev = next
  }
}