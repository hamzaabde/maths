// lcm

function lcm(...numbers) {
    const max = Math.max(...numbers)

    // runtime variables    
    let multiple = Math.abs(max)
    let i = 1
    let cond = true

    // the basic principle is to increment the greatest of the inputs by smallest
    // as long as the quotient of multiple and every input isn't a whole
    // if it we exit the loop setting condition variable to false
    do {
        if(numbers.every(n => isFloat(Math.abs(multiple / n)) === false)) {
            cond = false
        } else {
            multiple += i
        }
    } while(cond)

    return multiple
}


// GCF - Greatest Common Factor

function gcf(...numbers) {
    const min = Math.min(...numbers)

    // runtime variables    
    let factor = Math.abs(min)
    let i = 1
    let cond = true

    // oppisite of lcm
    do {
        if(numbers.every(n => isFloat(Math.abs(n / factor)) === false)) {
            cond = false
        } else {
            factor -= i
        }
    } while(cond)

    return factor
}


// check numbers by floating points

function isFloat(num) {
    let upperBound = Math.ceil(num)
    let lowerBound = Math.floor(num)

    // if the upperbound is greater than the lowerbound => fraction
    // if both are equal => whole number
    return upperBound > lowerBound
}

// generate random number 
// uses the default random method

function random(range, negative) {
    // generate random positive integer
    // if negative is true -range <= random <= range

    return negative ? Math.floor(Math.random() * range) - Math.floor(Math.random() * range) 
    : Math.floor(Math.random() * range)
}

// tests

// const nu = () => {
//     let arr = Array(random(12))
//     return arr.fill(1).map(n => random(100))
// }

// const test = Array(random(100)).fill(0).map(() => {
//     let number = nu()
//     return [number, lcm(...number)]
// })



// console.log(gcf(-100, 120))
// console.log(lcm(-100, 120))