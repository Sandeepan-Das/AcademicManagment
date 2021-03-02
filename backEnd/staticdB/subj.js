//students are categorized according to branch then year

function extract(params) {
  var str = params.toUpperCase();
  var b = parseInt(str.charAt(1));
  var yr = parseInt(str.substr(2, 2));
  if (yr === 20) {
    yr = "first";
  } else if (yr === 19) {
    yr = "second";
  } else if (yr === 18) {
    yr = "third";
  } else {
    yr = "fourth";
  }
  if (b == 1) {
    b = "CSE";
  } else if (b == 2) {
    b = "ETC";
  } else if (b == 3) {
    b = "EEE";
  } else if (b == 4) {
    b = "IT";
  } else if (b == 5) {
    b = "CE";
  }
  return {
    b,
    yr,
  };
}

module.exports = extract;

// // console.log(branches[b - 1]);

// var idno = parseInt(str.substr(5, 2));

// var first = [];
// var second = [];
// var third = [];
// var fourth = [];

// var cse = [first, second, third, fourth];
// var eee = [first, second, third, fourth];
// var etc = [first, second, third, fourth];
// var it = [first, second, third, fourth];
// var ce = [first, second, third, fourth];
// var branches = [cse, eee, etc, it, ce];

// console.log(branches[b - 1][yr][idnno]);
