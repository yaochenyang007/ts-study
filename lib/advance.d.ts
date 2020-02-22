declare type Name = string;
declare type fn = () => string;
declare type Nameorfn = Name | fn;
declare function nickName(name: Nameorfn): Name;
declare type str = "scroll" | "auto" | "font";
declare function handle(ele: Element, s: str): void;
declare let tu: [string, number];
declare enum days {
    sun = 0,
    mon = 1,
    ts = 2,
    we = 3,
    Thu = 4,
    Fri = 5,
    Sat = 6
}
declare enum Color {
    Red = 0,
    Green = 1,
    Blue
}
declare const enum Directions1 {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
declare let directions1: Directions1[];
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
declare let directions: Directions[];
declare function createArray<T>(num: number, value: T): Array<T>;
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}
declare class Door {
}
interface Alarm {
    alert(): any;
}
declare class safeDoor extends Door implements Alarm {
    alert(): void;
}
declare class Car implements Alarm {
    alert(): void;
}
