// keyof
interface User {
  id:number;
  name:string;
  age:number;
  gender:"m"|"f";
}

// keyof키워드 사용시, 위 키 값들을 union형태로 받을 수 있음.
type UserKey = keyof User; // "id"|"name"|"age"|"gender" 와 동일
const uk : UserKey = "id"


// Partial<T>
// Partial은 프로퍼티를 모두 옵션으로 바꿔준다
let admin:Partial<User> = {
  // 원래는 아래만 입력시 User의 age와 gender가 없어 에러가 나지만
  // User를 Partial로 감싸줌으로 옵션으로 바꾸었음.
  id:1,
  name:"Bob",
  // job:"teacher"
  // 없는 프로퍼티를 사용하는것도 에러
}


// Required<T>
// Required는 모든 프로퍼티를 필수로 바꿔 줌
interface User2 {
  id:number;
  name:string;
  age?:number;
}

let admin2:Required<User2> = {
  id:1,
  name:"Bob",
  age:10 // age? 이므로 옵션이지만 Required로 감싸줌으로 age는 필수값이 됨.
}


// readonly<T>
// 읽기전용으로 바꿔 줌
let admin3:Readonly<User2>={
  id:1,
  name:"Bob",
  age:10
};
// admin3.id=3
// Readonly로 감싸줌으로 위와같이 값을 바꾸면 에러가 도출된다.


// Record<K,T> (K=key, T=type)
// interface Score{
//   1:"A"|"B"|"C"|"F";
//   2:"A"|"B"|"C"|"F";
//   3:"A"|"B"|"C"|"F";
//   4:"A"|"B"|"C"|"F";
// }
type Grade = "1"|"2"|"3"|"4";
type Score = "A"|"B"|"C"|"F";
const score:Record</*"1"|"2"|"3"|"4","A"|"B"|"C"|"F"*/Grade,Score> = {
  1:"A",
  2:"C",
  3:"F",
  4:"B"
}

interface User3{
  id:number;
  name:string;
  age:number;
}
function isValid(user:User){
  const result:Record<keyof User3,boolean> ={
    id:user.id>0,
    name:user.name !== "",
    age:user.age>0
  }
  return result
}


// Pick<T,K>
// T타입에서 K프로퍼티만 골라서 사용
interface User4 {
  id:number;
  name:string;
  age:number;
  gender:"m"|"f";
}

const admin4: Pick<User4,"id"|"name">={
  id:1,
  name:"Bob",
}

// Omit<T,K>
// T타입에서 K프로퍼티만 제외시켜 사용(Pick과 반대)
const admin5: Omit<User4,"id"|"name">={
  age:10,
  gender:"m"
}


// Exclude<T1,T2>
// Omit과 비슷함 T1에서 T2를 제외하여 사용
type T1 = string|number|boolean
type T2 = Exclude<T1,number|string> // T2에는 boolean만 남게 된다.


// NonNullable<Type>
// null과 undefined를 제외한 타입을 생성함.
type T3 = string|null|undefined|void
type T4 = NonNullable<T3> // T4에는 string과 void만 남게 된다.