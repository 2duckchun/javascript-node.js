// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a;
a = +a;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나올까?
console.clear();

console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text');
console.log(+undefined);
console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환함.