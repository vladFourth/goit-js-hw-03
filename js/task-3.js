function filterArray(numbers, value) {
    let arr = [];
    for(let num of numbers) {
        if (num > value) {
            arr.push(num);
        }
    }
    return arr;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []