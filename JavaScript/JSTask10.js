function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const array = [10, 9, 6, 1, 5, 2];
const sortedArray = sortDescending(array);
console.log("Sorted array in descending order:", sortedArray);
// The sort() method is used to sort the array. The comparison function (a, b) => b - a sorts the elements in descending order.
