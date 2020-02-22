//ts进阶用法

//类型别名
type Name = string;
type fn = () => string;
type Nameorfn = Name | fn;
function nickName(name: Nameorfn): Name {
  if (typeof name == "string") {
    return name.toString();
  } else {
    name();
  }
}

//字符串字面量类型
type str = "scroll" | "auto" | "font";
function handle(ele: Element, s: str) {
  //  do something
}
handle(document.getElementById("hello"), "auto");

// 元组（Tuple）合并了不同类型的对象。
let tu: [string, number];
tu = ["str", 2];
tu.push("2");
tu.push(3);

//枚举

//常数项
enum days {
  sun,
  mon,
  ts,
  we,
  Thu,
  Fri,
  Sat
}
days["sun"] === 0;
days["mon"] === 1;

//计算项
enum Color {
  Red,
  Green,
  Blue = "blue".length
}

//常数枚举，使用const enum
const enum Directions1 {
  Up,
  Down,
  Left,
  Right
}

let directions1 = [
  Directions1.Up,
  Directions1.Down,
  Directions1.Left,
  Directions1.Right
];

//外部枚举，使用 declare enum 定义的枚举类型
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];

//泛型
function createArray<T>(num: number, value: T): Array<T> {
  let result: T[] = [];
  for (let index = 0; index < num; index++) {
    result[index] = value;
  }
  return result;
}
createArray(5, "ycy");

// 声明合并，接口合并
interface Alarm {
  price: number;
  alert(s: string): string;
}
interface Alarm {
  weight: number;
  alert(s: string, n: number): string;
}
// 等价于
interface Alarm {
  price: number;
  weight: number;
  alert(s: string): string;
  alert(s: string, n: number): string;
}

//类与接口

//类（class）实现（implements）接口（interface）
// 举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
//这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：

class Door {}
interface Alarm {
  alert();
}
class safeDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor alert");
  }
}
class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}
