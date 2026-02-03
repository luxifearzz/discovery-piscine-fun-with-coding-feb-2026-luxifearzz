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
    element.style.backgroundColor = color;
    element.style.width = diameter + "px";
    element.style.height = diameter + "px";
};

const balloon = document.querySelector(".balloon");
let currentColor = "red";
let currentDiameter = 200;

let allowShrink = true;

balloon.addEventListener("click", (e) => {
    allowShrink = false;

    if (currentDiameter + 10 > 420) currentDiameter = 200;
    else currentDiameter += 10;
    currentColor = forwardColor(currentColor);

    setElementStyles(e.currentTarget, currentColor, currentDiameter);
});

balloon.addEventListener("mouseenter", () => {
    allowShrink = true;
});

balloon.addEventListener("mouseleave", (e) => {
    if (!allowShrink) return;

    if (currentDiameter - 5 < 200) currentDiameter = 200;
    else currentDiameter -= 5;
    currentColor = backwardColor(currentColor);

    setElementStyles(e.currentTarget, currentColor, currentDiameter);
});
