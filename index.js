// Code your solutions in this file
// Function to create thank you messages for each name in the array
function writeCards(names, event) {
    // Use map to create a new array with thank you messages
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }

  // Function to count down from a given number to zero
  function countDown(number) {
    // Start at the provided number and count down to 0
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }