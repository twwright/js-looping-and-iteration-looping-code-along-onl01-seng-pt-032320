// Code your solutions in this file

function writeCards(arr, event) {
  const thankYouCards = [];
  for (let i = 0; i < arr.length; i++) {
    thankYouCards.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards;
}

function countDown(int) {
  while (int > 0) {
    console.log(int--);
  }
  console.log(int)
}