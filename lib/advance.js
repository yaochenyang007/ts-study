//ts进阶用法
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function nickName(name) {
    if (typeof name == "string") {
        return name.toString();
    }
    else {
        name();
    }
}
function handle(ele, s) {
    //  do something
}
handle(document.getElementById("hello"), "auto");
// 元组（Tuple）合并了不同类型的对象。
var tu;
tu = ["str", 2];
tu.push("2");
tu.push(3);
//枚举
//常数项
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["ts"] = 2] = "ts";
    days[days["we"] = 3] = "we";
    days[days["Thu"] = 4] = "Thu";
    days[days["Fri"] = 5] = "Fri";
    days[days["Sat"] = 6] = "Sat";
})(days || (days = {}));
days["sun"] === 0;
days["mon"] === 1;
//计算项
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
var directions1 = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */
];
var directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
];
//泛型
function createArray(num, value) {
    var result = [];
    for (var index = 0; index < num; index++) {
        result[index] = value;
    }
    return result;
}
createArray(5, "ycy");
//类与接口
//类（class）实现（implements）接口（interface）
// 举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
//这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var safeDoor = /** @class */ (function (_super) {
    __extends(safeDoor, _super);
    function safeDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    safeDoor.prototype.alert = function () {
        console.log("SecurityDoor alert");
    };
    return safeDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log("Car alert");
    };
    return Car;
}());
