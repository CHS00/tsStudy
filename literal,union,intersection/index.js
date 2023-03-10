// Literal types
const userName1 = "Bob";
// const이므로 "bob"외의 값을 가질수 없고
let userName2 = "Tom";
;
const user = {
    name: "Bob",
    job: "developer"
};
;
function getGift(gift) {
    console.log(gift.color);
    // 단순히 gift.start();로 입력할 시, Mobile에는 start가 없으므로 에러가 발생한다.
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
