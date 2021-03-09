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

// return amount from percentage
function percentOf(percent, total) {
    let result = +total * +percent / 100

    return result
}

// return percentage from amount
function percent(count, total, returnStr = false) {
    let result = 100 / +total * +count

    if(!returnStr) return result

    return `${result}%`
}

// console.log(percent(15, 100, true))