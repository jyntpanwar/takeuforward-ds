function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function reverse(arr, i, n) {
    if (i >= n/2)
        return;
    swap(arr, i, n-i-1);
    reverse(arr, i + 1, n);
}

const array = [1,2,3,4,5,6,7,8,9,10];
reverse(array, 0, array.length);
console.log(array);