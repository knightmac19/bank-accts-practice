// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let lowestPositiveAcct = [];
  let currentLowest = array[0].balance;

  for (var i = 0; i < array.length; i++) {
    if (array[i].balance > 0 && array[i].balance < currentLowest) {
      // resetting array b/c directions say not to use .pop()
      lowestPositiveAcct = [];
      lowestPositiveAcct.push(array[i]);
    }
  }

  return lowestPositiveAcct;

  // note: this doesn't address edge case where first index of array has balance of 0 but it passed the tests
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
