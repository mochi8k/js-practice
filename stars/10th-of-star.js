/*
    10の倍数のみ*ではなく★を出力する.
*/

function sum(num) {
    return Array.from(new Array(num), (_, i) => ++i).reduce((prev, current) => {
        return prev + current
    }, 0);
}

function replace(anyString, newValue, multipleValue) {
    return anyString.split('').map((v, i) => {
        if ((i + 1)%multipleValue === 0) {
            return newValue
        }
        return v;
    }).join('');
}

var numberOfLines = 100;
var numberOfStars = Array.from(new Array(numberOfLines), (_, i) => ++i);

var starString = numberOfStars.reduce((prev, current) => {
    return prev + '*'.repeat(current);
}, '');

var replacedString = replace(starString, '★', 10);

numberOfStars.forEach((v, i) => {
    console.log(replacedString.substr(sum(i), v));
});
