// let user : object;
// user = {
//   name: "xx",
//   age: 30
// }
// console.log(user.name)
// 위와 같이 작성 시, user.name을 인식하지못한다.
// object에는 특정 속성값에 대한 정보가 없기 때문.
var user = {
    name: "xx",
    age: 20,
    birthYear: 2000,
    1: "A",
    2: "B"
};
user.age = 10;
user.gender = "male";
// user.birthYear=1990
// 읽기 전용 속성이므로 수정할 수 없다.
console.log(user.name);
var add = function (a, b) {
    return a + b;
};
var isAdult = function (a) {
    return a > 19;
};
isAdult(31); //true
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log("go");
    };
    return Bmw;
}());
var b = new Bmw("green");
console.log(b);
// Bmw:{"wheels":4,"color":"green"}
b.start();
var benz = {
    door: 5,
    color: "red",
    wheels: 4,
    start: function () {
        console.log("go..");
    },
    stop: function () {
        console.log("stop");
    },
};
