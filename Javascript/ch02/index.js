const firstName = "gildong";
const lastName = "HONG";
console.log(firstName);
console.log(lastName);
console.log(lastName+" "+firstName);

const fullName = lastName + " " + firstName;
console.log(fullName);

// 대문자 소문자
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

const sendMoney = "money,10000,receiver,jihye,sender,cos";
console.log(sendMoney);

console.log(sendMoney.split(","));
//split = 나눠서 배열에 담음

const data = sendMoney.split(",");
console.log(data);
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);
console.log(data[5]);

console.log(1+2); //숫자끼리 연산
console.log(1+"2"); //숫자와 문자 연산