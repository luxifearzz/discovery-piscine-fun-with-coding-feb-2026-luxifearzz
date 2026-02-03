const validateInput = (...inputs) => {
    for (const input of inputs) {
        if (input < 0 || input % 1 != 0) return false;
    }
    return true;
};

const doOperation = (left, opr, right) => {
    if (opr === "+") return left + right;
    if (opr === "-") return left - right;
    if (opr === "*") return left * right;

    if (right == 0) return "It's over 9000!";
    if (opr === "/") return left / right;
    if (opr === "%") return left % right;
};

$(document).ready(function () {
    setInterval(() => {
        alert("Please, use me...");
    }, 30 * 1000);
    $("#calcForm").submit(function (e) {
        e.preventDefault();

        const firstNum = Number($("#left-value").val());
        const secondNum = Number($("#right-value").val());
        const operator = $("#operator").val();

        if (!validateInput(firstNum, secondNum)) {
            alert("Error :(");
            return;
        }

        const result = doOperation(firstNum, operator, secondNum);
        console.log(result);
        alert(result);
    });
});
