"use strict";
//ts基础语法
exports.__esModule = true;
//定义布尔值
var isDone = false;
//定义布尔对象
var boolnews = new Boolean(1);
//直接调用Boolean也可以定义布尔值
var boolcc = Boolean(1);
//定义数值 number
var decl = 6;
var hex = 0xffff;
//定义字符串
var str = "24岁";
//模版字符串
var temp = "\u6211\u662F\u59DA\u6668\u9633" + str;
//void,没有任何返回值的函数
function alertName() {
    alert(3);
}
//申明一个void类型的变量没有任何用，只能设置为undefined或者null
var name1 = null;
//undefined和null类型
var u = undefined;
var n = null;
//undefined和null是所有类型的子类型
var num = null;
var str1 = undefined;
var nu;
var str2 = nu;
//void类型的变量不能赋值给number或其他的类型
var vo;
// let num1: number = vo; Type 'void' is not assignable to type 'number'.
//任意值（Any）用来表示允许赋值为任意类型。
var str3 = 2;
str3 = "2";
//变量如果在未申明类型时，就是默认为any，可以为任意类型
var something;
something = 2;
something = "2";
//类型推到，如果赋值一个变量没有指定类型，就会推倒他的类型
var num3 = 2;
// num3 = '2' //不能将类型“"2"”分配给类型“number”。ts(2322)
//联合类型，取值可以为多种类型中的一种
var strNum;
strNum = "2";
strNum = 2;
//访问联合类型中属性方法，只能访问他们之间共有的属性或者方法
var fun = function getLength(something) {
    return something.toString();
}; //类型“number”上不存在属性“length”。
//联合类型在做变量赋值的时候，会根据推倒出一个类型
var strOrNum;
strOrNum = 2;
//  strOrNum.length  //类型“number”上不存在属性“length”。ts(2339)
strOrNum.toString();
var obj = {
    name: "姚晨阳",
    age: 20
};
//赋值的时候，变量的形状必须和接口的形状保持一致。
var obj1 = {
    name: "姚晨阳",
    age: 20
    // sex:'男'
}; //   对象文字可以只指定已知属性，并且“sex”不在类型“Person”中。ts(2322)
var man = {
    sex: "nan"
};
var obj2 = {
    age: 2,
    name: "22"
};
var nameObj = {
    name: "ycy"
};
// nameObj.name = 'ycy'; //Cannot assign to 'name' because it is a read-only property.ts(2540)
//数组类型
var arr = [1, 2, 3, 4, 5];
//数组的一些方法的参数也会对类型进行限制
arr.push(1);
//  arr.push('1'); //类型“"1"”的参数不能赋给类型“number”的参数。ts(2345)
//数组泛型
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [1, 2, 3, 4, 5];
function sum() {
    var arg = arguments; // 定义arg为类数组类型
}
//ts已经集成好的类数组接口,如 IArguments, NodeList, HTMLCollection 等：
function sum1() {
    var arg1 = arguments; // 定义arg为类数组类型
}
//any在数组中的使用
var arr3 = [1, "2", false, null, undefined];
//函数申明
function sayHello(person) {
    return "Hello, " + person;
}
var user = "ycy";
sayHello(user); //输入多余或者少于要求要传的参数个数是不被允许的
//普通表达式的函数申明
var fun1 = function (age) {
    return age + "ycy";
};
//函数表达式申明,fun2变量中的箭头函数左边表示输入参数，右边表示输出类型
var fun2 = function (age) {
    return age + "ycy";
};
var fun3 = function (str, subStr) {
    return str.search(subStr) !== -1;
};
//函数的可选参数,'?'
function sayHello1(first, two) {
    //可选参数必须接在必选参数后面
    if (two) {
        return two + first;
    }
    else {
        return first;
    }
}
//函数参数默认值
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = "tom"; }
    if (lastName === void 0) { lastName = "Cat"; }
    return firstName + " " + lastName;
}
var tom = buildName();
var cat = buildName(undefined, "Cat");
//函数剩余参数
function push(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    rest.forEach(function (item) {
        arr.push(item);
    });
    return arr;
}
var arr4 = push([], 1, 2, 3, 4, "2");
console.log(arr4);
function reverve(x) {
    if (typeof x === "number") {
        return Number(x
            .toString()
            .split("")
            .reverse()
            .join(""));
    }
    else if (typeof x === "string") {
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
function assertiono(something) {
    if (something.length) {
        return something.length;
    }
    else if (typeof something == "number") {
        return something.toString();
    }
}
function assertiono1(something) {
    if (something.length) {
        return something.length;
    }
    else if (typeof something == "number") {
        return something.toString();
    }
}
//申明文件，使用第三方库时，我们需要引用它的声明文件
//简单声明语句
jQuery("#foo");
var cat1 = new An("Tom");
//base.js
jq.ajax("/api/get_something");
//只要在一个.d.ts申明文件中申明了一个接口类型，就变成了全局接口，其他的ts文件可以也可以引用
var settings = {
    method: "POST",
    data: {
        name: "ycy"
    }
};
fun6.ajax("/api/post_something", settings);
// base.ts
var settings1 = {
    method: "GET",
    data: {
        name: "ycy"
    }
};
fun7.ajax("/api/post_something", settings1);
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
var index_1 = require("./types/foo/index");
console.log(index_1.name);
var myName = index_1.getName();
var cat2 = new index_1.Animal("Tom");
var directions = [
    index_1.Directions.Up,
    index_1.Directions.Down,
    index_1.Directions.Left,
    index_1.Directions.Right
];
var options = {
    data: {
        name: "foo"
    }
};
index_1.foo.bar.baz();
//内置对象
//ECMAScript 的内置对象
// Boolean，Error，Date，RegExp
// DOM 和 BOM 提供的内置对象有： Document、HTMLElement、Event、NodeList 等。
// TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中。
// export {}; //申明模块作用域，解决与全局作用域的变量产生冲突 (Cannot redeclare block-scoped variable 'name')
