function falsyOrTruthy( elem1, elem2) {
    if (!elem1) {
        return elem1;
    }
    else {
        return elem2;
    }
}
console.log(falsyOrTruthy(0, 5));

function arrLength(arr){
    return arr.length
}
console.log(arrLength([4, 5, 6, 7]))

function lastElem(array) {
    return array[array.length -1]
}
console.log(lastElem([2,5,9]))

function arrSum(arrr) {
    let sum = 0
    for (let i = 0; i < arrr.length; ++i) {
        sum = sum + arrr[i]
    }
    return sum
}
console.log(arrSum([2, 3, 4]))

function progSum(num) {
    let sum1 = 0
    for (let i = 0; i <= num; ++i) {
        sum1 = sum1 + i
    }
    return sum1
}
console.log(progSum(4))

function calcTime(sec) {
    let mins = Math.floor(sec / 60)
    let secs = sec % 60
    if (mins >= 10 & secs >= 10) {
        return mins + ':' + secs
    }
    return '0' + mins + ':' + '0' + secs
}
console.log(calcTime(505))