let arr = [1, 6, 12, 7];

function filterArray(arr, deletePattern) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!deletePattern(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
    
function canDelete(number) {
    return number <= 5;
}
    
const filteredArray = filterArray(arr, canDelete);
console.log(filteredArray);