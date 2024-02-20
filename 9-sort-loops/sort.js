let arr = [1, 40, -5, 10, 0];

let newArr = [...arr] // клонируем массив

function sort(newArr) {
    for (let x = 0; x < newArr.length; x++) {
        for (let i = x; i < newArr.length; i++) {
            if (newArr[x] > newArr[i]) {
                let t = newArr[x];
                newArr[x] = newArr[i];
                newArr[i] = t;
            }
        }
    }
    return newArr;
}

console.log(arr);
console.log(sort(newArr));