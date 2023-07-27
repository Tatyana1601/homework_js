const smaller = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const result = smaller.reduce((a, c) => {
    if (c > 0) a[0] = a[0] + 1;
    if (c < 0) a[1] = a[1] + c;
    return a;
}, [0, 0]
)
console.log (result)