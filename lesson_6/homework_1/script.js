const listFruits = ['apple', 'avocado', 'banana', 'kiwi', 'lime'];
listFruits.forEach(item => console.log(item));

const result = listFruits.length;
console.log(result);

console.log(listFruits.includes('lime'));

const userNames = ['Ivan', 'Alexander', 'Mia', 'Isabella', 'Eva'];
const result_3 = userNames.find((item) => item.length > 4);
console.log(result_3);

const result_4 = userNames.filter(item => item.length > 4);
console.log(result_4);