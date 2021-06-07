let button = document.getElementById("applicationButton");
let good = "<h3>Congratulations, You've Been Hired!</h3>"
let bad = "<h3>Sorry, you can't be hired... We want money</h3>"
let appDecision = document.getElementById("appDecision");

function displayResult(){
    let hirer = document.getElementById("hireDecider");
    let decision = hirer.value;
    console.log(decision);
    if(decision == "yes")
        appDecision.innerHTML = good;
    else    
        appDecision.innerHTML = bad;
}

button.addEventListener('click', displayResult);