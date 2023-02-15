/* var deadline = new Date("Jan 5, 2018 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 
*/

// let str = "pawan vanikar";
// let strAry = str.split("");

// let count = 0;

// for (let i = 0; i < strAry.length; i++) {
//   for (let j = 0; j < strAry.length; j++) {
//     if (strAry[i] === strAry[j]) count++;
//   }
// }

// JavaScript code for the above approach...

/* let countCharacters = (string) => {
        let count = 1;
        for (let i = 0; i < string.length; i++) {
            if (string[i] === string[i + 1]) {
                count++;
            } else {
                console.log(`${string[i]} occur ${count} times`);
                count = 1;
            }
        }
    };
    
    countCharacters(str); */

// console.log(count);

let ltrCount = [];

function count_occur(str) {
  // checking string is valid or not
  /* 
        if (str.length == 0) {
            console.log("Invalid string");
            return;
        }
        */
  //cor loop to iterate over string
  for (let i = 0; i < str.length; i++) {
    //variable counting occurrence
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j] && i > j) {
        break;
      }
      if (str[i] !== " ") {
        if (str[i] == str[j]) {
          count++;
        }
      }
    }
    if (count > 0) {
      console.log(`${str[i]} occurs ${count} times`);
      ltrCount.push({ ltr: str[i], count: count });
    }
  }
  console.log(ltrCount);
}

let str = "pawan vanikar";
console.log([...str], "...STR");
// test string
let obj = {};
for (let st of str) {
  //   console.log(obj[st], "ddd");
  obj[st] = obj.hasOwnProperty(st) ? obj[st] + 1 : 1;
}
console.log(obj);

const res = [...str].reduce((val, ind) => {
  val[ind] = val[ind] ? val[ind] + 1 : 1;
  return val;
});

console.log(res, "ERS");

var deadline = new Date("feb 10, 2023 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  console.log(days, hours, minutes, seconds, "Check");
  if (t < 0) clearInterval(x);
}, 1000);

const arr = [22, 45, 65, "Hey", 34, 77, 99, 8];
// let fnd = arr.find("Hey");
// let fl = arr.fill(100, 4);
// let sm = arr.some(100, 4);
// let evr = arr.every(45);
// console.log(evr);
