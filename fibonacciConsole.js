const fibonacciConsole = (times) => {
  let [prev, curr, sum] = [0, 1, 0]
  console.log(prev)
  console.log(curr)
  times -= 2
  
  while (times--) {
    sum = prev + curr
    prev = curr
    curr = sum
    console.log(sum)
  }
}

fibonacciConsole(20)