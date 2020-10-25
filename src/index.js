module.exports = function reverse (n) {
    let result = Math.abs(n).toString().split("").reverse().join("")
    reverseInt= +result;
return reverseInt;
}
