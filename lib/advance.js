//ts进阶用法
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
//类
//泛型
