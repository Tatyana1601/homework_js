const maxNumber = (a, b) => {
    return a > b;
}
const result_1 = maxNumber(15, 5);
console.log(result_1);

const checkAge = (age) => {
    return age >= 18;
}
const result_2 = checkAge(19);
console.log(result_2);

const cutString = (text, mLenght) =>{
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

const checkWord = (str, word) => {
    return str.includes(word);
}
const result_3 = checkWord('Hello javascript', 'Hello');
console.log(result_3);