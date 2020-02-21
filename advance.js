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


enum Color {Red, Green, Blue = "blue".length};
