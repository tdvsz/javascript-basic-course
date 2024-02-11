let arr = [1, 40, -5, 10, 0];

//Вывод массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Сортировка (метод пузырька)
let t;
for (let x = 0; x < arr.length; x++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            t = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = t;
        }
    }
}

console.log('\n')

//Вывод отсортированного массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}