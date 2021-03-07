// sum
function sum(...numbers) {

    // if input is array
    numbers = numbers.flatMap(n => {
        return 
    })

    // convert to number
    if(numbers.length === 1) return +`${numbers}`

    return numbers.reduce((total, n) => {
        total = parseInt(total)
        return typeof n === 'number' ? total += parseInt(n) : total
    }, 0)
}

// subtrc
function subtrc(...numbers) {

    // if input is array
    numbers = numbers.flat()

    // convert to number
    if(numbers.length === 1) return +`${numbers}`

    return numbers.reduce((total, n) => {
        total = parseInt(total)
        return typeof n === 'number' ? total -= parseInt(n): total
    })
}

// multiply
function mult(...numbers) {

    // if input is array
    numbers = numbers.flat()

    // convert to number
    if(numbers.length === 1) return +`${numbers}`

    return numbers.reduce((total, n) => {
        total = parseInt(total)
        return typeof n === 'number' ? total *= parseInt(n): total
    })
}

// divide
function divide(...numbers) {

    // if input is array
    numbers = numbers.flat()

    // convert to number
    if(numbers.length === 1) return +`${numbers}`

    return numbers.reduce((total, n) => {
        total = parseInt(total)
        return typeof n === 'number' ? total /= parseInt(n): total
    })
}

console.log(divide([1, [234],3]))