// generate random number 
// uses the default random method

function random(range, negative) {
    // generate random positive integer
    // if negative is true -range <= random <= range

    return negative ? Math.floor(Math.random() * range) - Math.floor(Math.random() * range) 
    : Math.floor(Math.random() * range)
}

// check numbers by floating points

function isFloat(num) {
    let upperBound = Math.ceil(num)
    let lowerBound = Math.floor(num)

    // if the upperbound is greater than the lowerbound => fraction
    // if both are equal => whole number
    return upperBound > lowerBound
}