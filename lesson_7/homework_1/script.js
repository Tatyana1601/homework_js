const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
const result_1 = users.every((item) => item.length > 4);
console.log(result_1);

const result_2 = users.some((item) => item.length > 4);
console.log(result_2);

const result_3 = users.map((item) => item.toUpperCase());
console.log(result_3);