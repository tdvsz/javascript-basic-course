let arr = [1, 40, -5, 10, 0];

console.log(sort(arr))

function sort(arr) {
    for (let x = 0; x < arr.length; x++) {
        for (let i = x; i < arr.length; i++) {
            if (arr[x] > arr[i]) {
                let t = arr[x];
                arr[x] = arr[i];
                arr[i] = t;
            }
        }
    }
    return arr;
}