function forLoop(array) {
    // adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times
    for (var i=0; i < 25; i++ ) {
        array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }
    return array
}

function whileLoop(n) {
    var i = n
    while ( i > 0 ) {
        console.log(`${i}...`)
        i--
    }
    return 'done'
}
 
