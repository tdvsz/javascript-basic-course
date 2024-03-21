"use strict"

function filterDateArray(array, fn) {
  return array
  .map((el) => {
    let parts = el.split('-');
    if (parts.length < 3) {
      parts = el.split('/');
      if (parts.length === 3) {
        const [day] = parts.splice(1, 1);
        parts.unshift(day);
      }
    }
    return parts;
  })
  .filter((parts) => fn(parts))
  .map((array) => array.join('-'));
}

// function filterDateArray(array, fn) {  
//   return array
//     .map(el => {
//       let parts = el.split('-').length < 3 
//         ? el.split('/')
//         : el.split('-');
      
//       if(parts.length === 3) {
//         const [day] = parts.splice(1, 1); 
//         parts.unshift(day);  
//       }
     
//       return parts;
//     })
//     .filter((parts) => fn(parts))
//     .map(parts => parts.join('-'))
// }

function isValidDate(array) {
  const [day, month, year] = array;
  const leapYear = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  if ((month == '02') && (day == 29) && !leapYear) return false;
  if ((day > 0 && day < 31) && (month > 0 && month < 12) && (year > 1000 && year < 9999)) return true;
}

const stringArray = [
  '10-02-2022',
  'тест',
  '11/12/2023',
  '00/13/2022',
  '41/12/2023',
  '02/29/2023',
  '02/29/2024',
  'tt/11/20ts',
  '012/011/20ts',
  '29-07-2024'
];

const resultArray = filterDateArray(stringArray, isValidDate)
console.log(resultArray); // [ '10-02-2022', '12-11-2023', '29-02-2024' ]