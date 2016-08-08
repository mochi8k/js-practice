/* *をピラミッドで出力 */

var numberOfLines = 100;
var numberOfStars = Array.from(new Array(numberOfLines), (_, i) => ++i);

numberOfStars.forEach((count) => {
    console.log('*'.repeat(count));
});
