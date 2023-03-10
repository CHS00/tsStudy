// Generic
// Generic을 사용하면 함수, 인터페이스, 클래스를 다양한 타입으로 재사용 할 수있음.
function getSize(arr) {
    // <T>로 제네릭 사용
    return arr.length;
}
const arr1 = [1, 2, 3];
getSize(arr1); //3
//getSize<number>라고 선언함으로 arr1의 부분이 모두 number로 사용됨
const arr2 = ["a", "b", 3];
getSize(arr2); //3
const m1 = {
    name: "s21",
    price: 1000,
    opt: {
        color: "Red",
        coupon: false,
    }
};
const m2 = {
    name: "s20",
    price: 900,
    opt: "good"
};
const user = { name: "a", age: 10 };
const car = { name: "bmw", color: "red" };
const book = { price: 3000 };
function showName(data) {
    // 해석: data변수로는 어떠한 T 타입이 올것인데,
    // 그 T타입은 name이 string인 형태를 확장한 형태이다.
    return data.name;
}
showName(user);
showName(car);
// showName(book);따라서 name이 없는 book에는 에러가 발생한다.
