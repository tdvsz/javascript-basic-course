const adressLat = 10;
const adressLong = 5;
const positionLat = 15;
const positionLong = 10;

let distance = ((adressLat - positionLat) ** 2 + (adressLong - positionLong) ** 2) ** 0.5;
console.log(distance)