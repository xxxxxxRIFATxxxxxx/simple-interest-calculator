// Define UI
var initialPrincipalBalance = document.querySelector("#initial-principal-balance");
var annualInterestRate = document.querySelector("#annual-interest-rate");
var timeInYears = document.querySelector("#time-in-years");
var finalAmount = document.querySelector("#final-amount");
var interestForm = document.querySelector("#interest-form");

// Define Function
function interestCalculator(e) {
    e.preventDefault();

    // converting interest percent to decimal
    const interest = annualInterestRate.value / 100;

    // Calculate Total Money
    const result = initialPrincipalBalance.value * (1 + (interest * timeInYears.value));

    // Print Result
    finalAmount.innerText = result;
};

// Define Event Listener
interestForm.addEventListener("submit", interestCalculator);

