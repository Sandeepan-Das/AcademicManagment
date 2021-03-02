//students are categorized according to branch then year

var id = "B219057";//demo id
var str = id.toUpperCase();

var b = parseInt(str.charAt(1));
// console.log(branches[b - 1]);
var yr = parseInt(str.substr(2, 2));
if (yr === 20) {
    yr = 0;
}
else if (yr === 19) {
    yr = 1;
}
else if (yr === 18) {
    yr = 2;
}
else {
    yr = 3;
}

var idno = parseInt(str.substr(5, 2));

var first = [];
var second = [];
var third = [];
var fourth = [];

var cse = [first, second, third, fourth];
var eee = [first, second, third, fourth];
var etc = [first, second, third, fourth];
var it = [first, second, third, fourth];
var ce = [first, second, third, fourth];
var branches = [cse, eee, etc, it, ce];

console.log(branches[b - 1][yr][idnno]);
