function calculate() {
let amount = document.getElementById("amount").value;
let interest = document.getElementById("interest").value / 100 / 12;
let years = document.getElementById("years").value * 12;

let emi = (amount * interest * Math.pow(1+interest, years)) /
          (Math.pow(1+interest, years)-1);

document.getElementById("result").innerText =
"Monthly EMI: " + emi.toFixed(2);
}