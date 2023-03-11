const uk = "id";
// Partial<T>
// Partial은 프로퍼티를 모두 옵션으로 바꿔준다
let admin = {
    // 원래는 아래만 입력시 User의 age와 gender가 없어 에러가 나지만
    // User를 Partial로 감싸줌으로 옵션으로 바꾸었음.
    id: 1,
    name: "Bob",
    // job:"teacher"
    // 없는 프로퍼티를 사용하는것도 에러
};
let admin2 = {
    id: 1,
    name: "Bob",
    age: 10 // age? 이므로 옵션이지만 Required로 감싸줌으로 age는 필수값이 됨.
};
// readonly<T>
// 읽기전용으로 바꿔 줌
let admin3 = {
    id: 1,
    name: "Bob",
    age: 10
};
const score = {
    1: "A",
    2: "C",
    3: "F",
    4: "B"
};
function isValid(user) {
    const result = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0
    };
    return result;
}
const admin4 = {
    id: 1,
    name: "Bob",
};
// Omit<T,K>
// T타입에서 K프로퍼티만 제외시켜 사용(Pick과 반대)
const admin5 = {
    age: 10,
    gender: "m"
};
