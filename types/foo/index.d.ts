// export 申明文件

declare const name: string;
declare function getName(): string;
declare class Animal {
  constructor(name: string);
  sayHi(): string;
}
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
interface Options {
  data: any;
} //注意  interface前面不需要添加declare
export { name, getName, Animal, Directions, Options };

//导出一个拥有子属性的对象
export namespace foo {
  const name: string;
  namespace bar {
    function baz(): string;
  }
}

// 默认导出 export default，只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出
export default function foo2(): string;

//export =
// 整体导入
// import * as foo from "foo";
// 单个导入
// import { bar } from "foo";
