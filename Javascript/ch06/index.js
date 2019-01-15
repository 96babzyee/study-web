// 오브젝트 - 배열 비교
// number, str, array(object), boolean, object, null

let soccer = {
    name:"축구",
    count:11,
    need:"공"
}

let people = {
    name:"cos",
    phone:"01022227777",
    address:"busan",
    age:50,
    hobby:["농구", soccer, "음악"]
}

console.log(people);
console.log(people.hobby[1].count); //soccer의 count
console.log(people.hobby[0]);

//오브젝트 = 사물
console.log(typeof people);

console.log(people.name);
console.log(people.phone);
console.log(people.address);
console.log(people.age);


let num1 = [1,2,3,4,5];
//배열은 키값이 정해져 있음

let num2 = {
    one:1,
    two:2,
    improtant:3,
    four:4,
    five:5
}
//object는 키값이 정해져 있지않음