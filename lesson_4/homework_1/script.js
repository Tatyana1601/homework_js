
function maxNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return false;
    }
}
const result_1 = maxNumber(15, 5);
console.log(result_1);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
const result_2 = checkAge(18);
console.log(result_2);

function cutString(text, mLenght) {
    let result;
    if (text.length > mLenght) {
        result = `${text.slice(0,mLenght)}...`
    }
    else {
        result = text;
    } 
    console.log(result);
}
cutString('Hello javascript', 5);

function checkWord(str, word) {
    if (str.includes(word)) {
        return true;
    }else{
        return false;
    }
}
const result_3 = checkWord('Hello javascript', 'Hello');
console.log(result_3);