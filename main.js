// 1-masala
let numbers = [-60, 10, 20, 40, -70, -30, -50, 90];

function countNumbers(numbers) {
  let neg = 0;
  let pos = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      neg += numbers[i];
    } else {
      pos++;
    }
  }
  return [pos, neg];
}

let result = countNumbers(numbers);

console.log(result);

// 2-masala
const palindromeNamber = 1222222;
const palindromeString = palindromeNamber.toString();
const namberSplit = palindromeString.split("");

function polindromeCheck() {
  const reverse = namberSplit.reverse();
  const collect = reverse.join("");
  if (reverse == collect) {
    console.log(true);
  } else {
    console.log(false);
  }
}

polindromeCheck(namberSplit);

// 3-masala
let leapYear = 2001;

function leapYearFind(year) {
  let result;
  year = leapYear;
  if (year % 400 == 0) {
    result = "Kabisa yili";
  } else if (year % 100 == 0) {
    result = "Kabisa yili emas";
  } else if (year % 4 == 0) {
    result = "Kabisa yili";
  } else {
    result = "Kabisa yili emas";
  }
  console.log(result);
}

leapYearFind();

// 4-masala
const array = [-60, 10, 20, 40, -70, -30, -50, 90];

function negSum(namber) {
  console.log(namber.filter((negatives) => negatives < 0));
}

negSum(array);
