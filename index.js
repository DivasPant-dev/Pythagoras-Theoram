let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let display = document.getElementById("display");

function check() {
    if (input1.value == "" || input2.value == "") {
        display.value = "Error";
    }
    else {
        input1 = input1.value;
        input2 = input2.value;

        const result = Math.sqrt(Math.pow(input1, 2) + Math.pow(input2, 2));

        let displayAccess = document.getElementById("display");

        displayAccess.value += "Hypotenuse = " + result;

        
    }
}

function refresh() {
    window.location.reload();
}