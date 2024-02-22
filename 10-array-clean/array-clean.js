let arr = [1, 6, 12, 7];

function arrayOfNumbers(arr, deletingElements) {
    const arr2 = [];
    for (const el of arr) {
        if (el <= 5) {
            arr2.push(deletingElements(el));
        }
    }
    return arr2;
}

function deletingElements(el) {
    return el <= 5;
}

const result = arrayOfNumbers(arr, deletingElements);
console.log(result);