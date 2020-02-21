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

//类

//泛型
