const arr = [1, 2, 4, 7, 10];
 function findAverage(arr) {
    return  arr.length === 0? 0: arr.reduce((a, b) => (a + b)) / arr.length;
}
console.log(findAverage([1, 2, 4, 7, 10]));


