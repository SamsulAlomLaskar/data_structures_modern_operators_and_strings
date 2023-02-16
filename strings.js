const airLine = "Air India";
const plane = "A720";
console.log(airLine.slice(4, 6));
console.log(airLine.slice(0, airLine.indexOf(" ")));
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

const checkMiddleSeat = function (seat) {
  const st = seat.slice(-1);
  if (st === "B" || st === "E") console.log("You got a middle seat 😒");
  else console.log("You got a side seat 😁");
};
checkMiddleSeat("1E");
checkMiddleSeat("4B");
checkMiddleSeat("7A");

//? When we use any string methods in JS the JS (BTS) converts the string into an object & then uses the methods (are called) & the process is called boxing (it takes the string & put it in a box which is the object) Refer the below code in browser
console.log(new String("Samsul"));
console.log(typeof new String("Samsul"));

const passenger = "sAmSUl";

const email = "COntact@Samsul.Alom  \n";
const normalEMail = email.toLowerCase().trim();
console.log(normalEMail);

const [fName, lName] = "Samsul Alom".split(" ");
console.log(fName, "FF", lName, "LLL");

//* Padding a string

const message = "Go to gate 20";
console.log(message.padStart(15, "Hi "));

//? Mask number

const maskCard = (cardNumber) => {
  const str = cardNumber + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCard(9876543223));
console.log(maskCard(8765432933));

const msg = "Bad weather......All the departures delayed";
console.log(msg.repeat(5));

let someData = `underscore_case
first_name
some_variable
calculate_AGE
delayed_departure`;

const convertToUpperCase = (texts) => {
  const rowData = texts.split("\n");
  //   console.log(rowData);
  for (const [ind, item] of rowData.entries()) {
    const [fName, sName] = item.toLowerCase().split("_");
    const op = `${fName}${sName.replace(sName[0], sName[0].toUpperCase())}`;
    // console.log(typeof ind);
    console.log(`${op.padEnd(20)}${"✔".repeat(Number(ind + 1))}`);
  }
};
convertToUpperCase(someData);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const generateCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  //   console.log(from, "FROM");
  const op = ` ${type.includes("_Delayed") ? "🔴" : ""} ${type
    .replace("_", " ")
    .replace("_", " ")} ${generateCode(from)} to ${generateCode(
    to
  )} (${time.replace(":", "h")})`.padStart(42);
  console.log(op, "");
  //   console.log(to, "TO");
  //   console.log(time, "TIME");
}
