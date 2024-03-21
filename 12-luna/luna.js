function CardCheck(cardNumber) {
    let strippedNumber = cardNumber.replace(/-/g, '').replace(/\s/g, '');
    let cardDigits = strippedNumber.split('').map(Number);
    cardDigits.reverse();
    for (let i = 0; i < cardDigits.length; i++) {
      if (i % 2 !== 0) {
        cardDigits[i] *= 2;
        if (cardDigits[i] > 9) {
          cardDigits[i] -= 9;
        }
      }
    }
    let sum = cardDigits.reduce((acc, curr) => acc + curr, 0);
    return sum % 10 === 0;
}
  
let cardNumber = "4627-1001-0165-4724";
console.log(CardCheck(cardNumber));