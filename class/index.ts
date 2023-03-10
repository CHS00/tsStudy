class Car0{
  // color:string;
  // js에서는 아래만 작성해도 작동하지만, ts에서는 에러가 발생한다.
  // (color프로퍼티가 Car에 없다고 뜸)
  // 따라서 위와같이 맴버변수는 미리 선언해 주어야 한다.
  constructor(public /*readonly*/ color:string){
    // 또는 변수 안에 public이나 readonly를 적어주어 해결한다.(접근 제한자)
    this.color=color;
  }
  start(){
    console.log("start");
  }
}

const bmw = new Car0("red")

// 접근제한자(public, private, protected)
class Car{
  /*private(#)*/ /*protected*/ /*readonly*/ name:string="car";
  color:string;
  constructor(color:string){
    this.color=color;
  }
  start(){
    console.log("start");
    console.log(this./*#*/name);
  }
}

class Bmw extends Car {
  constructor(color:string){
    super(color);
  }
  showName(){
    // 위의 주석처럼 private를 사용하면(또는 앞에 #)
    //아래의 super.name은 에러가 난다.
    // Car클래스 내부에서만 사용할 수 있게 하는것.
    console.log(super.name);
  }
}

const z4 = new Bmw("black");

console.log(z4.name);
// protected를 사용하면 클래스인스턴스(z4와 같이 클래스로 새로 찍어낸 것)에서는
// 사용할 수 없다.

/*
정리하자면
public - 자식 클래스, 클래스인스턴스 모두 접근 가능.
protected - 자식 클래스에서 접근 가능.
private - 해당 클래스 내부에서만 접근 가능. (#변수명으로 private화 할 수 있음.)
*/

// z4.name = "zzzz4"와 같이 변경이 가능하나, 이를 막고싶다면,
// readonly(읽기전용) 키워드를 붙여준다.

// 이를 수정하고싶다면 constructor에 name을 할당하고 super에도 name을 할당하여,
// constructor(color:string,name){
//   super(color,name);
// }
// const z4 = new Bmw("black","zzzz4");와 같이 변경해주어야 할 것이다.

// static
class Car2{
  name:string="car";
  color:string;
  static wheels=4;
  // 이렇게 static으로 선언된 정적 멤버변수는
  // 아래와 같이 this를 쓰지않고 class명을 쓴다.
  constructor(color:string){
    this.color=color;
  }
  start(){
    console.log("start");
    console.log(this.name);
    console.log(Car2.wheels);
  }
}

class Bmw2 extends Car2 {
  constructor(color:string){
    super(color);
  }
  showName(){
    console.log(super.name);
  }
}

const x4 = new Bmw("black");

console.log(x4.name);

// 추상 class (class앞에 abstract를 붙여 만들 수 있음)
abstract class Car3{
  color:string;
  constructor(color:string){
    this.color=color;
  }
  start(){
    console.log("start");
  }
  abstract doSomething():void;
  // 추상클래스 내부의 추상메서드는 반드시 상속받은 쪽에서 구현을 해야함.
  // (따라서 아래 Bmw3 class에 doSomething을 구현하지않으면 에러발생)
  // 추상은 구체적인 기능은 상속받는 쪽에서 구현한다는 것을 의미함
}

// const car = new Car3("red")
// 추상클래스는 위와같이 new를 이용해서 객체를 만들 수 없음.
// 오직 상속을 통해서만 사용 가능.

class Bmw3 extends Car3 {
  constructor(color:string){
    super(color);
  }
  doSomething() {
    alert(3);
  }
}