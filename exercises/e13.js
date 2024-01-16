// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let depositsArr = [];

  for (var i = 0; i < array.length; i++) {
    let accountSum = 0;

    if (!array[i].deposits) {
      depositsArr.push(array[i]);
    }

    if (array[i].deposits) {
      for (var j = 0; j < array[i].deposits.length; j++) {
        accountSum += array[i].deposits[j];
      }

      if (accountSum < 2000) {
        depositsArr.push(array[i]);
      }
    }
  }

  return depositsArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
