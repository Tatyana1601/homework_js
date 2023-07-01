const text = prompt('Введіть будь-який довільний текст');
const mLenght = +prompt('Вкажіть максимальну довжину рядка');
let result;
if (text.length > mLenght) {
    result = `${text.slice(0,mLenght)}...`
}
else {
    result = text;
}
console.log(result);
