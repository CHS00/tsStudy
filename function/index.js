function add(num1, num2) {
    // return num1+num2;
    console.log(num1 + num2);
}
function hello(name) {
    return `hello ${name || "world"}`;
}
function hello2(name = "world") {
    return `hello ${name}`;
}
const result = hello();
const result2 = hello("sam");
function hello3(name, age) {
    if (age !== undefined) {
        return `hello ${name}. you are ${age}.`;
    }
    else {
        return `hello ${name}.`;
    }
}
console.log(hello3("sam", 30));
// 만약 두번째 파라미터인 age를 첫번째 파라미터로 옮겨 옵션화 하고싶다면,
// 당연히 age?:number를 앞으로 옮기는것만으로는 성립되지않고 아래와 같이 작성한다.
function hello4(age, name) {
    if (age !== undefined) {
        return `hello ${name}. you are ${age}.`;
    }
    else {
        return `hello ${name}.`;
    }
}
console.log(hello4(undefined, "sam"));
// 나머지매개변수
// reduce참고 https://tocomo.tistory.com/26
function add2(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
this;
const Sam = { name: "Sam" };
function showName(age, gender /*this:User*/) {
    // 아래의 this의 타입이 결정되지 않았으므로 에러가 발생하기에,
    // 함수의 매개변수에 this와 타입을 설정해 준다.
    // 함수에 매개변수가 필요한 경우 제일 앞에 this타입을 설정해준다.
    // this다음부터 순서대로 적용됨.
    console.log(this.name);
}
const a = showName.bind(Sam);
a();
// 아래와 같이만 설정할 경우 아래 const xx의 타입의 리턴이
// User2와 string어디로 갈 지 모르기 때문에,
// 위와같이 함수 오버로드를 통해 타입을 결정시켜준다.
// (66행 : join함수의 age변수가 number라면 User2로 리턴하시오.)
function join(name, age) {
    if (typeof age === "number") {
        return {
            name,
            age
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
const sam = join("Sam", 30);
const jane = join("Jane", "30");
//const jane:User2 =join("Jane","30");
// 결과적으로 위와같이 jane에 User2타입을 할당하면,
// string은 User2에 할당할 수 없으므로 에러가 발생한다.
