function anagramSimple(palavraA, palavraB) {
    palavraA = palavraA.replace(/[^a-zA-Z]+/g, "")
    palavraB = palavraB.replace(/[^a-zA-Z]+/g, "")
    if (palavraA.length != palavraB.length)
        return false
    arrayPalavraA = palavraA.split("")
    arrayPalavraB = palavraB.split("")
    arrayPalavraA = arrayPalavraA.sort()
    arrayPalavraB = arrayPalavraB.sort()
    palavraA = arrayPalavraA.join("")
    palavraB = arrayPalavraB.join("")
    return (palavraA == palavraB)
}

//
function anagramSmpleSmall(pA, pB) {
    pA = pA.toLowerCase().replace(/[^a-zA-Z]+/g, "")
    pB = pB.toLowerCase().replace(/[^a-zA-Z]+/g, "")
    if (pA.length != pB.length)
        return false
    pA = pA.split("").sort().join("")
    pB = pB.split("").sort().join("")
    return pA == pB
}

//
function sortWordLetter(palavra) {
    return palavra.replace(/[^a-zA-Z]+/g, "").toLowerCase().split("").sort().join("")
}

function anagram(pA, pB) {
    return sortWordLetter(pA) == sortWordLetter(pB)
}

const fnAnagram = anagram
console.log(fnAnagram("abc", "c b A")) // true
console.log(fnAnagram("alergia catinga", "galeria Cantiga")) // true
console.log(fnAnagram("RAIL! SAFETY!", "fairy tales")) // true
console.log(fnAnagram("rail safety", "fairy tales")) // true
console.log(fnAnagram("lobo", "bolo")) // true
console.log(fnAnagram("Hi there", "Bye there")) // false
console.log(fnAnagram("qwer", "asdf")) // false