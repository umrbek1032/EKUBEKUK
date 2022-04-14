/* A function that counts the frequency of each element in an array. */
Array.prototype.frequencies = function () {
  var l = this.length,
    result = { all: [] };
  while (l--) {
    result[this[l]] = result[this[l]] ? ++result[this[l]] : 1;
  }

  for (var l in result) {
    if (result.hasOwnProperty(l) && l !== "all") {
      result.all.push([l, result[l]]);
    }
  }
  return result;
};
/**
 * The greatest common divisor of a set of numbers is the greatest common divisor of the first two
 * numbers in the set, and the greatest common divisor of the result and the next number in the set,
 * and so on.
 * @param arr - an array of integers
 * @returns The greatest common divisor of all the numbers in the array.
 */
function EKUB(...arr) {
  let n = arr.length;
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    result = gcd(arr[i], result);
    if (result == 1) return 1;
  }
  return result;
}
/**
 * The function takes an array of integers and returns the greatest common divisor of all the integers
 * in the array.
 * @param arr - an array of integers
 * @returns The greatest common divisor of all the numbers in the array.
 */
function EKUB2(arr) {
  function gcd(a, b) {
    if (a == 0) return b;
    return gcd(b % a, a);
  }

  let n = arr.length;
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    result = gcd(arr[i], result);

    if (result == 1) {
      return 1;
    }
  }

  return result;
}
/**
 * The greatest common divisor of all the numbers in the array is the greatest common divisor of the
 * first number and the greatest common divisor of the rest of the numbers.
 * @param arr - an array of integers
 * @returns The greatest common divisor of all the numbers in the array.
 */
function EKUK(...arr) {
  const gcd2 = (a, b) => {
    if (!b) return b === 0 ? a : NaN;
    return gcd2(b, a % b);
  };
  const lcm2 = (a, b) => {
    return (a * b) / gcd2(a, b);
  };
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n = lcm2(arr[i], n);
  }
  return n;
}
/**
 * It returns the least common multiple of an array of numbers.
 * @param arr - an array of integers
 * @returns The least common multiple of all the numbers in the array.
 */
function EKUK2(arr) {
  const gcd2 = (a, b) => {
    if (!b) return b === 0 ? a : NaN;
    return gcd2(b, a % b);
  };
  const lcm2 = (a, b) => {
    return (a * b) / gcd2(a, b);
  };
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n = lcm2(arr[i], n);
  }
  return n;
}
/**
 * If a is 0, return b. Otherwise, return the GCD of b % a and a
 * @param a - The first number
 * @param b - the number of bits in the prime p
 * @returns The greatest common divisor of a and b.
 */
function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}
/**
 * If the number is undefined, return false. Otherwise, loop through all the numbers from 2 to the
 * number itself. If any of those numbers divide evenly into the number, return false. If none of them
 * do, return true
 * @param number - The number to check if it's prime.
 * @returns false
 */
function isPrime(number) {
  if (isPrime == undefined) return false;
  for (var i = 2; i < number; i++) if (number % i === 0) return false;
  return true;
}
/**
 * It takes a number and prints it out with a line underneath it.
 * @param number - The number you want to find the factors of.
 */
function showLastFactorsOf(number) {
  number = "" + number + "";
  try {
    document.write(number + " | " + number + "<br>1 <br><br>");
    console.log(number + " | " + number + "\n" + "1");
  } catch {
    console.log(number + " | " + number + "\n" + "1");
  }
}
/**
 * It takes a number, checks if it's prime, if it is, it shows the last factors of the number, if it
 * isn't, it divides the number by the prime factors until it reaches the last prime factor, then it
 * shows the last factors of the number.
 * @param number - The number you want to find the prime factors of.
 * @returns The prime factors of the number.
 */
function showPrimeFactorsOf(number) {
  number = Number(number);
  if (isPrime(number)) {
    showLastFactorsOf(number);
    return;
  }
  for (let primeFactor = 2; primeFactor < number; primeFactor++) {
    while (
      isPrime(primeFactor) &&
      number % primeFactor == 0 &&
      primeFactor != number
    ) {
      number = Number(number / primeFactor);
      try {
        document.write(number * primeFactor + " | " + primeFactor + "<br>");
        console.log(number * primeFactor + " | " + primeFactor);
      } catch {
        console.log(number * primeFactor + " | " + primeFactor);
      }

      if (number % primeFactor != 0) {
        primeFactor += 1;
      }
    }
  }
  showLastFactorsOf(number);
}
/**
 * For each item in the array, show the prime factors of that item.
 * @param arr - an array of numbers
 */
function showPrimeFactorsOfArray(arr) {
  for (item of arr) showPrimeFactorsOf(item);
}
/**
 * It takes a number and returns an array of prime numbers that are the prime multipliers of the
 * number.
 * @param number - The number you want to find the prime multipliers of.
 * @returns An array of prime numbers that are the prime multipliers of the number passed in.
 */
function calculatePrimeMultipliers(number) {
  let primeMultipliers = [];
  number = Number(number);
  if (isPrime(number)) {
    primeMultipliers.push(number);
    return primeMultipliers;
  }
  for (let primeFactor = 2; primeFactor < number; primeFactor++) {
    while (
      isPrime(primeFactor) &&
      number % primeFactor == 0 &&
      primeFactor != number
    ) {
      number = Number(number / primeFactor);
      primeMultipliers.push(primeFactor);
      if (number % primeFactor != 0) {
        primeFactor += 1;
      }
    }
  }

  primeMultipliers.push(number);

  return primeMultipliers;
}
/**
 * For each item in the array, if the new array doesn't already include that item, add it to the new
 * array.
 * @param arr - The array to remove duplicates from.
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
function removeDuplicateValues(arr) {
  let newArr = [];
  for (item of arr) if (!newArr.includes(item)) newArr.push(item);
  return newArr;
}
/**
 * It takes a string, and returns an array
 * @param str - The string to convert to an array.
 * @returns [1,2,3,4,5,6,7,8,9,10]
 */
function arrFrom(str) {
  return eval("[" + str + "]");
}
/**
 * It takes an array of numbers and returns a string of the prime multipliers of each number in the
 * array
 * @param arr - an array of numbers
 * @returns a string of prime multipliers.
 */
function findPrimeMultipliers(arr) {
  arr = arrFrom(arr);
  let output = "";
  let primeMultipliers = 0;

  for (let num of removeDuplicateValues(arr)) {
    if (!isPrime(num) || num != undefined) {
      primeMultipliers = calculatePrimeMultipliers(num);
      clearPrimeMultipliers = removeDuplicateValues(primeMultipliers);
      output += num + "=";
      for (let i of clearPrimeMultipliers)
        output += i + "<sup>" + primeMultipliers.frequencies()[i] + "</sup>*";
      output = output.slice(0, output.length - 1) + "<br>";
    } else if (isPrime(num) && num != undefined)
      output += num + "=" + num + "<sup>1</sup><br>";
  }
  return output;
}
/**
 * It takes an array as an argument, and returns a new array with all the undefined values removed.
 * @param arr - The array to remove undefined values from.
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
function removeUndefinedValues(arr) {
  let newArr = [];
  for (let item of arr) {
    if (item != undefined) {
      newArr.push(item);
    }
  }
  return newArr;
}
/* It's asking the user to enter numbers seperated by comma(,) and then it's removing the undefined
values from the array, removing the duplicate values from the array, converting the string to an
array, showing the prime factors of the array, and then it's writing the prime multipliers of the
array, the EKUB of the array, and the EKUK of the array to the document. */
let numbers_ = prompt("Enter numbers seperated by comma(,) : ");
let numbers = removeUndefinedValues(removeDuplicateValues(arrFrom(numbers_)));
showPrimeFactorsOfArray(numbers);
if (numbers.join(",").trim() !== "")
  document.write(
    findPrimeMultipliers(numbers) +
      "EKUB(" +
      numbers.join(",") +
      ")=" +
      EKUB2(numbers) +
      "<br>" +
      "EKUK(" +
      numbers.join(",") +
      ")=" +
      EKUK2(numbers) +
      "<br>"
  );
else {
  alert("Must enter numbers seperated by comma(,) :");
  window.open(document.URL);
}
