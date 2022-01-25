module.exports = function reverse (n) {
    const number = Math.abs(n).toString();
    return number.split("").reverse().join("");
}