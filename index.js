let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let display = document.getElementById("display");

function check() {
    if (input1.value === "" || input2.value === "") {
        display.value = "Error";
    } else {
        let value1 = parseFloat(input1.value);
        let value2 = parseFloat(input2.value);

        const result = Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2));

        display.value = "Hypotenuse = " + result;

        // Clear the input values
        input1.value = "";
        input2.value = "";
    }
}

function refresh() {
    window.location.reload();
}
