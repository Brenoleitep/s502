function snapCrackle(maxValue) {
    let counter = ''
    for (i = 1; i <= maxValue; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            counter += "SnapCrackle, "
        }
        else if (i % 2 !== 0) {
            counter += "Snap, "
        } 
        else if (i % 5 === 0) {
            counter += "Crackle, "
        } 
        else if (i % 5 !== 0 && i % 2 === 0) {
            counter += i + ", " 
        }
    }
    return counter
}
console.log(snapCrackle(12))  