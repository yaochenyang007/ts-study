//ts基础语法

//定义布尔值
let isDone: boolean = false;

//定义布尔对象
let boolnews: Boolean = new Boolean(1);

//直接调用Boolean也可以定义布尔值
let boolcc: boolean = Boolean(1);

//定义数值 number
let decl: number = 6;
let hex: number = 0xffff;

//定义字符串
let str: string = "24岁";

//模版字符串
let temp = `我是姚晨阳${str}`;

//void,没有任何返回值的函数
function alertName(): void {
  alert(3);
}

//申明一个void类型的变量没有任何用，只能设置为undefined或者null
let name1: void = null;

//undefined和null类型
let u: undefined = undefined;
let n: null = null;

//undefined和null是所有类型的子类型
let num: number = null;
let str1: string = undefined;
let nu: null;
let str2: string = nu;

//void类型的变量不能赋值给number或其他的类型
let vo: void;
// let num1: number = vo; Type 'void' is not assignable to type 'number'.

//任意值（Any）用来表示允许赋值为任意类型。
let str3: any = 2;
str3 = "2";

//变量如果在未申明类型时，就是默认为any，可以为任意类型
let something;
something = 2;
something = "2";

//类型推到，如果赋值一个变量没有指定类型，就会推倒他的类型
let num3 = 2;
// num3 = '2' //不能将类型“"2"”分配给类型“number”。ts(2322)

//联合类型，取值可以为多种类型中的一种
let strNum: string | number;
strNum = "2";
strNum = 2;

//访问联合类型中属性方法，只能访问他们之间共有的属性或者方法
let fun = function getLength(something: string | number): string {
  return something.toString();
}; //类型“number”上不存在属性“length”。

//联合类型在做变量赋值的时候，会根据推倒出一个类型
let strOrNum: number | string;
strOrNum = 2;
//  strOrNum.length  //类型“number”上不存在属性“length”。ts(2339)
strOrNum.toString();

//使用接口定义对象的类型
interface Person {
  name: string;
  age: number;
}
let obj: Person = {
  name: "姚晨阳",
  age: 20
};
//赋值的时候，变量的形状必须和接口的形状保持一致。
let obj1: Person = {
  name: "姚晨阳",
  age: 20
  // sex:'男'
}; //   对象文字可以只指定已知属性，并且“sex”不在类型“Person”中。ts(2322)

//可选属性,在对象的属性名后面接 ‘？’ 号 ，表示该属性可以不存在。
interface Woman {
  name?: "string";
  sex: string;
}
let man: Woman = {
  sex: "nan"
};

//任意属性,一旦定义了任意类型，接口中的可选属性和确定属性必须为任意类型的子集，不然就会报错
interface Something {
  // name: string;
  [propName: number]: any;
  [propName: string]: any;
}
let obj2: Something = {
  age: 2,
  name: "22"
};

//只读属性
interface Anything {
  readonly name: string;
}
let nameObj: Anything = {
  name: "ycy"
};
// nameObj.name = 'ycy'; //Cannot assign to 'name' because it is a read-only property.ts(2540)

//数组类型
let arr: number[] = [1, 2, 3, 4, 5];

//数组的一些方法的参数也会对类型进行限制
arr.push(1);
//  arr.push('1'); //类型“"1"”的参数不能赋给类型“number”的参数。ts(2345)

//数组泛型
let arr1: Array<number> = [1, 2, 3, 4, 5, 6];

//数组接口

interface Arr {
  [index: number]: number; //只要索引是数字时，那么值必须是数字类型
}
let arr2: Arr = [1, 2, 3, 4, 5];

//类数组
interface Argument {
  [index: number]: number;
  length: number;
  callee: Function;
} //定义Argument为类数组的接口
function sum() {
  let arg: Argument = arguments; // 定义arg为类数组类型
}

//ts已经集成好的类数组接口,如 IArguments, NodeList, HTMLCollection 等：

function sum1() {
  let arg1: IArguments = arguments; // 定义arg为类数组类型
}

// IArguments类接口简单实现
interface Iargments {
  [index: number]: number;
  length: number;
  callee: Function;
}

//any在数组中的使用
let arr3: any[] = [1, "2", false, null, undefined];

//函数申明
function sayHello(person: string): string {
  return "Hello, " + person;
}
let user = "ycy";
sayHello(user); //输入多余或者少于要求要传的参数个数是不被允许的

//普通表达式的函数申明
let fun1 = function(age: number): string {
  return age + "ycy";
};
//函数表达式申明,fun2变量中的箭头函数左边表示输入参数，右边表示输出类型
let fun2: (age: number) => string = function(age: number): string {
  return age + "ycy";
};

//用接口定义函数
interface Func {
  (str: string, subStr: string): boolean;
}
let fun3: Func = function(str: string, subStr: string): boolean {
  return str.search(subStr) !== -1;
};

//函数的可选参数,'?'
function sayHello1(first: string, two?: string): string {
  //可选参数必须接在必选参数后面
  if (two) {
    return two + first;
  } else {
    return first;
  }
}

//函数参数默认值
function buildName(firstName: string = "tom", lastName: string = "Cat") {
  return firstName + " " + lastName;
}
let tom = buildName();
let cat = buildName(undefined, "Cat");

//函数剩余参数
function push(arr: any[], ...rest: any[]): any[] {
  rest.forEach(item => {
    arr.push(item);
  });
  return arr;
}
let arr4: any[] = push([], 1, 2, 3, 4, "2");
console.log(arr4);

//函数重载
function reverve(x: number): number;
function reverve(x: string): string;
function reverve(x: number | string): string | number {
  if (typeof x === "number") {
    return Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else if (typeof x === "string") {
    return x
      .split("")
      .reverse()
      .join("");
  }
}

//类型断言 Type Assertion
// <类型>值
// 值 as 类型
// 断言类型不是类型转换，不可断言联合类型中不存在的类型
function assertiono(something: string | number) {
  if ((<string>something).length) {
    return (<string>something).length;
  } else if (typeof (<number>something) == "number") {
    return something.toString();
  }
}
function assertiono1(something: string | number) {
  if ((something as string).length) {
    return (<string>something).length;
  } else if (typeof (something as number) == "number") {
    return something.toString();
  }
}

//申明文件，使用第三方库时，我们需要引用它的声明文件

//简单声明语句
jQuery("#foo");
declare let jQuery: (selector: string) => any;

//通常会把一个申明语句放在一个单独的申明文件中,声明文件必需以 .d.ts 为后缀。
// 在web/jQuery.d.ts目录中

//第三方声明文件
//推荐使用 @types 统一管理第三方库的声明文件,安装依赖即可，不用多写申明文件代码。
// npm install @types/jquery --save-dev

//当第三方库中没有申明文件时，个人自己书写申明文件

//全局变量，通过 <script> 标签引入 jQuery，注入全局变量 $ 和 jQuery。
// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型

//  web/jQuery.d.ts目录
declare const $: (selector: string) => any; //declare var,let,const,使用const定义时不允许修改变量的值

// $ = function(){} // Cannot assign to '$' because it is a constant.ts(2588) 无法分配给“$”，因为它是常量。ts（2588）

// declare function,支持函数重载
declare function jQuery1(selector: string): any;
declare function jQuery1(domReadyCallback: () => any): any;

//declare class,declare class 语句也只能用来定义类型，不能用来定义具体的实现
declare class An {
  name: string;
  constructor(name: string);
  sayHi(): string;
}
let cat1 = new An("Tom");

//定义枚举 declare enum
declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}

//定义命名空间，declare namespace ，早期为了解决模块化而添加的关键字，后来用来表示全局变量是一个对象，包含很多子属性。
//申明文件 web/jq.d.ts
declare namespace jq {
  function ajax(url: string, setting?: any): void;
}
//base.js
jq.ajax("/api/get_something");

//嵌套的命名空间
declare namespace fun5 {
  function ajax(url: string, setting?: any): void;
  namespace fn {
    function extend(object: any): void;
  }
}

// 在命名空间中使用interface申明一个全局接口
//申明文件 web/in.d.ts
interface AjaxSettings {
  method?: "GET" | "POST";
  data?: any;
}
//base.ts
declare namespace fun6 {
  function ajax(url: string, settings?: AjaxSettings): void;
}
//只要在一个.d.ts申明文件中申明了一个接口类型，就变成了全局接口，其他的ts文件可以也可以引用
let settings: AjaxSettings = {
  method: "POST",
  data: {
    name: "ycy"
  }
};
fun6.ajax("/api/post_something", settings);

//防止命名冲突，将接口放在命名空间下就可以避免命名空间
// web/fun7.d.ts
declare namespace fun7 {
  interface AjaxSettings {
    method?: "GET" | "POST";
    data?: any;
  }
  function ajax(url: string, settings?: AjaxSettings): void;
}
// base.ts
let settings1: AjaxSettings = {
  method: "GET",
  data: {
    name: "ycy"
  }
};
fun7.ajax("/api/post_something", settings1);

//声明合并
// src/fun8.d.ts
declare function fun8(selector: string): any;
declare namespace fun8 {
  function ajax(url: string, settings?: any): void;
}
// base.ts
fun8("#root");
fun8.ajax("/api/post_something", settings1);

//npm 包申明语法.
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块

//创建申明文件之前，需要先看申明文件是否存在 types仓库中，比如安装 npm install @types/canvg --save-dev
//创建申明文件 创建一个 types 目录，专门用来管理自己写的声明文件，将 canvg 的声明文件放到 types/canvg/index.d.ts 中。这种方式需要配置下 tsconfig.json 中的 paths 和 baseUrl 字段。
//tsconfig.json
// {
//     "compilerOptions": {
//         "module": "commonjs",
//         "baseUrl": "./",
//         "paths": {
//             "*": ["types/*"]
//         }
//     }
// }

// export 用法
import {
  name,
  getName,
  Animal,
  Directions,
  Options,
  foo
} from "./types/foo/index";
console.log(name);
let myName = getName();
let cat2 = new Animal("Tom");
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];
let options: Options = {
  data: {
    name: "foo"
  }
};
foo.bar.baz();

//内置对象

// export {}; //申明模块作用域，解决与全局作用域的变量产生冲突 (Cannot redeclare block-scoped variable 'name')
