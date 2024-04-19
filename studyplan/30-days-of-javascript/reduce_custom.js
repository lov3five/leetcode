const reduce = (arr, callback, initValue) => {
    let acc = (initValue === undefined ? arr[0] : initValue);

    let startIndex = (initValue === undefined ? 1 : 0);
    
    for (let i = startIndex; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }
    return acc
}

// Test
const array1 = [1, 2];

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;

const result = reduce(array1, (acc, curr) => acc + curr, initialValue);
console.log(result); // 10