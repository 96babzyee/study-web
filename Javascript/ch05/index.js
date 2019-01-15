//배열
const num = [1,2,3,4,5];
console.log(typeof num);
console.log(num);
console.log(num[0]);
console.log(num[4]);

//값 추가
num.push(6);
console.log(num);

//값 제거 (자료구조가 스택이라서 끝에서 부터 제거)
num.pop(6);
console.log(num);
num.pop();
console.log(num);
num.pop();
console.log(num);

//split
let str = "money:3000";
let arr = str.split(":");
console.log(arr);