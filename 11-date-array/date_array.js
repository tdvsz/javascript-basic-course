function filterDates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (isValidDate(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function isValidDate(dateString) {
    let dateParts = dateString.split(/[/-]/);
    if (dateParts.length !== 3) {
      return false;
    }
    let day = Number(dateParts[0]);
    let month = Number(dateParts[1]);
    let year = Number(dateParts[2]);
  
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
  let filteredArr = filterDates(arr);
  console.log(filteredArr);