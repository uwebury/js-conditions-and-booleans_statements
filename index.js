console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

const passwordEntered =
  receivedPassword === SUPER_SECRET_PASSWORD
    ? "Welcome! You are logged in as Brunhilde1984"
    : "Access denied!";
console.log(passwordEntered);

// Part 2: Even / Odd
const number = 5;

const numberCheck = number % 2;

if (numberCheck === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 120;

if (numberOfHotdogs < 5) {
  console.log("2 euro");
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro");
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 100000) {
  console.log("1 euro");
} else {
  console.log("0.10 euro");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn…" : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + (name === "Peter" ? name : name) + "!";

console.log(greeting);
