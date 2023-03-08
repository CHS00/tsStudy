function add(num1:number,num2:number):void{
  // return num1+num2;
  console.log(num1+num2)
}

function hello(name?:string){
  return `hello ${name || "world"}`
}

function hello2(name="world"){
  return `hello ${name}`
}

const result = hello();
const result2 = hello("sam");


function hello3(name:string,age?:number){
  if (age!==undefined) {
    return `hello ${name}. you are ${age}.`
  }else{
    return `hello ${name}.`
  }
}
console.log(hello3("sam",30))
// 만약 두번째 파라미터인 age를 첫번째 파라미터로 옮겨 옵션화 하고싶다면,
// 당연히 age?:number를 앞으로 옮기는것만으로는 성립되지않고 아래와 같이 작성한다.
function hello4(age:number|undefined,name:string){
  if (age!==undefined) {
    return `hello ${name}. you are ${age}.`
  }else{
    return `hello ${name}.`
  }
}
console.log(hello4(undefined,"sam"))

// 나머지매개변수
// reduce참고 https://tocomo.tistory.com/26
function add2(...nums : number[]){
  return nums.reduce((result,num)=>result+num,0);
}

// this
// interface User {
//   name:string;
// }

// const Sam:User ={name:"Sam"};

// function showName(){
//   console.log(this.name)
// }

// const a = showName.bind(Sam);
// a();