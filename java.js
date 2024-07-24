function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(3, 5))

function hoursIntoSeconds(hour) {
    return (hour * 60) * 60  
}
console.log(hoursIntoSeconds(10))

function calcPerimeter(h, w) {
    return 2 * (h + w)
}
console.log(calcPerimeter(2, 9))

function calcTriArea(base, height) {
    return (base * height) / 2
}
console.log(calcTriArea(20, 20))

function appendFrontend(word) {
    return word + 'Frontend'
}
console.log(appendFrontend('Orange'))

function sumGreaterThan100(num, wum) {
    if (num + wum > 100)
        return true
    else
        return false
}
console.log(sumGreaterThan100(10, 70))

function lessThanOrEqualZero(num3) {
    if (num3 <= 0)
        return true
    else
        return false
}
console.log(lessThanOrEqualZero(3))

function oppositeBool(bool) {
    return !bool
}
console.log(oppositeBool(false))

function isNotZero(userIn) {
    if (userIn != 0)
        return true
    else
        return false
}
console.log(isNotZero(3))

function calcRemainder(in1, in2) {
    return in1 % in2
}
console.log(calcRemainder(7, 8))

function isOdd(in3) {
    let remainder = in3 % 2
    if (remainder != 0)
        return true
}
console.log(isOdd(9))

function boolInteger(in4) {
    if (in4 % 2 == 0)
        return 1
    else
        return -1
}
console.log(boolInteger(6))

function isLoggedInAndSubscribed(logged, subbed) {
    return (logged == 'LOGGED_IN') && (subbed == 'SUBSCRIBED')
}
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))