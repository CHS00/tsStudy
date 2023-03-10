// Literal types
const userName1 = "Bob";
// const이므로 "bob"외의 값을 가질수 없고
let userName2 = "Tom";
// let이므로 언제든 다른값으로 바뀔 수 있으므로, string으로 타입이 분류된다.
// userName1처럼 정해진 string값을 가진것을 리터럴 타입이라고 한다.

type Job = "police"|"developer"|"teacher";

interface User{
  name:string;
  job:Job;
};

const user:User={
  name:"Bob",
  job:"developer"
}

// Union type
interface HighSchoolStudent{
  name:string;
  grade:1 | 2 | 3; // |를 union타입이라한다.
};

interface Car {
  name:"car"; //이것은 string타입이 아니라, car타입임에 유의
  color:string;
  start():void;
}

interface Mobile {
  name:"mobile";
  color:string;
  call():void;
}

function getGift(gift:Car|Mobile){
  console.log(gift.color);
  // 단순히 gift.start();로 입력할 시, Mobile에는 start가 없으므로 에러가 발생한다.
  if (gift.name==="car") {
    gift.start();
  }else{
    gift.call();
  }
}

// Intersection types(교차타입) (and를 의미함)
interface Car2 {
  name:string;
  start():void;
}

interface Toy {
  name:string;
  color:string;
  price:number;
}

const toyCar:Car2&Toy={
  name:"타요",
  start() {},
  color:"blue",
  price:1000
}