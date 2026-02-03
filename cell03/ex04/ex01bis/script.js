const forwardColor = (color) => {
    if (color === "red") return "green";
    if (color === "green") return "blue";
    if (color === "blue") return "red";
    return "black";
};
const backwardColor = (color) => {
    if (color === "red") return "blue";
    if (color === "green") return "red";
    if (color === "blue") return "green";
    return "black";
};
const setElementStyles = (element, color, diameter) => {
    $(element).css("background-color", color);
    $(element).css("width", diameter);
    $(element).css("height", diameter);
};

let currentColor = "red";
let currentDiameter = 200;

let allowShrink = true;

$(document).ready(function () {
    $(".balloon").click(function () {
        allowShrink = false;

        if (currentDiameter + 10 > 420) currentDiameter = 200;
        else currentDiameter += 10;
        currentColor = forwardColor(currentColor);

        setElementStyles(this, currentColor, currentDiameter);
    });
    $(".balloon").mouseenter(function () {
        allowShrink = true;
    });
    $(".balloon").mouseleave(function () {
        if (!allowShrink) return;

        if (currentDiameter - 5 < 200) currentDiameter = 200;
        else currentDiameter -= 5;
        currentColor = backwardColor(currentColor);

        setElementStyles(this, currentColor, currentDiameter);
    });
});
