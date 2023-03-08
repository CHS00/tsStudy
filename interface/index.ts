// let user : object;
// user = {
//   name: "xx",
//   age: 30
// }
// console.log(user.name)
// 위와 같이 작성 시, user.name을 인식하지못한다.
// object에는 특정 속성값에 대한 정보가 없기 때문.

type Score ="A"|"B"|"C"|"F"
// 이와같은 경우 interface를 사용
interface User{
  name:string;
  age:number;
  gender?:string;
  // 속성을 옵션(입력을 해도 안해도 상관없는 경우엔 "?"추가)으로 주는 경우
  readonly birthYear:number;
  // readonly를 붙여 읽기 전용으로

  // 학년별 성적등을 만들고싶은 경우.
  // (string으로 하기엔 너무 간단하므로 문자열 리터럴 타입으로)
  [grade:number]:Score;
}
let user:User = {
  name:"xx",
  age:20,
  birthYear:2000,

  1:"A",
  2:"B"
}

user.age=10;
user.gender="male"
// user.birthYear=1990
// 읽기 전용 속성이므로 수정할 수 없다.
console.log(user.name);

// interface로는 함수도 정의 할 수 있다.
interface Add{
  (num1:number,num2:number):number
  // (인자값):리턴값
}

const add:Add=function(a,b){
  return a+b
}

interface IsAdult{
  (age:number):boolean;
}
const isAdult:IsAdult =(a)=>{
  return a>19
}
isAdult(31) //true


// interface로는 class도 정의할 수 있다.
// 이때는 implements라는 키워드를 사용한다.
interface Car {
  color:string;
  wheels:number;
  start():void;
}

class Bmw implements Car{
  color;
  wheels:4;
  constructor(c:string){
    this.color = c;
  }
  start(){
    console.log("go")
  }
}

const b= new Bmw("green");
console.log(b);
// Bmw:{"wheels":4,"color":"green"}
b.start();
// go


// interface를 확장할 때는 extends라는 키워드 사용.
// 기존 interface가 가지고있던 속성들을 그대로 받으면서 새로운 속성을 추가 해 줄 수 있다.
interface Benz extends Car{
  door:number;
  stop():void;
}

const benz:Benz ={
  door:5,
  color:"red",
  wheels:4,
  start(){
    console.log("go..")
  },
  stop() {
    console.log("stop")
  },
}

// extends로의 확장은 여러개도 동시에 할 수 있다.
interface Toy {
  name : string;
}

interface ToyCar extends Car,Toy{
  price:number
}