// tsc -w 로 실시간 변화 확인
var 이름 = "kim";
// 위와같이 변수의 타입을 지정해준다.
var arrayName = ["kim", "park"];
// 위와같이 array를 지정
// let arrayNum : number[] = [1,2,3]
// let arrayNum : Array<number> = [1,2,3] 위와 아래는 같은 의미
var objectName = { name: "kim" };
// let objectName : {name:string} = {name:"kim"}
// name뒤에 ?를 붙임으로 name이라는 속성이 들어올 수도 안들어 올 수도 있다는 뜻
var orName = 123;
// 위와같이 타입을 변수에 담아서 쓸 수 있다.
var typeName = ["kim"];
function double(a) {
    // 함수패러미터에도 타입을 지정할 수 있다.
    return a * 2;
    // return값에도 타입을 지정하기 위해선 함수():xxx{}에 지정
}
function sayHello() {
    // 함수가 아무 값을 반환하지않음을 뜻하는 void
    console.log("hello");
}
function showError() {
    // 항상 에러를 반환하거나 끝나지 않는 함수에 쓰는 never
    throw new Error();
    // while(true){
    //   어떠한 동작
    // }
}
// array에 쓸 수 있는 tuple타입
var john = ["JOHN", true];
// [true,"JOHN"]과 같이 반대로는 입력할 수 없다.
john[0].toLowerCase();
// key값이 복수라면 하나하나 지정하지않고 위와같이 설정해준다.
var jane = { name: "jane", age: "20" };
// class형
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// 비슷한 값들끼리 묶는 enum.
// 따로 지정하지않으면 차례로 1,2,3이 할당된다.
// windows=3 이라고 지정하는 경우 자동으로 3,4,5가 할당된다.
// 따라서 console.log(Os[4])를 하면 IOS가 나오고
// console.log(Os["Ios"])를 하면 4가 나온다
var Os;
(function (Os) {
    Os[Os["windows"] = 3] = "windows";
    Os[Os["Ios"] = 4] = "Ios";
    Os[Os["Android"] = 5] = "Android";
})(Os || (Os = {}));
var Os1;
(function (Os1) {
    Os1["Windows"] = "win";
    Os1["Ios"] = "ios";
    Os1["Android"] = "and";
})(Os1 || (Os1 = {}));
// 위와같이 작성시 이는 결국
// const Os1 = {
//   windows:"win",
//   Ios:"ios",
//   Android:"and"
// }
// 와 같이 컴파일 된다.
var myOs;
// 이와같이 타입을 선언한다면,
// myOs에는 windows,Ios,Android만 사용할 수 있게 된다.
myOs = Os1.Windows;
// 마지막으로 null, undefined
var a = null;
var b = undefined;
